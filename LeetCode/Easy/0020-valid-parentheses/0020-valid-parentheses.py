'''
P;
    input: string (diff parentheses)
    output: boolean
    task: determine if the string input is valid:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    - Every close bracket has a corresponding open bracket of the same type.

E:
    - input string will never be empty (at least 1 char)
    - input string will only contain parentheses '()[]{}

D:
    strings, stack, booleans

A:
    1. initialize an empty stack
    2. init a dict with key-value pairs of the parentheses
    3. iterate through string:
        - if it's an opening, push onto stack
        - if it's a closing, check recent thing added to stack
            - if it matches, pop off stack
            - if it doesn't, return false (1st false case)
    4. return if the stack is empty (2nd false case -> else true)
'''

class Solution:
    def isValid(self, s: str) -> bool:
        paren_stack = []
        paren_dict = {
            ')': '(',
            '}': '{',
            ']':'['
        }

        for curr_paren in s:

            if curr_paren not in paren_dict:
                paren_stack.append(curr_paren)
                continue
            
            if len(paren_stack) == 0 or paren_dict[curr_paren] != paren_stack[-1]:
                return False

            paren_stack.pop()

        return len(paren_stack) == 0