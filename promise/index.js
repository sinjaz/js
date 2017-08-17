function getData() {

  return new Promise(function(resolve, reject){
      setTimeout(function(){
          resolve('some data');
      }, 2000);
  });
}

getData().then(function(data){
  console.log('data:', data);
});