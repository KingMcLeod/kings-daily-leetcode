/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsSeen = {};

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const compliment = target - currNum;

        if (Object.hasOwn(numsSeen, compliment)) {
            return [i, numsSeen[compliment]]
        } else {
            numsSeen[currNum] = i
        }
    }
};