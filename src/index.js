module.exports = function reverse (n) {
    if (n < 0 ) {
        let str = String(n * -1 );
        let newStr = ''
        for(let i = str.length - 1; i >= 0 ; i--) {
            newStr += str[i]
          }
          return Number(newStr)

    }

  let str = String(n)
  let newStr = ''
  for(let i = str.length - 1; i >= 0 ; i--) {
    newStr += str[i]
  }
  return Number(newStr)
}
 