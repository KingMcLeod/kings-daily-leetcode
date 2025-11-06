/*
P:
    input: arr of integers (nums), integer (target)
    output: integer (index position or -1)
    task: given the array of integers, find the index position of the target we're looking for and return it, else return -1 if it can't be found

E:
    - what is the time complexity we're aiming for?: O(log n)
    - will the input array ever be empty?: no, guaranteed at least one value
    - will there ever be duplicates inside of the array?: no, guaranteed all integers will be unique
    - will the input array's order ever change?: no, always sorted in ascending order

D:
    arrays, integers

A:
    1. create two variables: l (left) and r (right): l = 0, r = nums.length - 1
    2. loop through input array (nums)
        2a. create mid pointer (Math.floor(l + r) / 2) [finds middle number in the array]
        2b. check to see if we have found our target:
            2ba. if the mid pointer is the target, return the index position
            2bb. else, if the left pointer's element is less than the target, increment it by one (shifting it closer to the center)
            2bc. else, if the right pointer is larger than the target, decrease it by one (shifting it closer to the center)
    3. return -1 as our base case (final output if we haven't found our target) 

    Notes: Binary Search algorithm has a time complexity of O(log n), also using the fact that it's sorted in ascending order to our advantage helps us as well
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        const mid = Math.floor((l + r) / 2); // using Math.floor to round the number to the nearest whole, no floats :)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) { // you could also do just an else
            r = mid - 1;
        }
    }
    return -1;
};