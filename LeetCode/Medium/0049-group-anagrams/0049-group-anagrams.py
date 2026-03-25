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

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        from collections import defaultdict

        # dict where each key is a sorted string, val is a list of its anagrams
        # defaultdict(list) means any new key automatically starts as an empty list
        sorted_dict = defaultdict(list)
        
        for word in strs: 
            # sort the word alphabetically so all anagrams map to the same key
            # ex: "eat", "tea", "ate" all become "aet"
            sorted_str = "".join(sorted(word))

            # group the original word under its sorted key
            # ex: sorted_dict["aet"] = ["eat", "tea", "ate"]
            sorted_dict[sorted_str].append(word)        
        
        # return just the groups (values), not the sorted keys
        # ex: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
        return list(sorted_dict.values())