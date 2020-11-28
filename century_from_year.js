// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.

// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// centuryFromYear(89)  returns (1)

const year = 1802

function century(year) {
    let num = year/100
    let cen = Math.ceil(num)
    return cen;
  }


console.log( century(year) )