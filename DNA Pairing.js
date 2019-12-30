//Intermediate Algorithm Scripting: DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

function pairElement(str) {
  var paired = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
        paired.push(["G", "C"]);
    } else if (str[i] === "C") {
      paired.push(["C", "G"]);
    } else if (str[i] === "A") {
      str[i] = "AT";
    } else if (str[i] === "T") {
      str[i] = "TA";
    } 
  }
  str = str.map(x => [x, pairs[x]]);
  //str = str.split(" ");

  console.log(str);
 // return str;
}

pairElement("GCG");
