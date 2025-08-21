/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  //Approach-1: TC=O(n), SC=O(1)
  /*     if (s.length != t.length) return false;
        let map = {}
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]]) {
                if (map[s[i]] != t[i]) return false;
            }
            else {
                if (Object.values(map).includes(t[i])) return false;
                map[s[i]] = t[i];
            }
        }
        return true; */

  //Approach-2:
  if (s.length != t.length) return false;
  let mapStoT = {};
  let mapTtoS = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
