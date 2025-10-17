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
        3b. check to see the value of the current roman numeral is less than the next roman numera
            3ba. if it is, subtract it from the next roman numeral and add it to sumk, then adjust pointer,
            3bb. else, add current roman numeral num to sum and continue
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
        "V": 5, 
        "X": 10,
        "L": 50, 
        "C": 100,
        "D": 500,
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
        };
    };
    return sum;
};