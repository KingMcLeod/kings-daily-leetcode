class Solution:
    def firstUniqChar(self, s: str) -> int:
        freq_dict = dict()

        # first pass
        for letter in s:
            if letter in freq_dict:
                freq_dict[letter] += 1
            else:
                freq_dict[letter] = 1

        # second pass
        for idx in range(len(s)):
            letter = s[idx]

            if freq_dict[letter] == 1:
                return idx

        # default case
        return -1