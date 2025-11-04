/*
P:
    input: array of integers (nums)
    output: 2D-array (matrix with all possible subsets)
    task: based on the input array that we're given, return all the possible combinations of numbers (subsets) that we could possibly get

E:
    input: nums = [1,2,3]
    output: solution(nums) = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

    - every output has an empty array + each number by itself 
    - input array will never be empty: guaranteed at least one value inside of
    - integers within the input could be negative (minimum is -10)


D:
    arrays, integers, set (?)

A:
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // algorithm 1: dfs 
    // const output = [];

    // function dfs(current, index) {
    //     for (let i = index; i < nums.length; i++) {
    //         const newCurr = [...current, nums[i]];
    //         dfs(newCurr, i + 1);
    //     }
    //     output.push(current);
    // };
    
    // let current = [];
    // let index = 0;
    // dfs(current, index);

    // return output;

    // algorithm 2: nested loop
    let output = [[]];
    // [1, 2, 3]
    for (let num of nums) {
        console.log(num)
        const temp = []
        for (let arr of output) {
            console.log([...arr, num])
            temp.push([...arr, num])
        }
        output = [...output, ...temp]
    }
    console.log(output)
    return output;
};