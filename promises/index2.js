async function working() {
    return new Promise((resolve) => {
        console.log('Now Im working');
        setTimeout(asyncfunction () {
            console.log('Im almost done working');
            resolve('ok i am done');
        }, 2000);
    });
}

console.log('Hello');
await working();
console.log('Goodbye');