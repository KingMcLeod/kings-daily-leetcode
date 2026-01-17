class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        duplicate_dict = {}
        for i in range(len(nums)):
            num = nums[i]
            if num in duplicate_dict:
                return True
            else:
                duplicate_dict[num] = 1
        return False
