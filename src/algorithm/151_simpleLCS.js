function simpleLCS(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return 0;
  } else {
    // 檢查最後一個值是否相同
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      // 相同的話，回傳 1 加上去除最後一個字元的字串
      return (
        simpleLCS(
          str1.substring(0, str1.length - 1),
          str2.substring(0, str2.length - 1)
        ) + 1
      );
    } else {
      // 不同的話，回傳去除 str1 最後一個字元的字串與去除 str2 最後一個字元的字串的最大值
      return Math.max(
        simpleLCS(str1.substring(0, str1.length - 1), str2),
        simpleLCS(str1, str2.substring(0, str2.length - 1))
      );
    }
  }
}

console.log(simpleLCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"));
