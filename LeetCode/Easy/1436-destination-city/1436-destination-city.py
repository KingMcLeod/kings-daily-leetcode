class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        startSet = set()
        for start, end in paths:
            startSet.add(start)

        for start, end in paths:
            if end not in startSet:
                return end