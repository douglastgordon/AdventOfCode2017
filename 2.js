const fs = require('fs')
const input = fs.readFileSync(__dirname + '/2_input.txt').toString().split("\n").map(row => row.split("\t").map(el => Number(el))).slice(0, -1)

const problemOne = () => {
  let checksum = 0
  input.forEach((row) => {
    let highest = lowest = row[0]
    row.forEach((el) => {
      if (el > highest) highest = el
      if (el < lowest) lowest = el
    })
    checksum += (highest - lowest)
  })
  return checksum
}

const problemTwo = () => {
  let checksum = 0
  input.forEach((row) => {
    row = row.sort()
    row.forEach((el1, idx1) => {
      row.forEach((el2, idx2) => {
        if (el2 % el1 === 0 && idx1 !== idx2) {
          checksum += el2 / el1
          return
        }
      })
    })
  })
  return checksum
}


console.log(`Problem one solution: ${problemOne()}`)
console.log(`Problem two solution: ${problemTwo()}`)
