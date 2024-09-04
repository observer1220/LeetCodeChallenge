function rs(n) {
  if (n === 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(3));

/**
 * rs(3) => rs(2)
 * rs(2) => rs(1)
 * rs(1) => 10
 * rs(2) => 10 + 15 = 25
 * rs(3) => 25 + 15 = 40
 */
