"""
P:
    input: 2-D array (matrix), int (target)
    output: boolean (True/False)
    output: given a 2D-array, scan it and return whether or not it was seen inside of it (True/False)
    with a time complexity of O(log(m * n))

E:
    - integers within matrix are in non-decreasing order (sorted)
    - input will never be empty, guaranteed at least 1x1 matrix 

D:
    int, arrays, pointers

A:
    1. create two pointers (start, end)
    2. iterate through the matrix (rows + cols (cells))
        2a. check if start + end pointer elements fall within target range (l <= target <= r)
            - if it doesn't, return false immediately
            - if it does, continue
        2b. check to see if current value is target
            - if it isn't, continue
            - if it is, return true immediately (target found)
    3. return false as base case (if iterated through entire matrix and target found)
"""

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # for loop to access matrix
        for row in matrix:
            for col in range(len(row)):
                # variables created
                start, end = row[0], row[-1]
                if start <= target and target <= end:
                    if row[col] == target:
                        return True
        return False

        