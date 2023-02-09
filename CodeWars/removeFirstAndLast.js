function removeChar(str) {
  console.log(str.slice(1, str.length - 1)) 
}

removeChar('Fernanda')

// another solution
// 1 par é inclusivo e ultimo é exclusivo
/* function removeChar(str) {
    return str.slice(1, -1);
  } */