/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenthesesObj = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (parenthesesObj[char]) {
            // If it's an opening bracket, push the expected closing bracket
            stack.push(parenthesesObj[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
};