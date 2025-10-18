/*
P:
    input: array of ints (nums)
    output: array of ints (output)
    task: based on the input array, find the sub array with the largest sum and retunr it
E: 

D:
    integers, array
A:
    1. create an empty array to store all possible sums
    2. create empty variable to accumulate sum
    3. initiate for loop 
        3a. for every value, add it to the sum
    4. push total sum in output array
    5. initiate another loop
        5a. for each number we're on, subtract that number from sum and push value

    6. sort output array and return the highest sum (first element)
C:
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (currentSum < 0) {
            currentSum = 0;
        };
        currentSum += currentNum;
        maxSub = Math.max(maxSub, currentSum);
    };
    return maxSub;
};