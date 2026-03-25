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
        num_of_rows = len(matrix)
        num_of_cols = len(matrix[0])

        start, end = 0, num_of_rows * num_of_cols - 1

        while start <= end:
            mid = math.floor((start + end) / 2)

            row = math.floor(mid / num_of_cols)
            col = mid % num_of_cols
        
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] > target:
                end = mid - 1
            elif matrix[row][col] < target:
                start = mid + 1

        return False