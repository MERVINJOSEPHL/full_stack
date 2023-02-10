function isValidName(name) {
  let term = name.split(" ");
  let numTerm = term.length;
  for (let i = 0; i < numTerm; i++) {
    if (term[i][0] !== term[i][0].toUpperCase()) {
      return false;
    }
  }
  if (numTerm === 2) {
    return term[0].length === 2 && term[0][1] === ".";
  }
  if (numTerm!== 2 && numTerm!== 3) {
    return false;
  }  
  let firstTerm = term[0];
  if (firstTerm.length === 1) {
    if (firstTerm[0] === "." || firstTerm[firstTerm.length - 1] !== ".") {
      return false;
    }
  }

  let middleTerm = term[1];
  if (middleTerm.length === 1) {
    if (middleTerm[0] === "." || middleTerm[middleTerm.length - 1] !== ".") {
      return false;
    }
  }
 else {
    return false;
  }
  let lastTerm = term[numTerm-1];
  if (lastTerm.length === 1 || lastTerm[lastTerm.length - 1] === ".") {
    return false;
  }

  return true;
}
