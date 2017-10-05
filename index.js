var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.indexOf(customer) + } in line.`
}

function nowServing(katzDeliLine) {
<<<<<<< HEAD
  if (katzDeliLine.length < 1) {
    return `There is nobody waiting to be served!`
  } else return `Currently serving ` + katzDeliLine.shift() + `.`
}

function currentLine(line) {
  var string = `The line is currently:`
  if (line.length < 1) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < line.length; i++) {
      string = string + ` ${i+1}. ${line[i]},`
    }
  } return string.substr(0, (string.length - 1))
=======
  if (katzDeliLine.index < katzDeliLine.length) {
    return `There is nobody waiting to be served!`
  } else return `Currently serving ` + katzDeliLine[0] + `.`
  return katzDeliLine.unshift
>>>>>>> 71903c065ed6036e9e4486e5a91e79397847bc04
}
