/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // TC=O(nm)
    let map = {};
    for (let i = 0; i < strs.length; i++) {//O(n)
        let freq = Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {//O(m)
            let index = strs[i].charCodeAt(j) - 97;
            freq[index]++;
        }
        let key = "";
        for (let x = 0; x < 26; x++) {//O(26)
            key = key + '#' + freq[x];
        }
        if (!map[key]) map[key] = [strs[i]];
        else map[key].push(strs[i]);
    }
    return Object.values(map);
};