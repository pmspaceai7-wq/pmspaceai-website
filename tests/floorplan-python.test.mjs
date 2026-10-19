import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  pythonStartupHelp,
  resolvePythonCommand,
} from "../freetools/floorplan-kg-backend/python-command.mjs";

test("PYTHON_EXECUTABLE is used as one executable, including paths with spaces", () => {
  const command = resolvePythonCommand({
    env: { PYTHON_EXECUTABLE: "C:\\Program Files\\Python\\python.exe" },
    platform: "win32",
    engineDir: "C:\\project\\freetools\\floorplan-kg-backend",
    fileExists: () => true,
  });

  assert.equal(command.command, "C:\\Program Files\\Python\\python.exe");
  assert.deepEqual(command.args, []);
  assert.equal(command.source, "environment");
});

test("Windows falls back to the Python launcher with -3 as a separate argument", () => {
  const command = resolvePythonCommand({
    env: {},
    platform: "win32",
    engineDir: "C:\\project\\freetools\\floorplan-kg-backend",
    fileExists: () => false,
  });

  assert.equal(command.command, "py");
  assert.deepEqual(command.args, ["-3"]);
});

test("Unix falls back to python3", () => {
  const command = resolvePythonCommand({
    env: {},
    platform: "linux",
    engineDir: "/project/freetools/floorplan-kg-backend",
    fileExists: () => false,
  });

  assert.equal(command.command, "python3");
  assert.deepEqual(command.args, []);
});

test("an existing project virtual environment takes priority over system Python", () => {
  const engineDir = path.resolve("freetools", "floorplan-kg-backend");
  const windowsVenv = path.resolve(engineDir, ".venv", "Scripts", "python.exe");
  const command = resolvePythonCommand({
    env: {},
    platform: "win32",
    engineDir,
    fileExists: (filePath) => filePath === windowsVenv,
  });

  assert.equal(command.command, windowsVenv);
  assert.deepEqual(command.args, []);
  assert.equal(path.isAbsolute(command.command), true);
  assert.equal(command.source, "virtualenv");
});

test("Unix virtual environments resolve to an absolute .venv/bin/python path", () => {
  const engineDir = path.resolve("freetools", "floorplan-kg-backend");
  const unixVenv = path.resolve(engineDir, ".venv", "bin", "python");
  const command = resolvePythonCommand({
    env: {},
    platform: "linux",
    engineDir,
    fileExists: (filePath) => filePath === unixVenv,
  });

  assert.equal(command.command, unixVenv);
  assert.deepEqual(command.args, []);
  assert.equal(path.isAbsolute(command.command), true);
});

test("missing Python produces actionable Windows startup guidance", () => {
  const command = resolvePythonCommand({
    env: {},
    platform: "win32",
    engineDir: "C:\\project\\freetools\\floorplan-kg-backend",
    fileExists: () => false,
  });
  const message = pythonStartupHelp(command, "win32");

  assert.match(message, /Python engine could not be started/);
  assert.match(message, /Configured executable: \(not set\)/);
  assert.match(message, /Python launcher \(`py`\)/);
  assert.match(message, /PYTHON_EXECUTABLE/);
});
