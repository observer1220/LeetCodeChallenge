/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapChars = {};
  const setVals = new Set();

  for (let i = 0; i < s.length; i++) {
    // 查閱mapChars是否包含 s[i]，如果沒有就透過else為s[i]賦值
    if (mapChars.hasOwnProperty(s[i])) {
      // 當s[i] 不等於 t[i]時，回傳false
      if (mapChars[s[i]] !== t[i]) {
        return false
      }
    } else {
      // 當setVals物件包含t[i]時，回傳false
      if (setVals.has(t[i])) {
        return false
      }
      // 當 s[i] = t[i] 後，將 t[i] 加到 setVals 這個物件中
      mapChars[s[i]] = t[i];
      setVals.add(t[i]);
    }
  }
  console.log('mapChars', mapChars);
  console.log('setVals', setVals);
  return true;
};

// const s = "egg", t = "add";
// const s = "foo", t = "bar";
const s = "paper", t = "title";
isIsomorphic(s, t);

/** Rules
 * 1. The length of both s and t must be equal.
 * 2. The characters in s should be replaced with the characters in t.
 */