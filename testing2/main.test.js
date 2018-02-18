var add = require('./main');

describe('The add function', function() {
  it('should return 5 if passed in 2 and 3', function() {
    var sum = add(2, 3);
    expect(sum).toBe(5);
  });

  it('should return 6 if passed in 2 and 4', function () {
    var sum = add(2, 4);
    expect(sum).toBe(6);
  });

  it('should return 0 if parameters are missing', function () {
    var sum = add();
    expect(sum).toBe(0);
  });

  it('should return 0 if any parameter is a String', function () {
    var sum = add('Sina', 10);
    expect(sum).toBe(0);
  });
});