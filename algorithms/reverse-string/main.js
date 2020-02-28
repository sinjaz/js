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

console.log(reverse('sina'));
console.log(reverse('sam'));