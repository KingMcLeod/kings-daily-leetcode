class Solution:
    def calculate(self, s: str) -> int:
        math_ops = "*/+-"
        num_stack = []      # stores nums to be summed together at the end (+ and - are stored here)
        last_op = "+"       # the operator that comes before curr_num
        curr_num = 0

        for idx, char in enumerate(s):
            if char not in math_ops:
                if char.isdigit(): # accumulate multi-digit numbers: e.g. "2" then "3" -> 23
                    curr_num = curr_num * 10 + int(char)
            
            # activate processing when we hit an operator, or the last char:
            if char in math_ops or idx == len(s) - 1:
                if last_op == "+":
                    num_stack.append(curr_num)
                elif last_op == "-":
                    num_stack.append(-curr_num)

                # */ have higher importance, so resolve immediately against the last pushed num
                elif last_op == "*":
                    num_stack.append(num_stack.pop() * curr_num)
                elif last_op == "/":
                    num_stack.append(int(num_stack.pop() / curr_num)) # int() used to account for decimals

                last_op = char      # remembers this operator for next num
                curr_num = 0        # reset to build next num

        return sum(num_stack)   # all +/- operations already stored, so summing give up final result
