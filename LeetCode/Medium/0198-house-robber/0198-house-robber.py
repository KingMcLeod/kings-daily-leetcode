class Solution:
    def rob(self, nums: List[int]) -> int: #find the max amount of money we can get from houses without alerting police
        if len(nums) == 1:
            return nums[0]
            
        prev_sums = [nums[0], max(nums[0], nums[1])]
        
        for i in range(2, len(nums)):
            curr_sum = nums[i]
            # if curr_sum + prev_sums[i - 2] > prev_sums[i - 1]:
            #     prev_sums.append(curr_sum + prev_sums[i - 2])
            # else:
            #     prev_sums.append(prev_sums[i - 1])
            # OR
            prev_sums.append(max(curr_sum + prev_sums[i - 2], prev_sums[i - 1]))

        return prev_sums[-1]