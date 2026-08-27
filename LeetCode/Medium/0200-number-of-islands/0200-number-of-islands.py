class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        rows = len(grid)
        cols = len(grid[0])
        visited = [[False for col in row] for row in grid]

        def island_finder(row, col):
            if (
                row < 0
                or row >= rows
                or col < 0
                or col >= cols
            ):
                return

            if grid[row][col] == "0" or visited[row][col]:
                return
            
            visited[row][col] = True

            island_finder(row + 1, col)
            island_finder(row - 1, col)
            island_finder(row, col + 1)
            island_finder(row, col - 1)

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == "1" and not visited[row][col]:
                    islands += 1
                    island_finder(row, col)

        return islands
            