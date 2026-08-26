from pathlib import Path
import re
import sys

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
TOKEN = re.compile(r"<!--.*?-->|<![^>]*>|<[^>]*>|[^<]+", re.DOTALL)


def pretty(html: str) -> str:
    lines, indent = [], 0
    for token in TOKEN.findall(html):
        if token.startswith("<"):
            if token.startswith("</"):
                indent = max(0, indent - 1)
                lines.append("  " * indent + token.strip())
            else:
                lines.append("  " * indent + token.strip())
                if token.startswith("<!--") or token.startswith("<!"):
                    continue
                name = re.match(r"<\s*([\w-]+)", token)
                if name and name.group(1).lower() not in VOID and not token.rstrip().endswith("/>"):
                    indent += 1
        else:
            text = " ".join(token.split())
            if text:
                lines.append("  " * indent + text)
    return "\n".join(lines).rstrip() + "\n"


source = Path(sys.argv[1]).read_text(encoding="utf-8")
for destination in sys.argv[2:]:
    Path(destination).write_text(pretty(source), encoding="utf-8")
