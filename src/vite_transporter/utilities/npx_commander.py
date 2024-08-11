import shlex
import subprocess
import typing as t
from pathlib import Path


class NPXCommander:
    def __init__(self, workdir: Path, npx_binary: str = "npx") -> None:
        self.npx_binary = npx_binary
        self.workdir = workdir

    def __enter__(self) -> "NPXCommander":
        return self

    def __exit__(self, exc_type: t.Any, exc_val: t.Any, exc_tb: t.Any) -> None:
        return None

    def run(self, command: str) -> None:
        subprocess.run([self.npx_binary, *shlex.split(command)], cwd=self.workdir)
