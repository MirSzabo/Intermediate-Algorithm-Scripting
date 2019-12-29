//Intermediate Algorithm Scripting: Pig Latin
//If a word begins with a vowel you just add "way" to the end.
//If a word does not contain a vowel, just add "ay" to the end.
//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  console.log(str[0]);
  if (
    str[0] === "e" ||
    str[0] === "a" ||
    str[0] === "i" ||
    str[0] === "y" ||
    str[0] === "o" ||
    str[0] === "u"
  ) {
    str = str + "way";
  } else {
    str = str.replace(/([^aeiou]*)([aeiou]\w*)/, "$2$1ay");
    console.log(str);
    return str;
  }
}

translatePigLatin("paragraphs");
