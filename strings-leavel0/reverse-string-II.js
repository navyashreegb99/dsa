/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let start = 0;
    let newStr = "";
    while (start < s.length) {
        newStr = newStr + reverse(s.slice(start, start + k)) + s.slice(start + k, start + (2 * k));
        start = start + (2 * k);
    }
    return newStr;
};

function reverse(s) {
    let arr = s.split("");
    let len = arr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]]
    }
    return arr.join("");
}