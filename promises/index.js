(async function callMe() {
console.log('Start...');

function sayHelloAfterASecond() {
    return new Promise(async function(resolve) {
        setTimeout(async function () {
            console.log('Hello!!!');
            resolve();
        }, 2000);
    });

}

    await sayHelloAfterASecond();
    console.log('Finish...');
})();