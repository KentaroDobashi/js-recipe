const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}
// n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

const genkifunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkifunction(24)

genkifunction(100)

const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

FizzBuzz(100)
