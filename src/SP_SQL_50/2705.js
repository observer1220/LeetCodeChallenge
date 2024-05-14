/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) compacted[key] = value;
  }

  return compacted
};
// Input: obj = [null, 0, false, 1]            Output: [1]
// Input: obj = { "a": null, "b": [false, 1] } Output: { "b": [1] }
// Input: obj = [null, 0, 5, [0], [false, 16]] Output: [5, [], [16]]

var obj = { "a": 1, "b": 1, "c": null, "d": "false", "e": 0 }
compactObject(obj)