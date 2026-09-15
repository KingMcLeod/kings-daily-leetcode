/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numObj = {}

    for(let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const compliment = target - currNum

        if (Object.hasOwn(numObj, compliment)) {
            return [i, numObj[compliment]]
        } else {
            numObj[currNum] = i
        }
    }
};