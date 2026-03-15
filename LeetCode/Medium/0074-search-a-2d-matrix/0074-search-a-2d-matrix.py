"""
P:
    input: 2-D array (matrix), int (target)
    output: boolean (True/False)
    task: baesd on the input given, return true/false whether the target can be found in the matrix with a time complexity of O(log(m * n)) (make matrix size smaller to search)

E:
    - input will never be empty, guaranteed at least 1 m * n (1x1) 
    - each row is sorted (least to greatest)
    - first integer in each row is greater than the last

D:
    - ints, lists, matrix

A: (sliding window approach?)
    1. loop through matrix to access each row + cell
        1a. check to see if the first int in row < target
            - if it is, return False (means we've never found the target in our range)
            - if it isn't: check to see if the current int == target:
                - if it is, return True
"""

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            first_int = row[0]
            print("current row:" , row)
            print("first integer:", first_int)

            if first_int > target:
                return False
                
            for col in row:
                curr_cell = col
                print("current cell:" , curr_cell) 

                if curr_cell == target:
                    return True
        return False