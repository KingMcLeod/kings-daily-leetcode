/*
P:
    input: strings (ransomNote, magazine)
    output: boolean (true/false)
    task: return true if ransomNote can be made out of magazine, and false otherwise

E:
    - both input strings will only consist of lowercase English letters
    - inputs will never be empty, guaranteed at least 1 char
    - order doesn't matter, as long as magazine has the letters

D:
    strings, booleans, map

A:
    1. creating 2 maps to keep track of letters in magazine and ransomNote
    2. compare both maps against one another:
        2a. check to see if magazine map has enough of a particular letter:
            - if it doesn't, return false
            - else continue
    3. return true as base case 
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const noteMap = mapBuilder(ransomNote);
    const magMap = mapBuilder(magazine);

    // console.log("note map: ", noteMap);
    // console.log("magazine map: ", magMap);

    for (const char in noteMap) {
        if (!magMap.hasOwnProperty(char)) {
            return false;
        };

        if (noteMap[char] > magMap[char]) {
            return false;
        };
    };

    return true;
};

const mapBuilder = (str) => {
    const strMap = {};

    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];

        if (!strMap[currLetter]) {
            strMap[currLetter] = 1;
        } else {
            strMap[currLetter]++;
        }
    }
    return strMap;
}