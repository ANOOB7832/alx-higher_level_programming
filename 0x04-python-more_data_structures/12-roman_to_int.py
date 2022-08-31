#!/usr/bin/python3
def roman_to_int(roman_string):
    """Returns an integer for Roman numerals

    Parameters:
        roman_string: a Roman numeral string

    Return:
        num: an integer converted from roman numeral
    """

    roman = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100,
             "D": 500, "M": 1000}
    i = 0
    num = 0
    while i < len(roman_string):
        if i + 1 < len(roman_string):
            num += roman[roman_string[i:i+2]]
            i += 2
        else:
            return None
    return num
