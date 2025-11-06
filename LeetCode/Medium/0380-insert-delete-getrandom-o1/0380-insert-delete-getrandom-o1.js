/*
P:
    input: arr of strings (class commands), 2-D array (matrix of actions)
    output: arr of booleans + integers (responses of methods)
    task: build out the methods for this RandomizedSet class:
            - insert: inserts a integer in the set, returns boolean if it was successful or not
            - delete: removes a integer in the set, returns boolean if it was successful or not
            - getRandom: returns a random element from the current set we have
        and each method must have a constant time complexity [ O(1) ]
E: 

D:
    arrays, integers, classes, objects, set (?)

A:

C:
*/

class RandomizedSet {
    constructor(set = new Set()) {
        this.set = set;
    }

    insert(val) {
        if (this.set.has(val)) {
            return false;
        } else {
            this.set.add(val);
            return true;
        }
    }

    remove(val) {
        if (!this.set.has(val)) {
            return false;
        } else {
            this.set.delete(val);
            return true;
        }
    }
    
    getRandom() {
        const setArr = [...this.set];

        const randomSetIndex = Math.floor(Math.random() * setArr.length);

        return setArr[randomSetIndex];


    }
}

// var RandomizedSet = function() {
    
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
    
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
    
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
    
// };

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */