/*
P:
        input: arr of ints (nums), integer (target)
        output: arr of ints (index positions)
E:
    - does the order of the index positions matter?: no, it doesn't. we can return in any order
    - will the input ever be empty?: no, always guaranteed a minimum of 2 elements in the input
    - will the numbers in the input ever be negative?: yes, from -10^9 and up
D:
    arrays, integers
A:
    1. create an empty hash table
    2. iterate through the input array with for loop O(n)
        2a. calculate the compliment we're looking for (based on the number we're on)
        2b. check the hash table to see if we've seen this number
            - if we have, return the index of both: current number & hash table number
            - else, add the current number to the hash table (num: index) and continue
    3. return empty array if nothing was found (extra precaution)
C:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const compliment = target - currentNum;


        if (hashTable.hasOwnProperty(compliment)) {
            return [i, hashTable[compliment]];
        } else {
            hashTable[currentNum] = i;
        };
    };
};