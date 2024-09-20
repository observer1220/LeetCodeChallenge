function kmpSearch(text, pattern) {
  // 構建 LPS（Longest Prefix Suffix）數組
  function buildLps(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let length = 0; // 長度計數器
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else {
        if (length !== 0) {
          length = lps[length - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }

  let lps = buildLps(pattern);
  let i = 0; // text的索引
  let j = 0; // pattern的索引
  let count = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
      if (j === pattern.length) {
        count++;
        j = lps[j - 1];
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  console.log(`Pattern found ${count} times.`);
}

kmpSearch("ABCDABCEABCDABCE", "ABCDABCD");
