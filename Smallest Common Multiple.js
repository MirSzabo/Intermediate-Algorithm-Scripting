//Smallest Common Multiple
/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.*/

const smallestCommons = arr => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sol = max;
  
    for (let i = max - 1; i >= min; i--) {
      if (sol % i) {
        sol += max;
        i = max;
      }
    }
    return sol;
  };

  smallestCommons([1, 5]);

