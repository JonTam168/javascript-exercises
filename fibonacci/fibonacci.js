const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

module.exports = fibonacci;

//Solved with Recursion
const fibonacci = function(num) {
    if(num < 0) {
        return 'OOPS';
    }
    else if(num < 2){
        return parseInt(num);
    }
    else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
