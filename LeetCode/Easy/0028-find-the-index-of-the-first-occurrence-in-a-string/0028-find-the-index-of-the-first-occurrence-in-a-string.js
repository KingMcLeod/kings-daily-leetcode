/*
P: 
    input: strings (haystack & needle)
    output: integer (index or -1)
    task: based on the haystack string, find where the needle occurs first in the string, and return the index of where it starts, else return -1 if it wasn't found

E:
   - will the haystack or needle string ever be empty?: no, guaranteed to have at least one character in them
   - will there ever be integers?: no, only has lowercase english letters
   - what is the worst timie complexity we can get to?: O(n^2)

D:
    strings, integers, arrays (?)

A:
    1. initiate a loop to go through string
        1a. create a second pointer (i + needle.length -1)
        1b. check to see if the current substring is the needle
            1ba. if it is, return i
            1bb. else, continue
    2. return -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        const currSubStr = haystack.substring(i, i + needle.length);
        console.log("current substring we have: ", currSubStr);
        if (needle === currSubStr) return i;
    }
    return -1;
};