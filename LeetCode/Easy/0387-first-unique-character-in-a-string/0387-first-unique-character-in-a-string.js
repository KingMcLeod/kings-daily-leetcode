/*
P:
    input: string (s)
    output: integer (index pos or -1)
    task: find the first index pos of a letter that has only one occurence in the string, else return -1

E:
    Edge Case(s):
        - input never empty, guaranteed at least 1 letter
        - input consists of lowercase english letter

D:
    - hash map/object to store character frequencies
    - string iteration

A:
    1. Create an empty frequency map
    
    2. First pass - build frequency map:
        - iterate through each character in string
        - for each character, increment its count in the map
    
    3. Second pass - find first unique character:
        - iterate through each character in string (in order)
        - for each character, check if its count in map === 1
        - if count === 1, return current index
        - if we finish loop without finding any, return -1
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const letterMap = {};

    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i];
        if (letterMap.hasOwnProperty(currentLetter)) {
            letterMap[currentLetter].push(i)
        } else {
            letterMap[currentLetter] = [i];
        };
    };

    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i];
        if (letterMap[currentLetter].length === 1) {
            return i;
        };
    };
    return -1;
};