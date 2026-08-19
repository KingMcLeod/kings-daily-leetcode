class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        star_set = set()

        for val_one, val_two in edges:
            
            if val_one in star_set:
                return val_one
            elif val_two in star_set:
                return val_two
            else:
                star_set.add(val_one)
                star_set.add(val_two)