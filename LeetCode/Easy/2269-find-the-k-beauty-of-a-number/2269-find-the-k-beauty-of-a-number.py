class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        num_str = str(num)
        num_cnt = 0

        for start in range(len(num_str) - k + 1):
            substr = ""
            for sub in range(start, start + k):
                substr += num_str[sub]

            substr_num = int(substr)

            if substr_num != 0 and num % substr_num == 0:
                num_cnt += 1

        return num_cnt

