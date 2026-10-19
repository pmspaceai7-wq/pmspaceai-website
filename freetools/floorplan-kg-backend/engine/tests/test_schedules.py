from engine.extract import Page
from engine.schedules import _derive_columns, extract_schedules


def test_derive_columns_repairs_a_split_header():
    # pdfplumber splits this header as ['Type', 'Mark W', 'idth', ...].
    assert _derive_columns("Type Mark W idth Height Comme nts") == [
        "Type", "Mark", "Width", "Height", "Comments",
    ]


def test_derive_columns_ignores_a_headerless_table():
    assert _derive_columns("3'-0\" 6'-8\"") == []


def test_door_schedule_rows_are_typed():
    table = [
        ["Door Schedule", None, None, None, None],
        ["Type", "Mark W", "idth", "Height", "Comme\nnts"],
        ["Single-Panel 2", "1 3'-0\"", "", "7'-0\"", ""],
        ["Sliding-Closet", "9 4'-0\"", "", "6'-8\"", ""],
    ]
    schedule = extract_schedules(Page(number=1, width=1296, height=864, tables=[table]))[0]

    assert schedule.kind == "door"
    assert schedule.columns == ["Mark", "Type", "Width", "Height", "Comments"]
    assert [r["Mark"] for r in schedule.rows] == ["1", "9"]
    assert schedule.rows[0]["Type"] == "Single-Panel 2"
    assert schedule.rows[0]["_widthInches"] == 36.0
    assert schedule.rows[0]["_heightInches"] == 84.0
    assert schedule.rows[0]["_areaSqFt"] == 21.0
    assert schedule.warnings == []


def test_a_table_without_a_schedule_title_is_ignored():
    table = [["Left", "Right"], ["a", "b"], ["c", "d"]]
    assert extract_schedules(Page(number=1, width=100, height=100, tables=[table])) == []


def test_generic_schedule_falls_back_to_passthrough_rows():
    table = [
        ["Finish Schedule", None],
        ["Room", "Material"],
        ["KITCHEN", "LVT"],
    ]
    schedule = extract_schedules(Page(number=2, width=100, height=100, tables=[table]))[0]
    assert schedule.kind == "finish"
    assert schedule.rows == [{"Room": "KITCHEN", "Material": "LVT"}]
