/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //Approach-1:TC=O(n * mlogm), SC=O(m*n);
    //n is no of strings, m is max length of each string
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");//TC=O(m logm)
        if (map[sortedStr]) {
            map[sortedStr].push(strs[i]);
        }
        else {
            map[sortedStr] = [strs[i]];
        }
    }
    return Object.values(map);
};