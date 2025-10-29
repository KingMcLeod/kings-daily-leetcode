/*
P:
    input: array of strings (strs)
    output 2D matrix of strings (grouped anagrams)]
    task: return the grouped anagrams together in arrays within the array
 
E:
    - the order of the grouped anagrams can be returned in any order
    - the input can have an empty string: return empty array if so
    - the input won't be empty: guranteed at least one string (even if empty)

D:
    strings, arrays, hash tables

A:
    1: initiate an empty hash map (to store anagrams)
    2. iterate through input array with for loop O(n)
        2a. store current word in a variable
        2b. sort the current word alphabetically O(n log n)
        2b. check to see if this word has been seen already within hash
            2ba. if it has, just add the word to the already existing key ("word.sorted": [word1, word2])
            2bb. else, create the key-value pair and add it
    3. iterate through hash table
        3a. take all values and push it into output array
    4. return final output
            
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    const outputArr = [];

    for (let i = 0; i < strs.length; i++) {
        const currentWord = strs[i];
        const wordSorted = currentWord.split('').sort().join('');

        if (hash.hasOwnProperty(wordSorted)) {
            hash[wordSorted].push(currentWord);
        } else {
            hash[wordSorted] = [currentWord];
        }
    }
    
    for (const key in hash) {
        outputArr.push(hash[key]);
    }
    return outputArr;
};