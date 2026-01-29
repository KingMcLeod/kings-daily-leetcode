/*
P:
    input: 2D array/matrix (image), integer(s) (sr, sc, color)
    output: 2D array/matrix (image)
    task: start at beginning point inside the image, and change the color of the spot along with its neighbors (vertical + horizontal)

E:
    Edge Case(s):
         - would the matrix ever be empty?: no, guaranteed at least one
         - values can range from 0 -> 2^16
         - sr is the coord for m, sc is the cord for n
         - what would we do if we come across a spot that has already been changed?: ignore/skip it

D:
    integer, arrays, helper func

A:

*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const row = sr, col = sc;
    const startPos= image[row][col];

    if (startPos === color) {
        return image;
    };

    dfsHelper(image, startPos, row, col, color);

    return image;
};

const dfsHelper = (image, startPos, row, col, color) => {
    if (row < 0 || row >= image.length || col < 0 || col >= image[row].length) {
        return;
    }

    if (image[row][col] !== startPos) {
        return;
    }

    image[row][col] = color;

    return dfsHelper(image, startPos, row + 1, col, color),
        dfsHelper(image, startPos, row - 1, col, color),
        dfsHelper(image, startPos, row, col + 1, color),
        dfsHelper(image, startPos, row, col - 1, color);
}