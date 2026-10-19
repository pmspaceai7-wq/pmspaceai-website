from engine.codes import decode_opening, detect


def test_opening_code_digits_are_feet_and_inches():
    # 3040SH is 3'-0" x 4'-0", so 36" x 48" — reading it as 30" x 40" would
    # understate every window in the takeoff.
    assert decode_opening("3040SH") == {
        "widthInches": 36, "heightInches": 48,
        "operation": "Single Hung", "operationCode": "SH",
    }
    assert decode_opening("2030SH")["widthInches"] == 24
    assert decode_opening("3040ZZ") is None
    assert decode_opening("KITCHEN") is None


def test_detects_fixtures_by_tag_and_by_phrase():
    labels = {d.label for d in detect("REFRIGERATOR DW WALL OVEN")}
    assert {"Refrigerator", "Dishwasher", "Wall Oven"} <= labels


def test_fixture_tags_require_word_boundaries():
    # "DWELLING" must not register a dishwasher.
    assert not any(d.code == "DW" for d in detect("DWELLING UNIT"))


def test_assembly_callout():
    found = [d for d in detect("2 X 6 STUD WALL") if d.kind == "assembly"]
    assert found and found[0].code == "2x6"
    assert found[0].attrs["nominalDepthInches"] == 6


def test_generic_tag_falls_through_to_code():
    found = [d for d in detect("SB42FH") if d.kind == "code"]
    assert found and found[0].code == "SB42FH"


def test_detections_are_deduplicated():
    codes = [d.code for d in detect("3040SH 3040SH 3040SH")]
    assert codes.count("3040SH") == 1
