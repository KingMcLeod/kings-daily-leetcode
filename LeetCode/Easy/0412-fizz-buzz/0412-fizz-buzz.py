"""
P:
    input: int (n)
    output: list of strs
    task: given an integer, count up to that integer and with each number in the process, check to see if it's divisible by 3, 5, both, or none and return the correct output for that

E:
    - input will never be negative: starts from 1

D:
    integer, list, strs

A:
    1. create empty list for storing our answers (output)
    2. initialize for in loop to iterate through number (1-indexed and inclusive of last number)
        2a. check the number against the following qusetions:
            2aa. if the current number is divisble by 3 and 5: "FizzBuzz"
            2ab. if the current number is divisble by 3: "Fizz"
            2ac. if the current number is divisble by 5: "Buzz"
            2ac. else just return the number as a string

    3. return the entire list at the end

C:
"""


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        answer_output = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                answer_output.append("FizzBuzz")
            elif i % 3 == 0:
                answer_output.append("Fizz")
            elif i % 5 == 0:
                answer_output.append("Buzz")
            else:
                answer_output.append(str(i))
        return answer_output
