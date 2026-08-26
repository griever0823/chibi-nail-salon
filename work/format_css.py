from pathlib import Path
import sys


def pretty(css: str) -> str:
    output, token, indent, quote, parens = [], [], 0, None, 0

    def emit(value: str) -> None:
        value = " ".join(value.split())
        if value:
            output.append("  " * indent + value)

    for char in css:
        if quote:
            token.append(char)
            if char == quote:
                quote = None
            continue
        if char in "\"'":
            quote = char
            token.append(char)
        elif char == "(":
            parens += 1
            token.append(char)
        elif char == ")":
            parens -= 1
            token.append(char)
        elif char == "{" and parens == 0:
            emit("".join(token) + " {")
            token = []
            indent += 1
        elif char == ";" and parens == 0:
            emit("".join(token) + ";")
            token = []
        elif char == "}" and parens == 0:
            emit("".join(token))
            token = []
            indent = max(0, indent - 1)
            output.append("  " * indent + "}")
            output.append("")
        else:
            token.append(char)
    emit("".join(token))
    return "\n".join(output).rstrip() + "\n"


for filename in sys.argv[1:]:
    path = Path(filename)
    path.write_text(pretty(path.read_text()), encoding="utf-8")
