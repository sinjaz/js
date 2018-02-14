log = console.log;
function Counter () {
    _count = 0;
    this.add = function () {
        _count++;
    }

    this.getCount = function () {
        return _count;
    }
}

let counter = new Counter();
counter.add();
counter.add();
counter.add();
log(counter.getCount());
