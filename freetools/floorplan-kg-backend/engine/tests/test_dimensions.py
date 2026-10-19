import pytest

from engine.dimensions import (find_dimensions, find_size_pair,
                               format_inches, parse_dimension)


@pytest.mark.parametrize(
    "text,inches",
    [
        ("3'-0\"", 36.0),
        ("11'-8 3/4\"", 140.75),       # the case Dimractor's parser reads as 8.75
        ("27'6\"", 330.0),
        ("28'-4 1/8\"", 340.125),
        ("2'-0 1/2\"", 24.5),
        ("5'", 60.0),
        ("34 1/2\"", 34.5),
        ("10\"", 10.0),
        ("0'-8\"", 8.0),
    ],
)
def test_parse_dimension(text, inches):
    assert parse_dimension(text) == pytest.approx(inches)


def test_no_dimension_returns_none():
    assert parse_dimension("KITCHEN") is None
    assert parse_dimension("") is None
    assert parse_dimension("2 X 6") is None


def test_find_dimensions_returns_each_token_in_order():
    found = find_dimensions("27'6\" X 12'0\"")
    assert [d.raw for d in found] == ["27'6\"", "12'0\""]
    assert [d.inches for d in found] == [330.0, 144.0]
    assert found[0].start < found[1].start


def test_find_size_pair_handles_both_notations():
    assert find_size_pair("27'6\" X 12'0\"")[:2] == (330.0, 144.0)
    assert find_size_pair("13'-6\" X 15'-6\"")[:2] == (162.0, 186.0)
    assert find_size_pair("KITCHEN") is None


@pytest.mark.parametrize(
    "inches,display",
    [(36.0, "3'-0\""), (140.75, "11'-8 3/4\""), (10.0, "0'-10\""), (24.5, "2'-0 1/2\"")],
)
def test_format_inches_round_trips(inches, display):
    assert format_inches(inches) == display
    assert parse_dimension(display) == pytest.approx(inches)


def test_format_inches_carries_at_twelve():
    # 11 15/16" must not render as 0'-12".
    assert format_inches(11.97) == "1'-0\""
