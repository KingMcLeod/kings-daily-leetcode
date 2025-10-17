/*
P:
    input: string (s)
    output: integer
    task: based on the Roman numeral given, convert it into its integer counterpart
E:
    Example(s):
        input: s = "III";
        output: romanToInt(s) = 3
        breakdown:
            I = 1
            I + I + I -> 1 + 1 + 1 = 3
D:
    strings, integers
A:
    1. initiate an accumulator variable (sum)
    2. initiate hash table/map with roman numeral conversions
    3. initiate loop to iterate through strings O(n)
        3a. store current roman numeral in a variable (currRomanNum)
        3b. check to see the value of the current roman numeral based on hash map
            3ba. if its I, check to see if V or X is after it
                - if so, get its value, add it to sum, and adjust pointer (i);
            3bb. if its X, check to see if L and C is after it
                - if so, get its value, add it to sum, and adjust pointer (i);
            3bc. if its C, check to see if D or M is after it
                - if so, get its value, add it to sum, and adjust pointer (i);
    4. return final output (sum)
C:
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    const hash = {
        "I": 1,
        "Iv": 4,
        "V": 5, 
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50, 
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    };

    for (let i = 0; i < s.length; i++) {
        const currRomanNum = hash[s[i]];
        const nextRomanNum = hash[s[i + 1]];

        if (currRomanNum < nextRomanNum) {
            sum += nextRomanNum - currRomanNum;
            i++;
        } else {
            sum += currRomanNum;
        }
    };
    return sum;
};