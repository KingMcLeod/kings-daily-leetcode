from collections import defaultdict

class Solution:
    def shortestSubstrings(self, arr: List[str]) -> List[str]:
        substr_map = defaultdict(set)
        substr_arr = [] # output list being returned

        for i, word in enumerate(arr):
            for j in range(len(word)):
                for k in range(j + 1, len(word) + 1):
                    substr = word[j:k]

                    substr_map[substr].add(i)

        for i, word in enumerate(arr):
            shortest_str = None

            for j in range(len(word)):
                for k in range(j + 1, len(word) + 1):
                    substr = word[j:k]
                    if len(substr_map[substr]) == 1:
                        if shortest_str is None:
                            shortest_str = substr
                        elif len(substr) < len(shortest_str):
                            shortest_str = substr
                        elif len(substr) == len(shortest_str) and substr < shortest_str:
                            shortest_str = substr

            substr_arr.append("" if shortest_str is None else shortest_str)

        return substr_arr