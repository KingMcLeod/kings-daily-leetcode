"""
P:
    input: list of ints (nums) int (target)
    output: tuple (indices of output nums)
    task: find and return the indices (index positions) of two numbers that up to target within the nums input list 

E: 
    - cannot use the same element twice to reach target (unique index pos)
    - return in any order
    - input list will never be empty, guaranteed at least 2 nums minimum
    - only one solution / valid answer to make target exists

D:
    ints, lists, dicts

A:
    1l. create empty dict
    2. iterate through nums list
        2a. store current num and compliment in variables
        2b. check to see if compliment is already in our dict (has been seen already)
            - if it has, return both index positions
            - if not, store current num with index position in dict
"""

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {} # empty dictionary (key: num, val: index pos)

        for i in range(len(nums)): # i to use get index pos
            num = nums[i]
            compliment_num = target - num # calculate compliment we need

            if compliment_num in num_dict: # if compliment is seen in our dict
                return [i, num_dict[compliment_num]] # return both index pos (current number + compliment = target)
            else:
                num_dict[num] = i # store it in the dict for going back to