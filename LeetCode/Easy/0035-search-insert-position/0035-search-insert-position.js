/*
P:
    input: array of integers (nums), integer (target)
    output: integer (index num/position)
    task: look within the given array for the target. if it's found, return its index positon, else return the index positon of where it would be if it was

E:
    - would the input array every be empty?: no, always guaranteed a value inside of it at least (1 <= nums.length)
    - can an element be a negative number?: yes it can, minimun is -10^4
    - would the order of the integers ever change?: no, always in ascending order

D:
    integers, arrays

A:
    1. initialize 2 pointers (l (left) & r (right))
    2. iterate through array with for loop 
        2a. create middle pointer (binary search) -> ((l + r) / 2);
        2b. check conditions:
            2ba. if the middle element is the target, return mid
            2bb. else, check to see if mid < target:
                - if so, adjust l pointer to be looking at the right portion of the input array
            2bc. vice versa, check to see if mid > target:
                - if so, adjust r pointer to be looking at the left portion of the input array
    3. if the target wasn't found, then:
        3a. subtract 1 from the target, find the index of that number, then return that + 1 (where it would've been)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        const mid =  Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        };
    };

    nums.push(target);
    console.log(nums)
    return nums.sort((a, b) => a - b).indexOf(target);
};