class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left_ptr, right_ptr = 0, len(nums) - 1

        for i in range(len(nums)):
            mid_ptr = math.floor((left_ptr + right_ptr) / 2)
            
            if nums[mid_ptr] == target:
                return mid_ptr
            elif nums[mid_ptr] < target:
                left_ptr = mid_ptr + 1
            else:
                right_ptr = mid_ptr - 1

        return -1