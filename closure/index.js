log = console.log;

let plus = (function() {
    let counter = 0;
    return function () {
        console.log(counter);
        return counter += 1;
    }
})();

plus();
plus();
plus();
