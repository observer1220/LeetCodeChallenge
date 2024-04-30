/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  obj = JSON.stringify(obj)
  if (obj === "{}" || obj === "[]") return true
  else return false
};
var obj = { "x": 5, "y": 42 }
console.log(isEmpty(obj));