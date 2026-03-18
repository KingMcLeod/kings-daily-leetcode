/*
P:
    input: list of ints (nums) int (target)
    output: tuple (indices of output nums)
    task: find and return the indices (index positions) of two numbers that up to target within the nums input list 

E: 
    - cannot use the same element twice to reach target (unique index pos)
    - return in any order
    - input list will never be empty, guaranteed at least 2 nums minimum
    - only one solution / valid answer to make target exists

D:
    ints, lists, dicts

A:
    1l. create empty object (hash map/table)
    2. iterate through nums array
        2a. store current num and compliment in variables
        2b. check to see if compliment is already in our hash (has been seen already)
            - if it has, return both index positions
            - if not, store current num with index position in hash
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numHash = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const compliment = target - currentNum;

        if (numHash.hasOwnProperty(compliment)) {
            return [i, numHash[compliment]];
        } else {
            numHash[currentNum] = i;
        }
    }
};