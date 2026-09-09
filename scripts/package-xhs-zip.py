#!/usr/bin/env python3
"""
小红书小工具 zip 打包：用正斜杠 '/' 作为包内路径分隔符（平台安全检查拒绝反斜杠）。
只写「相对路径」（无前导 /、无 ..），并要求 index.html 位于 zip 根。

用法:
  python scripts/package-xhs-zip.py [src=dist-xhs-pkg] [out=ancient-mirrors-museum-xhs.zip]
"""
import os
import sys
import zipfile

src = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "dist-xhs-pkg")
out = sys.argv[2] if len(sys.argv) > 2 else "ancient-mirrors-museum-xhs.zip"

if not os.path.isdir(src):
    sys.exit(f"source dir not found: {src}")

with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for root, dirs, files in os.walk(src):
        for f in files:
            full = os.path.join(root, f)
            rel = os.path.relpath(full, src).replace(os.sep, "/")  # 正斜杠
            z.write(full, rel)

print("zip ->", out)
with zipfile.ZipFile(out) as z:
    names = z.namelist()
    backslash = [n for n in names if "\\" in n]
    print("entries:", len(names))
    print("backslash entries:", len(backslash))
    print("root has index.html:", "index.html" in names)
    print("leading '/' or '..' entries:", [n for n in names if n.startswith("/") or ".." in n])
