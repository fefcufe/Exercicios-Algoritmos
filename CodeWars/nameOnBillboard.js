function billboard(name, price = 30) {
  characters = name.length
  value = 0
  for (let i = 0; i < characters; i++) {
    value += price
  }
  return value;
}

billboard('Fernanda')
billboard('Fernanda Cunha Ferreira', 60)

// another solution
/* function billboard(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0); 
  } */