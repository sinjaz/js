function* hi(input) {
  console.log('Step 1');
  yield null;
  console.log('Step 2');
}

var h = hi();
setTimeout(function () {
    h.next();
}, 2000);

setTimeout(function(){
    h.next();
}, 1000);
