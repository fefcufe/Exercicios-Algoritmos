function cakes(recipe, available) {
  let results = []
  const recipesKeys = Object.keys(recipe).sort();
  const availableKeys = Object.keys(available).sort();
  const containsAll = recipesKeys.every(element => {
    return availableKeys.includes(element)
  })
  if (containsAll === false)
    return console.log(0)
  else 
    recipesKeys.forEach(element => {
      const qtty = available[element] / recipe[element]
      results.push(qtty)
    });
    return console.log(Math.floor(Math.min.apply(Math, results)))  
 
  }

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

   
  
    

