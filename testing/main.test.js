import add from './main'
// const add = require('./main');

describe('My first test', function() {
  it('Must do stuff', function() {
    const result = add(2, 3);
    expect(result).toBe(5);
  })
})