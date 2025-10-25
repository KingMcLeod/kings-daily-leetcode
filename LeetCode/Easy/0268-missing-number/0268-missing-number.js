/*
P:
    input: arr of integers (nums)
    output: integer (missing number in num range)
    task: based on the list of numbers given, find the missing number within the list that we get

E:
    - where do we get n from if its not an input?: n is the length of the list 
    - n will always be at least 1 (input will never be empty)
    - missing number will always be less than or equal to n
    - every number in input will be unique (no duplicates)
    - what do we do if there is no missing value?: return 0?

D:
    array, integers 

A:
    algorithm 1: 
        1: sort the input array
        2. iterate through it (have it start at the second element)
            2a. add 1 to the previous value
            2b. check to see if the estimate and current are the same
                - if they are, continue
                = if not, return the estimate as the missing number
        3. return 0 as base case

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsSorted = nums.sort((a, b) => a - b);
    console.log("input sorted: ", numsSorted);

    if (nums[0] !== 0) return 0;

    for (let i = 1; i <= nums.length; i++) {
        const prevNum = nums[i - 1];
        const currentNum = nums[i];

        if (currentNum !== prevNum + 1) return prevNum + 1;
    }
};