class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1:
            return nums

        ptr_1 = 0
        ptr_2 = 0

        while ptr_2 < len(nums):
            if nums[ptr_2] != 0:
                nums[ptr_1], nums[ptr_2] = nums[ptr_2], nums[ptr_1]
                ptr_1 += 1
            ptr_2 += 1
