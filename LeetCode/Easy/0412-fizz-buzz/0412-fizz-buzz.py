class Solution(object):
    def fizzBuzz(self, n):
        output_list = []

        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:  # Fixed: == 0
                output_list.append("FizzBuzz")
            elif i % 3 == 0:  # Fixed: == 0
                output_list.append("Fizz")
            elif i % 5 == 0:  # Fixed: == 0
                output_list.append("Buzz")
            else:
                output_list.append(str(i))  # Fixed: ) and str()

        return output_list