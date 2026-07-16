class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        t_ptr = 0

        for s_ptr in range(len(s)):
            while t_ptr < len(t) and s[s_ptr] != t[t_ptr]:
                t_ptr += 1

            if t_ptr >= len(t):
                return False

            t_ptr += 1

        return True
