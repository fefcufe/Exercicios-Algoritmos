function invert(array) {
    const newArray = array.map((number) => {
        return number * -1;
    }) 
    return(newArray) ;
  }

  invert([]);

  // solucao nova 1
  const invert = array => array.map(num => -num);

  // solucao nova 2 

  function invert(array) {
    return array.map(e=> e*-1);
 }