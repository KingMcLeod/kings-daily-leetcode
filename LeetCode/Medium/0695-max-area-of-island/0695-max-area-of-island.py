class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        max_area = 0
        curr_area = 0
        rows = len(grid)
        cols = len(grid[0])
        visited = [[False for col in row] for row in grid]

        def island_finder(row, col):
            nonlocal curr_area

            if (
                row < 0
                or row >= rows
                or col < 0
                or col >= cols
            ):
                return

            if grid[row][col] == 0 or visited[row][col]:
                return
            
            visited[row][col] = True
            curr_area += 1

            island_finder(row + 1, col)
            island_finder(row - 1, col)
            island_finder(row, col + 1)
            island_finder(row, col - 1)

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1 and not visited[row][col]:
                    curr_area = 0
                    island_finder(row, col)

                    if curr_area > max_area:
                        max_area = curr_area

        return max_area