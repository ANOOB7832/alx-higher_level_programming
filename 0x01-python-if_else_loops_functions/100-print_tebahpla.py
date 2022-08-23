#!/usr/bin/python3
for char in range(ord('z'), ord('a') - 1, -1):
    print("{:c}".format((char - (ord('a') - ord('A')))
                        if char % 2 else char), end='')
