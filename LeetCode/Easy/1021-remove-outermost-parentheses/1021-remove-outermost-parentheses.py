class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result_str = ""
        open_paren = "("
        close_paren = ")"
        paren_cntr = 0
        # start, end = 0, 0
        substr_list = []

        for idx in range(len(s)):
            paren = s[idx] # store curr parenthesis in variable
                
            if paren == open_paren:
                paren_cntr += 1

                if paren_cntr > 1:
                    substr_list.append(paren)

            if paren == close_paren:
                paren_cntr -= 1

                if paren_cntr > 0:
                    substr_list.append(paren)
            


        return "".join(substr_list)