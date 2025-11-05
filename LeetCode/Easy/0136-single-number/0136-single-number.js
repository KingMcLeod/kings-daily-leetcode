/*
P:
    input: arr of integers (nums)
    output: integer
    task: return the integer that appears once within the input array

E:
    - input array will never be empty: guaranteed at least 1 element within it
    - elements within the input array can be negative

D:
    array, integers

A:
    1. initialize an empty set 
    2. initialize loop to iterate through input array
        2a. store current integer in variable
        2b. check to see if the current number is already in the set
            2ba. if it is, clear the set and continue
            2bb. continue
    3. return num inside of the set (unique)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // alogirthm 1: set
    // const seen = new Set();

    // for (let num of nums) {
    //     if (seen.has(num)) {
    //         seen.delete(num);
    //     } else {
    //         seen.add(num);
    //     }
    // }

    // return Array.from(seen)[0];

    // algorithm 2: bit manipulation
    let output = 0;

    for (let num of nums) {
        output ^= num;
    }

    return output;
};