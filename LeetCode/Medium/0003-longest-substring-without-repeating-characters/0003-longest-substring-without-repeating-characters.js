/*
P:
    input: string (s)
    output: integer
    task: based on the input string, return the number of the longest length of non-repeating characters within it (unique characters within the substring caught)

E:
    - can the input string ever be empty?: yes, can be less than or equal the zero
D:
    strings, integers, hash table
A:
    1. initiate a new Set
    2. create two variables: highest and count (output)
    3. iterate through the string with for loop
        3a. check if the current letter was already seen
            - if not, increment count by 1 and add that letter to set
            - if we have, check to see if the count is higher than the highest
                - if so, reassign highest to be count and set count to zero
                - else, set count to zero and continue
    4. return highest (output)
C:
*?

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Set();
    let highest = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            highest = Math.max(highest, right - left + 1);
            } else {
                while (seen.has(s[right])) {
                    seen.delete(s[left]);
                    left++;
                };
                seen.add(s[right]);
            };
    };
    return highest;
};