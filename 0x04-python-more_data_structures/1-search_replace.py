#!/usr/bin/python3


def search_replace(my_list, search, replace):
    def num_s_r(num):
        if num != search:
            return num
        else:
            return replace
    return list(map(num_s_r, my_list))
