//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    return arr.flat(Infinity);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
