// hello, hello Dear => true
// book, brooklyn => true
// abc, bca => false
let str1 = "abc";
let str2 = "bca";

function sequenceProblem(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }

  return pointer1 === str1.length ? true : false;
}

sequenceProblem(str1, str2);
