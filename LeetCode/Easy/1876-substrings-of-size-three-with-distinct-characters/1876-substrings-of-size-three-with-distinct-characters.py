class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        substr_cnt = 0

        for start in range(len(s) - 2):
            distinct = set()
            for char in range(start, start + 3):
                distinct.add(s[char])
                
            if len(distinct) == 3:
                substr_cnt += 1
            
        return substr_cnt
