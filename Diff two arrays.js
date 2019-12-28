//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2) {
  let newArr = [];
  const oneArray = arr1.concat(arr2);
  console.log(oneArray);
  newArr = oneArray.filter(
    item => !arr1.includes(item) || !arr2.includes(item)
  );
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
