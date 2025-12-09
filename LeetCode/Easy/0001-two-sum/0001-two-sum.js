/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];

        if (!numsMap.hasOwnProperty(comp)) {
            numsMap[nums[i]] = i;
        } else { return [i, numsMap[comp]]}
    }
};