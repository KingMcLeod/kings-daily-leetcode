/*
P:
    input: strings (ransomNote, magazine)
    output: boolean (true/false)
    task: based on the magazine and ransomNote given, return true if the ransomNote can be created using letters from the magazine, or false otherwise

E:
    - strings will only contain lowercase english letters
    - inputs will never be empty, guaranteed at least 1 character
    - inputs can be different lengths

D:
    strings, booleans, hash tables

A:
    1. create two empty hash tables for both inputs
    2. iterate through each input and build out the hash table for them
    3. use for in loop to iterate through the ransom note hash
        3a. compare each key-value pair against the magazine hash
            - if the value for that character is the same, continue
            - if they aren't the same, return false immediately (can't be built out)
    4. return true as base case (meaning we have gone through everything without any issues, can be built out)
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const noteHash = {};
    const magHash = {};

    for (let i = 0; i < ransomNote.length; i++) {
        const currentChar = ransomNote[i];
        if (noteHash.hasOwnProperty(currentChar)) {
            noteHash[currentChar]++;
        } else {
            noteHash[currentChar] = 1;
        };
    }

    for (let i = 0; i < magazine.length; i++) {
        const currentChar = magazine[i];
        if (magHash.hasOwnProperty(currentChar)) {
            magHash[currentChar]++;
        } else {
            magHash[currentChar] = 1;
        };
    };

    console.log(noteHash)
    console.log(magHash)

    for (const char in noteHash) {
        if (noteHash[char] <= magHash[char] ) {
            continue;
        } else {
            return false;
        }
    };
    return true
};