import random

class RandomizedSet:

    def __init__(self):
        self.arr = []
        self.hash_map = {}
        
    def insert(self, val: int) -> bool:
        if val in self.hash_map:
            return False
        else:
            self.arr.append(val)
            self.hash_map[val] = len(self.arr) - 1
            return True


    def remove(self, val: int) -> bool:
        if val not in self.hash_map:
            return False
        else:
            recent_val = self.arr[-1]
            val_index = self.hash_map[val]

            # index swap in array
            self.arr[val_index] = recent_val
            self.hash_map[recent_val] = val_index

            # removal of value (O(1) time complexity)
            self.arr.pop()
            del self.hash_map[val]
            return True
        
    def getRandom(self) -> int:
        return random.choice(self.arr)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()