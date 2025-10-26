/*
P:
    input: matrix (board), string (word)
    output: boolean (true/false)
    task: return true or false if a word can be found given the board
E:
    - we can't check neighboring letters diagonally 
    - only consists of lowercase + uppercase english letters
    - m x n -> 1 <= m, n <= 6
    - no empty string for word param, guaranteed at least 1 character
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let i = 0;
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (helper(board, word, r, c, i)) {
                return true;
            }
        }
    }
    return false;
};

const helper = (board, word, r, c, i = 0) => {
    if (i >= word.length) {
        return true;
    }

    if (board[r]?.[c] === undefined) {
        return false;
    }

    if (board[r][c] === '-') {
        return false;
    }

    if (board[r][c] !== word[i]) {
        return false
    }

    const cellFound = board[r][c];
    board[r][c] = '-';

    const retval =
        helper(board, word, r - 1, c, i + 1) ||
        helper(board, word, r + 1, c, i + 1) ||
        helper(board, word, r, c - 1, i + 1) ||
        helper(board, word, r, c + 1, i + 1);

    board[r][c] = cellFound;
    return retval;
}