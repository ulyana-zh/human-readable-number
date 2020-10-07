module.exports = function toReadable (number) {
    
  let arrOne = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  if (number < 20) {
      return arrOne[number];
  }

  let arrTwo = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number < 100) {
      return arrTwo[Math.floor(number / 10) - 2] + (number % 10 !== 0 ? " " + toReadable(number % 10) : "");
  }

  if (number < 1000) {
      return arrOne[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
  }


    
  
}
