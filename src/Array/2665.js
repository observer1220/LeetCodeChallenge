/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var currentCount = init;
  return {
    increment () {
      currentCount++
      return currentCount
    },
    decrement () {
      currentCount--
      return currentCount
    },
    reset () {
      currentCount = init;
      return currentCount;
    },
  }
};
const counter = createCounter(5)
console.log(counter.increment());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */