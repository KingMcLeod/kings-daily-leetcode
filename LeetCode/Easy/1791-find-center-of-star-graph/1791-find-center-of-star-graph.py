class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        star_checker = set()

        for [n1, n2] in edges: # destructured subset in for loop

            if n1 in star_checker:
                return n1
            elif n2 in star_checker:
                return n2
            else:
                star_checker.add(n1)
                star_checker.add(n2)