class Solution {
    islandsAndTreasure(grid) {

        let n = grid.length
        let m = grid[0].length

        let queue = []

        // add all gates to queue
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c])
                }
            }
        }

        let dirs = [[1,0],[-1,0],[0,1],[0,-1]]

        while (queue.length) {

            let [r, c] = queue.shift()

            for (let [dr, dc] of dirs) {

                let nr = r + dr
                let nc = c + dc

                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < m &&
                    grid[nr][nc] > grid[r][c] + 1
                ) {
                    grid[nr][nc] = grid[r][c] + 1
                    queue.push([nr, nc])
                }
            }
        }

        return grid
    }
}