/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    //Approach-1
    /*  let vowels = ['a', 'e', 'i', 'o', 'u'];
     obj = {};
 
     //store values and its freq in the obj 
     for (let i = 0; i < s.length; i++) {
         if (!obj[s[i]]) obj[s[i]] = 1;
         else obj[s[i]]++;
     }
 
     //Find maxVowel and maxConstonant inside the obj
     let maxVowel = 0;
     let maxConstonant = 0;
     for (let key in obj) {
         if (vowels.includes(key)) {
             if (obj[key] > maxVowel)
                 maxVowel = obj[key];
         }
         else if (obj[key] > maxConstonant) {
             maxConstonant = obj[key];
         }
     }
     return maxVowel + maxConstonant; */

    //Approach- 2 TC=O(n) SC=O(1)- max value map can store is 26 letters
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    obj = {};

    //store values and its freq in the obj 
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
    }//TC-O(n)

    //Find maxVowel and maxConstonant inside the obj
    let maxVowel = 0;
    let maxConstonant = 0;
    for (let key in obj) {
        if (vowels.includes(key))//TC=O(1) -5 vowels
            maxVowel = Math.max(maxVowel, obj[key])
        else maxConstonant = Math.max(maxConstonant, obj[key])
    }//TC=O(1)- max times the loop will run is 26

    return maxVowel + maxConstonant;
};