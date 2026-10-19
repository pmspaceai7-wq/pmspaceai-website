import pytest

from engine.extract import Page, TextRun
from engine.rooms import extract_area_callouts, extract_rooms, is_room_name


def page_with(runs):
    return Page(number=1, width=792, height=612,
                runs=[TextRun(text, bbox, 1) for text, bbox in runs])


def test_is_room_name_rejects_fixture_callouts():
    assert is_room_name("MASTER BDRM")
    assert is_room_name("LIVING ROOM")
    assert not is_room_name("REFRIGERATOR")
    assert not is_room_name("ARCHED OPENING")
    assert not is_room_name("3040SH")


def test_size_binds_to_the_label_directly_above_it():
    page = page_with([
        ("KITCHEN", [100, 100, 160, 110]),
        ("11'0\" X 10'0\"", [95, 112, 170, 122]),
        ("DINING ROOM", [400, 100, 480, 110]),
        ("12'0\" X 14'0\"", [395, 112, 480, 122]),
    ])
    rooms = {r.name: r for r in extract_rooms(page)}
    assert rooms["KITCHEN"].sizeRaw == "11'0\" X 10'0\""
    assert rooms["KITCHEN"].areaSqFt == pytest.approx(110.0)
    assert rooms["DINING ROOM"].sizeRaw == "12'0\" X 14'0\""


def test_a_distant_size_is_not_claimed():
    page = page_with([
        ("PANTRY", [50, 50, 100, 60]),
        ("11'0\" X 10'0\"", [600, 500, 690, 512]),
    ])
    room = extract_rooms(page)[0]
    assert room.sizeRaw is None
    assert room.source == "label-only"


def test_two_line_labels_are_stitched():
    page = page_with([
        ("BREAKFAST", [100, 100, 170, 110]),
        ("NOOK", [115, 111, 155, 121]),
        ("6'6\" X 6'0\"", [100, 123, 170, 133]),
    ])
    rooms = extract_rooms(page)
    assert [r.name for r in rooms] == ["BREAKFAST NOOK"]
    assert rooms[0].areaSqFt == pytest.approx(39.0)


def test_perimeter_and_area_are_consistent():
    page = page_with([
        ("OFFICE", [100, 100, 150, 110]),
        ("10'0\" X 12'0\"", [100, 112, 175, 122]),
    ])
    room = extract_rooms(page)[0]
    assert room.areaSqFt == pytest.approx(120.0)
    assert room.perimeterFeet == pytest.approx(44.0)


def test_duplicate_names_get_distinct_ids():
    page = page_with([
        ("BEDROOM", [100, 100, 160, 110]),
        ("12'0\" X 12'0\"", [100, 112, 175, 122]),
        ("BEDROOM", [400, 100, 460, 110]),
        ("11'0\" X 12'0\"", [400, 112, 475, 122]),
    ])
    ids = [r.id for r in extract_rooms(page)]
    assert len(set(ids)) == 2


def test_area_callouts_are_parsed():
    page = page_with([("914 SQUARE FEET", [10, 10, 100, 20]),
                      ("TOTAL SQUARE FEET: 84", [10, 30, 130, 40])])
    callouts = extract_area_callouts(page)
    assert [c["areaSqFt"] for c in callouts] == [914.0, 84.0]
