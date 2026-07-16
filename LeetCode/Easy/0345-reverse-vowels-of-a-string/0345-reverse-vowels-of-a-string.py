class Solution:
    def reverseVowels(self, s: str) -> str:
        s_list = list(s)
        vowels = "aeiouAEIOU"
        ptr_1 = 0
        ptr_2 = len(s_list) - 1

        while ptr_1 < ptr_2:
            if s_list[ptr_1] in vowels and s_list[ptr_2] in vowels:
                temp = s_list[ptr_1]
                s_list[ptr_1] = s_list[ptr_2]
                s_list[ptr_2] = temp
                ptr_1 += 1
                ptr_2 -= 1
            elif s_list[ptr_1] not in vowels:
                ptr_1 += 1
            else:
                ptr_2 -= 1

        return "".join(s_list)