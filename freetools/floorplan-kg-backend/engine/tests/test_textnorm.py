from engine.textnorm import collapse_repeats, is_noise, looks_mirrored, normalize


def test_collapse_quadrupled_glyphs():
    assert normalize("888844446666 SSSSFFFF") == "846 SF"
    assert normalize("FFFF....FFFF....LLLL.... 1111sssstttt FFFFLLLLRRRR") == "F.F.L. 1st FLR"


def test_collapse_leaves_ordinary_text_alone():
    for text in ("BOOKKEEPER", "MASTER BDRM", "2000 SF", "1111", "3040SH"):
        assert normalize(text) == text


def test_collapse_repeats_is_a_no_op_for_uneven_runs():
    assert collapse_repeats("AAABBB") == "AAABBB"


def test_mirrored_text_is_reversed():
    assert looks_mirrored(":TCEJORP")
    assert normalize(":TCEJORP") == "PROJECT:"
    assert not looks_mirrored("PROJECT:")


def test_smart_quotes_become_feet_and_inch_marks():
    assert normalize("11′-8″") == "11'-8\""


def test_is_noise_flags_title_block_soup():
    assert is_noise("")
    assert is_noise("1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2")
    assert not is_noise("MASTER BEDROOM")
