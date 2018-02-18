function isBalanced(expression) {
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      stack.push(expression[i]);
    } else if (expression[i] === ')') {
      if (stack.length > 0 && stack[stack.length-1] === '(') {
        stack.pop();
      } else {
        stack.push(expression[i]);
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced('()'));
console.log(isBalanced('()()'));
console.log(isBalanced('(())'));
console.log(isBalanced('(())))))'));
console.log(isBalanced('((((((((())))))'));
console.log(isBalanced('(((((((())))))))'));