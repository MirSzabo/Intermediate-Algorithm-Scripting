//Intermediate Algorithm Scripting: Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // Create a variable for the white space and underscores
  const regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Replace space and underscore with dashes
  return str.replace(regex, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
