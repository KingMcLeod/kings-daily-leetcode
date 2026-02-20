"""
P:
    input: string (s)
    output: boolean (true/false)
    task: based on the order of opening/closing parentheses, return true/false if the input is valid (opening must have its closing match or it will be invalid)

E:
    - what if it its empty?: won't happen, guaranteed at least 1 thing in the input string
    - what if there's other characters in the string?: won't happen, guaranteed only parentheses
    - what if the input starts with a closing: return false becuase order is invalid (doesn't have a opening to be paired with)
D:
    strings, booleans, lists, dicts
A:
    1. initializE a dict with the key-value pairs of parentheses: opening = closing vice versa
    2. initialize an empty stack (implement our queueing system)
    3. iterate through the string char by char
        3a. check if we're looking at an opening or closing
            3aa. if it's an opening, push it onto stack
            3ab. if it's a closing, then check if it its opening that we've seen
                - if it does, pop the opening off the stack
                - if it doesn't, return false immediately
    4. return whether or not the stack is empty
"""
class Solution:
    def isValid(self, s: str) -> bool:
        # variables
        stack_dict = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        string_stack = []

        for i in range(len(s)):
            char = s[i]
            # case 1: we have an opening
            if char in stack_dict:
                string_stack.append(char)
                # print('adding opening to stack:' + string_stack)
            # case 2: if we have a closing
            else:
                if len(string_stack) > 0:
                    open_paren = string_stack[-1]
                    if char == stack_dict[open_paren]:
                        string_stack.pop()
                    else:
                        return False
                else:
                    return False

        return len(string_stack) == 0
        