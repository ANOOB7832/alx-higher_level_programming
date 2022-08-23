#!/usr/bin/python3
for num in range(1, 100):
    if num % 3 == 0:
        print("Fizz", end='')
    if num % 5 == 0:
        print("Buzz", end='')
    if num % 3 and num % 5:
        print("FizzBuzz", end='')
    print(end=' ')
