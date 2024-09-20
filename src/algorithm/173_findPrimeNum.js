// Find prime numbers from 1 to n
function findPrimeNum(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    arr = arr.filter((el) => el % i !== 0 || el === i);
  }
  console.log(arr);
  return arr;
}

findPrimeNum(100000);
