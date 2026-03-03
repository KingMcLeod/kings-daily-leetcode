/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const starChecker = new Set(); // to check if a number has been seen more than once

    for (let i = 0; i < edges.length; i++) { // double for loop since its a 2D-array (matrix)
        const currentSubset = edges[i];
        for (let j = 0; j < currentSubset.length; j++) {
            const currentNum = currentSubset[j];
        
            if (starChecker.has(currentNum)) { // if it's in the Set, return it (found the center/star)
                return currentNum;
            } else {
                starChecker.add(currentNum); // else, add it to the Set
            };
        };
    };
};