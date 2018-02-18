function add(x, y) {
  if (x === undefined ||
      y === undefined ||
      typeof x === 'string' ||
      typeof y === 'string') {
    return 0;
  }
  return x + y;
}

module.exports = add;