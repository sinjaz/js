var run = coroutine(function* (){
    var x = 1 + (yield null);
    var y = 1 + (yield null);
    return x + y;
});

run();
run(15);
console.log(run(9));