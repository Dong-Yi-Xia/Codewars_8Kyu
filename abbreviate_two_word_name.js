// Write a function to convert a name into initials. This kata strictly takes
//  two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

const name = "Sam Pete"

function abbrevName(name){
  let iniArr = name.split(" ").map(word => word[0].toUpperCase())
  let intStr = iniArr.join('.')
  return intStr
}

console.log(abbrevName(name))