// https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

function isBalanced(expression) {
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      stack.push('(');
    } else if (stack[stack.length-1] === '(') {
      stack.pop();
    } else {
      return false;
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