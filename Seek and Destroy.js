//Seek and Destroy
  //Remove all elements from the initial array that are of the same value as these arguments.
  function destroyer(arr) {
    let valuesToRemove = [];
    for (let i = 1; i < arguments.length; i++) {
      valuesToRemove.push(arguments[i]);
    }
    arr = arr.filter(ele => valuesToRemove.indexOf(ele) === -1);
    console.log(arr);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);