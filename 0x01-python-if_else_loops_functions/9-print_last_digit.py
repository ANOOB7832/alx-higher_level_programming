#!/usr/bin/python3
def print_last_digit(number):
    if number < 0:
        last_digit = -number % 10
        print("{:d}".format(last_digit))
    else:
        last_digit = number % 10
    print("{:d}".format(last_digit))
