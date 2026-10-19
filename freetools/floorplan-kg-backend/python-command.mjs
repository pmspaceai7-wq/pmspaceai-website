import { existsSync } from "node:fs";
import path from "node:path";

function virtualEnvPython(virtualEnv) {
  if (!virtualEnv) return undefined;

  const executable = process.platform === "win32" ? "python.exe" : "python";
  const candidate = path.join(
    virtualEnv,
    process.platform === "win32" ? "Scripts" : "bin",
    executable,
  );
  return existsSync(candidate) ? candidate : undefined;
}

export function resolvePythonCommand({ engineDir }) {
  const configured =
    process.env.FLOORPLAN_PYTHON ??
    process.env.PYTHON_EXECUTABLE ??
    process.env.PYTHON;
  if (configured) return { command: configured, args: [] };

  const localPython = virtualEnvPython(path.join(engineDir, ".venv"));
  if (localPython) return { command: localPython, args: [] };

  const activePython = virtualEnvPython(process.env.VIRTUAL_ENV);
  if (activePython) return { command: activePython, args: [] };

  return {
    command: process.platform === "win32" ? "python" : "python3",
    args: [],
  };
}

export function pythonStartupHelp(python) {
  return [
    `Could not start Python using '${python.command}'.`,
    "Install Python and the floorplan backend dependencies, or set FLOORPLAN_PYTHON to the Python executable.",
    "From freetools/floorplan-kg-backend, install engine/requirements.txt into its .venv.",
  ].join(" ");
}