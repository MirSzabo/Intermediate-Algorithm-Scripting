/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  const compare = str.charCodeAt(0),
    missing;

  str.split("").map((letter, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

fearNotLetter("abce");