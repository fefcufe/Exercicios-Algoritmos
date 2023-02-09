function howMuchILoveYou(nbPetals) {
    OPTIONS = {
        1: 'I love you',
        2: 'a little',
        3: 'a lot',
        4: 'passionately',
        5: 'madly',
        6: 'not at all'
    }

    let count = 1
    if (nbPetals > 7) {
        count = 2
    }
    for (let i = count; i == nbPetals; i++) {
        if (i == 6) {
          i = 1
        }
        count == i  
      }

    return console.log(count)
    
    
    // return console.log(OPTIONS[answer])
}

howMuchILoveYou(7)
howMuchILoveYou(9)