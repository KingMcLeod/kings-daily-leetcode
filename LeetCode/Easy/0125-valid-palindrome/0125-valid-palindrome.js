/*
P:
    input: string (s)
    output: boolean (true/false)
    task: based on the input string, return true if the string is read the same way in reverse (palindrome), and alse if not

E:
    - will the input every be empty?: no, guaranteed at least one character within it

D:
    strings, booleans, integers

A:
    algorithm 1:
        1. store an empty string within a variable
        2. iterate through the input string
            2a. store current element within a variable
            2b. check to see if it that element is alphanumeric:
                - if it is, add it to the string (making sure it's converted to lowercase)
                - else, skip
        3. create a clone of the string and reverse it
        4. check to see if they're the same (true/false)

    algorithm 2: 
        1. create two pointers (l (left) & r (right))
        2. store an empty string within a variable
        3. iterate through the input string
            3a. store only alphanumeric characters within the string
        4. initiate another loop to use pointers
            4a. check if both pointers match each other:
             - if they don't, return false immediately
             - if they do, continue
        5. return true as base case
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // algorithm 1 O(n^2) ?
    let alphaStr = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i].toLowerCase();
        if (alphabet.includes(currentChar) || nums.includes(currentChar)) {
            alphaStr += currentChar;
        };
    };
    const reversedStr = alphaStr.split("").reverse().join("");
    return alphaStr === reversedStr;

    // algorithm 2
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // const nums = "0123456789";
    // const lowercaseStr = s.toLowerCase();
    // let l = 0, r = lowercaseStr.length - 1;
    // console.log("string lowercased: ", lowercaseStr)
    
    // while (l <= r) {

        
    //     console.log("current l char: ", lowercaseStr[l])
    //     console.log("current r char: ", lowercaseStr[r])
    //     if (!alphabet.includes(lowercaseStr[l]) || !nums.includes(lowercaseStr[l])) {
    //         l++;
    //     } else if (!alphabet.includes(lowercaseStr[r]) || !nums.includes(lowercaseStr[r])) {
    //         r--;
    //     } else if (lowercaseStr[l] !== lowercaseStr[r]) {
    //         return false;
    //     } else {
    //         l++;
    //         r--;
    //     }
    // };
    // return true;
};