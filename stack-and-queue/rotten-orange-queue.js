/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];

    //push all rotten oranges to queue initially
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col, 0]);
            }
        }
    }

    //mark adjacent ele as rotten and push to queue and pop previous rotten ele from queue
    let mins = 0;
    while (queue.length > 0) {
        let [x, y, level] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        mins = Math.max(level, mins);
    }

    //traverse through grid to check if any fresh orange is available 
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }
    return mins;
};