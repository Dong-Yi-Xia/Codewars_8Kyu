// Given a random non-negative number, you have to return the digits of this number within an
//  array in reverse order.

// 348597 => [7,9,5,8,4,3]

const n = 348597

function digitize(n) {
    return n.toString().split("").reverse().map(num => parseInt(num))
  }


console.log(digitize(n))  







// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//  }