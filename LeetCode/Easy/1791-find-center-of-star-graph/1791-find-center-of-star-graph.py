class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        star_set = set()

        for arr in edges:
            val_one = arr[0]
            val_two = arr[1]

            if val_one in star_set:
                return val_one
            elif val_two in star_set:
                return val_two
            else:
                star_set.add(val_one)
                star_set.add(val_two)