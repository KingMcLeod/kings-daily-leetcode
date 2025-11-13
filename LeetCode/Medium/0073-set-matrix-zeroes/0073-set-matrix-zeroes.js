/*
P:
    input: 2-D array (matrix)
    output: 2-D array (matrix transformed)
    task: based on the matrix, whenever we spot a zero, make its entire column
E:
    - everything done in place, don't need to return matrix
D:
    arrays, integers, hash table
A:
    1. create an empty array to store the coordinates we've found in the matrix
    2. initiate 2 for loops to iterate through matrix (to access the rows and columns)
        2a. check the current cell to see if it's a zero:
            - if it is, then store it in the array (zeroCoords)

    3. create helper function to transform rows + cols into zeroes (takes in the matrix, row, and col)
        3a. iterate through the entire column and turn cells into zeroes
        3b. iterate through the entire row and turn cells into zeroes

    4. iterate through coords array
        4a. call helper function on every pair of coords until everything is transformed
C:
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const zeroCoords = []; // empty array to store coords of 0's in the matrix

    for (let r = 0; r < matrix.length; r++) { // for loop to access each row
        const currentRow = matrix[r]; 
        for (let c = 0; c < currentRow.length; c++) { // for loop to access each cell (cols)
            const currentCell = matrix[r][c];

            if (currentCell === 0) { // if the cell we're looking at is a 0, store it in array
                zeroCoords.push([r, c]);
            }
        }
    }

    const helper = (matrix, row, col) => { // takes in the matrix and stored coords
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0; // changes every cell in the column into a zero
        }
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0; // changes every cell in the row into a zero
        }
    }

    for (const coord of zeroCoords) {
        helper(matrix, coord[0], coord[1]); // calls the helper function on every coordinate pair and does the transformation
    }
};
