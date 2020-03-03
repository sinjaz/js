function person() {
  let key = 'abcdefgh'
  return function() {
    return key;
  }
}

let sina = person();
console.log(sina());