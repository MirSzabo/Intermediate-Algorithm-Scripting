//Intermediate Algorithm Scripting: Make a Person

/*Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object. */

const Person = function(firstAndLast) {
  const fullName = firstAndLast;
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    fullName = fullName.split(" ");
    return fullName[0];
  };
  this.getLastName = function() {
    fullName = fullName.split(" ");
    return fullName[1];
  };
  this.setFirstName = function(first) {
    fullName = fullName.split(" ");
    return first + fullName[1];
  };
  this.setFirstName = function(first) {
    fullName = first + ' ' + fullName.split(" ").pop();
    return fullName;
  };
  this.setLastName = function(second) {
    fullName = fullName.split(" ").shift() + ' ' + second;
    return fullName;
  };
  this.setFullName = function(name) {
    fullName = name;
    return fullName;
  };

};

const bob = new Person("Bob Ross");
//bob.getFullName();
//bob.getFirstName();
//bob.getLastName();
//bob.setFirstName("Haskell");
//bob.setLastName("Curry");
//bob.setFullName("Haskell Curry");