/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /*  //Approach -1:TC= O(nlogn) SC=O(n)
     if (s.length != t.length) return false;
     else {
       return  s.split("").sort().join("") === t.split("").sort().join("");
     } */

  //Approach-2: TC=O(n), SC=O(1)
  if (s.length != t.length) return false;
  else {
    let newS = {};
    let newT = {};
    for (i = 0; i < s.length; i++) {
      if (!newS[s[i]]) newS[s[i]] = 1;
      else newS[s[i]] += 1;
      if (!newT[t[i]]) newT[t[i]] = 1;
      else newT[t[i]] += 1;
    }
    // console.log(newS,newT)
    for (let key in newS) {
      if (newS[key] != newT[key]) return false;
    }

    return true;
  }
};
