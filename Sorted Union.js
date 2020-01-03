//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...arr) {
  const newArr = [].concat(...arr);
  const finalArr = [...new Set(newArr)];
  console.log(finalArr);
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
