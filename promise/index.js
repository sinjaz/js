function getData(input) {
  console.log('input: ' + input);
  return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('output: ' + input);
      }, 2000);
  });
}

getData(1).then(function(data){
  console.log('data: ', data);
  return getData(2);
}).then(function(data){
  console.log('data: ', data);
});