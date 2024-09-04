function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    if (!counter[str[end]]) {
      counter[str[end]] = 1;
      end++;

      let cuttentLength = end - start;
      if (cuttentLength > maxLength) {
        maxLength = cuttentLength;
      }
    } else {
      counter[str[start]]--;
      start++;
    }
  }

  console.log("maxLength", maxLength);
  return maxLength === -Infinity
    ? "Can't find unique letter substring"
    : maxLength;
}
// thisishowwedoit
uniqueLetterString("aaaaabcabcd"); // 6
