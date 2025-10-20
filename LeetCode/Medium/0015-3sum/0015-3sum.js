/*
P: 
    input: array of integers (nums)
    output: array/2-D array (matrix)
    task: based on the input array, find all sub arrays of triplets that can add up to zero and are unique nums
E:
    - will the input array ever be empty?: no, always guaranteed a minimum of 3 integers
D:
    arrays, integers
A:
    1. create an empty set to keep track of numbers we've visited (new Set())
    2. initiate 2 pointers (l (left) & r (right))
    3. iterate through array of integers using for loop
        3a. calculate the sum of both pointers added (nums[l] + nums[r])
        3b. subtract sum from target (0) to get the compliment we're looking for
        3c. check to see if that compliment exists within the array (.includes())
            3ca. if it does, get index of that number, push all 3 into an array, add indidces to set, and continue to find if there is more 
            3cb. else, continue
    4. return final output
C:
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const outputArr = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let l = i + 1, r = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (l < r) {
            const threeSum = nums[i] + nums[l] + nums[r];

            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                outputArr.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                };
            }
        }
    }
    return outputArr;
};