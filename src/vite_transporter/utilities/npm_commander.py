import shlex
import subprocess
import typing as t
from pathlib import Path


class NPMCommander:
    def __init__(self, workdir: Path, npm_binary: str = "npm") -> None:
        self.npm_binary = npm_binary
        self.workdir = workdir

    def __enter__(self) -> "NPMCommander":
        return self

    def __exit__(self, exc_type: t.Any, exc_val: t.Any, exc_tb: t.Any) -> None:
        return None

    def run(self, command: str) -> None:
        subprocess.run([self.npm_binary, *shlex.split(command)], cwd=self.workdir)
