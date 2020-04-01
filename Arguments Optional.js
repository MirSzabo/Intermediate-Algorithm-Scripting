//Arguments Optional
/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.*/
function addTogether(first, second) {
    if (typeof first !== "number") {
      return undefined;
    }
    const sum = second =>
      typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
  }
  
  addTogether(2, 3);
