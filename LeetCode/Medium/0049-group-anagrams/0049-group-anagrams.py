"""
P:
    input: list of strs (strs)
    output: 2-D array (matrix)
    output: group all the anagrams together and return them (in order)
        - an anagram is a word/phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

E:
    - input will never be empty, at least have 1 str in it
    - strs can be empty or have 1 letter, in that case just return it in its own list

D:
    - strings, lists, matrixes 
"""
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sorted_dict = defaultdict(list) # auto-assigns an empty list to a new key in the dict

        for word in strs:
            sorted_str = "".join(sorted(word)) # sort each string's characters alphabetically to create a hashable key

            sorted_dict[sorted_str].append(word) # group the original string under its sorted key

        return list(sorted_dict.values()) # returns the substrings (dict values) in one list together