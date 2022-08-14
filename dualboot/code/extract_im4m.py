#!/usr/bin/env python3

from pathlib import Path

import plistlib
import sys


def main():
    print('IM4M Extractor')

    if len(sys.argv) < 3:
        sys.exit("Usage: {} <Input SHSH Blob> <Output IM4M>".format(sys.argv[0]))

    shsh = Path(sys.argv[1])
    im4m = Path(sys.argv[2])

    try:
        shsh = plistlib.loads(shsh.read_bytes())
    except:
        sys.exit("Error: Invalid SHSH Blob file")

    if "ApImg4Ticket" not in shsh.keys():
        sys.exit("Error: IM4M not found in SHSH Blob")

    im4m.write_bytes(shsh["ApImg4Ticket"])

    print(f"IM4M has been extracted to: {im4m}.")


if __name__ == "__main__":
    main()
