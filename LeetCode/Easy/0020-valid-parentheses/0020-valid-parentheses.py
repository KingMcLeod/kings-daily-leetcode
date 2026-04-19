'''
P:
    input: str of chars (s)
    output: boolean (True/False)
    task: return true or false if the order of parentheses are closed correctly (opening -> closing)

E>
    - input will never be empty (guaranteed at least 1 char)
    - input will only consist of parentheses ( ()[]{} )
D:
    - dict (opening / closing relationships), stack, strs

A:
    1. initialize dict (with parentheses relationsships) + empty stack
    2. iterate through the input
        2a. check to see if the curr char is an opening (key)
            - if it is, push (append) it onto the stack
            - if it isn't:
                - check the most recent item to see if its a match
                    - if it is, then pop the match off the stack
                    - if it isn't, then we will return false (invalid)
    3. return if the stack is empty (meaning the input is valid)
'''

class Solution:
    def isValid(self, s: str) -> bool:
        paren_stack = []
        paren_dict = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        for char in s:
            if char in paren_dict:
                paren_stack.append(char)
            else:
                if len(paren_stack) <= 0:
                    return False

                recent_item = paren_stack[-1]

                if char == paren_dict[recent_item]:
                    paren_stack.pop(-1)
                else:
                    return False
                    
        return len(paren_stack) == 0