#!/usr/bin/python3


def common_elements(set_1, set_2):
    for num1, num2 in set_1, set_2:
        return list(filter(lambda x, y: x == y, num1, num2))
