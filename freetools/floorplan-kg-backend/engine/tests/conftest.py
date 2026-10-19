import os
import pathlib

import pytest

SAMPLE_DIR = pathlib.Path(
    os.getenv(
        "FLOORPLAN_SAMPLES",
        pathlib.Path(__file__).resolve().parents[2] / "Floorplan-Dimractor" / "data" / "input",
    )
)

SAMPLES = {
    "F1": "Floorplan_20250928_001404.pdf",
    "F5": "House-Floor-Plans_20250928_001528.pdf",
}


def sample_path(key: str) -> pathlib.Path:
    path = SAMPLE_DIR / SAMPLES[key]
    if not path.exists():
        pytest.skip(f"sample {path} not available")
    return path


@pytest.fixture(scope="session")
def f1():
    from engine.pipeline import process

    return process(str(sample_path("F1")))


@pytest.fixture(scope="session")
def f5():
    from engine.pipeline import process

    return process(str(sample_path("F5")))
