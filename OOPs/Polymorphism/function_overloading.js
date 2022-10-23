/**
 * Unlike the other programming languages, JavaScript Does not support Function Overloading.
 *
 * But we can implement function overloading in our own way
 */

function functionOverLoading(...args) {
  function addArray(arr = []) {
    return arr.reduce((sum, a) => sum + a, 0);
  }

  function addTwo(a, b) {
    return a + b;
  }

  function addThree(a, b, c) {
    return a + b + c;
  }

  if (args.length === 1 && typeof args[0] === "object" && args[0].length) {
    return addArray(args[0]);
  } else if (args.length === 2) {
    return addTwo(args[0], args[1]);
  } else if (args.length === 3) {
    return addThree(args[0], args[1], args[2]);
  } else {
    return "Invalid number of arguments";
  }
}

(() => {
  console.log(functionOverLoading([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  console.log(functionOverLoading(1, 2));

  console.log(functionOverLoading(1, 2, 3));
})();
