#!/busr/bin/python3


def square_matrx_map(matrix=[]):
    return list(map((lambda row: list(map((lambda x: x * x), row))), matrix))
