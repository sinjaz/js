
// Array manipulation
function reverse(s) {
  let i = 0;
  s = s.split('');
  while (i < s.length) {   
    const char = s.pop();
    s.splice(i, 0, char);
    i++;
  }
  s = s.join('');
  return s;
}




// String manipulation
function reverse2(s) {
  const n = s.length;
  let i = 0;
  while (i < n) {
    let lastChar = s.charAt(s.length-1);
    s = s.slice(0, i) + lastChar + s.slice(i, s.length - 1);
    i++;
  }

  return s;
}

console.log(reverse('sina'));
console.log(reverse('sam'));
