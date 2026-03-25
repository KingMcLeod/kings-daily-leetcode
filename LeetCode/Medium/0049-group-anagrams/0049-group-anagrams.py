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
        if len(strs) == 1:
            return [strs]

        # variables 
        output = []
        sorted_dict = {}
        
        for str in strs: 
            sorted_str = "".join(sorted(str))
            if sorted_str not in sorted_dict:
                sorted_dict[sorted_str] = [str]
            else:
                sorted_dict[sorted_str].append(str)        
        
        return list(sorted_dict.values())