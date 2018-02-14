log = console.log;

function getData() {
    return new Promise((resolve, reject) => {
        // If things go Well
        setTimeout(() => {
            resolve('Awesome Data');
        }, 1000);

        // Otherwise
        // reject('Some error);
    });
}

getData()
.then(response => { log('Success: ', response);}, reject => {
    log('Reject: ', reject);
})
.catch((error) => {
    log('Error: ', error);
})
