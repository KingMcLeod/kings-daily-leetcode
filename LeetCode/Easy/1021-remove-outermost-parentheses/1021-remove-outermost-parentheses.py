class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result_str = ""
        open_paren = "("
        close_paren = ")"
        paren_cntr = 0
        start, end = 0, 0

        for idx in range(len(s)):
            paren = s[idx] # store curr parenthesis in variable

            if paren == open_paren:
                if paren_cntr == 0:
                    start = idx
                paren_cntr += 1
            elif paren_cntr > 0 and paren == open_paren:
                paren_cntr += 1

            if paren == close_paren:
                paren_cntr -= 1
                if paren_cntr == 0:
                    end = idx
                    result_str += s[start + 1:end]

        return result_str