#!/usr/bin/python3

if __name__ == "__main__":
    import sys

if len(sys.argv[1:]) == 0:
    print('0 arguments.')

i = 0

for idx, arg in enumerate(sys.argv[1:]):

    while i == 0:

        if len(sys.argv[1:]) > 1:
            print(('{} arguments:').format(len(sys.argv[1:])))
            i = i + 1

        elif len(sys.argv[1:]) == 1:
            print(('{} argument:').format(len(sys.argv[1:])))
            i = i + 1

    if len(sys.argv[1:]) > 1:
        print(('{}: {}').format(idx, arg))

    elif len(sys.argv[1:]) == 1:
        print(('{}: {}').format(idx, arg))
