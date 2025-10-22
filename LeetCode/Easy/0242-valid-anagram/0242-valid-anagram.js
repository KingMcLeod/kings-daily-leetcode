/*
P: 
    input: strings (s, t)
    output: boolean (true/false)
    task: check the two strings given to see if they are anagrams of one another (same characters, different order)

E:
    - will the characters ever be uppercase?: no, guaranteed to be lowercase
    - will the inputs ever be empty?: no, guaranteed to have at least 1 character minimum

D:
    strings, booleans

A:
    algorithm 1:
        1. if both strings aren't the same length, return false
        2. split, sort, and join both strings (ordering them alphabetically)
        3. compare them to see if they're the same:
            - if they are, return true
            - else, returm false
    algorithm 2:
        1. if both strings aren't the same length, return false
        2. create two hash tables (one for each string)
        3. use for loop to iterate through one string
            3a. store current element in a variable
            3b. check to see if the element is in the hash table (both strings)
                - if it is, add 1 to that characters value
                - else, initialize it in there and assign 1 to its value
        4. iterate through one hash table
            4a. compare if both hash tables have the same value for each character
                - if it does, continue
                - if it doesn't, return false automatically
        5. return true as the final output (meaning they're anagrams)
        

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // algorithm 1: O(n) + O(n log n) + O(n) = O(n) Time Complexity
    // const sSorted = s.split("").sort().join("");
    // const tSorted = t.split("").sort().join("");

    // return sSorted === tSorted;
    if (s.length !== t.length) return false;

    const sHash = {};
    const tHash = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (!sHash[sChar]) {
            sHash[sChar] = 1
        } else {
            sHash[sChar] += 1;
        };

        if (!tHash[tChar]) {
            tHash[tChar] = 1
        } else {
            tHash[tChar] += 1;
        };
    }
    
    for (const char in sHash) {
        if (sHash[char] !== tHash[char]) return false;
    };

    return true;
};