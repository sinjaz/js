log = console.log;
let counter = () => {
    _count = 0;
    return {
        add: () => {
            _count++;
        },

        getCount: () => {
            return _count;
        }
    }
}

let counter1 = counter();
counter1.add();
counter1.add();
counter1.add();
log(counter1.getCount());
