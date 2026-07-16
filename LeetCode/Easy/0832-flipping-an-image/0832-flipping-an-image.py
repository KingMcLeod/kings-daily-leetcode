class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for row in range(len(image)):
            self.reverse(image[row])
            self.invert(image[row])

        return image

    def reverse(self, row: List[int]):
        left = 0
        right = len(row) - 1

        while left < right:
            row[left], row[right] = row[right], row[left]
            left += 1
            right -= 1

    def invert(self, row: List[int]):
        for num in range(len(row)):
            if row[num] == 1:
                row[num] = 0
                continue
            
            if row[num] == 0:
                row[num] = 1
                continue