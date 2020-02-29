//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let ar = s.split('');
  let count = 0;
  for (let i in ar) {
    if (ar[i] === 'a') {
      count++;
    }
  }

  let leftOver = n % ar.length;
  let output = Math.floor(count * (n-leftOver) / ar.length);
  
  for (let i = 0; i < leftOver; i++) {
    if (ar[i] === 'a') {
      output++;
    }
  }
  
  return output;
}

console.log(repeatedString('aba', 10));
