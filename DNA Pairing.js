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
      paired.push(["A", "T"]);
    } else if (str[i] === "T") {
      paired.push(["T", "A"]);
    } 
  }
  console.table(paired);
}

pairElement("GCG");
