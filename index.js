var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  if (katzDeliLine.length == 1) {
    console.log(`Welcome, ${name}. You are number 1 in line.`)
  } else {
    var position = katzDeliLine.length + 1;
    console.log(`Welcome, ${name}. You are number ${position} in line.`)
  }
