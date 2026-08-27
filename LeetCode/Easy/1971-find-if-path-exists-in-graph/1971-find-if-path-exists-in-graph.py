class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        adj_list = dict()
        visited = set()

        # 1. build out adjacency list:
        for n1, n2 in edges:
            if n1 in adj_list:
                adj_list[n1].append(n2)
            else:
                adj_list[n1] = [n2]
            
            if n2 in adj_list:
                adj_list[n2].append(n1)
            else:
                adj_list[n2] = [n1]

        # 2. helper func
        def existingPath(node):
            if node == destination:
                return True

            if node in visited:
                return False

            visited.add(node)

            for nbor in adj_list[node]:
                if nbor == destination:
                    return True

                nbor_check = existingPath(nbor)

                if nbor_check == True:
                    return nbor_check

            return False
            
        return existingPath(source)