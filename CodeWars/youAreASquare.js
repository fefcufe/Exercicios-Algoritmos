function isSquare (number) {
    result = Math.sqrt(number);
    console.log(Math.floor(result) === result)
}

isSquare(4)
isSquare(26)

// another way to check if a number is integer manually, is calculate division's rest for one
/* 1.9098 % 1 !== 0
1 % 1 === 0 */