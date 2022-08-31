#!/usr/bin/python3


def uniq_add(my_list=[]):
    uniq_num = list(filter(lambda x: x.unique(), my_list))
    return uniq_num.count()
