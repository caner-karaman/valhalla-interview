const reverseString = function(text){
	if(typeof text === 'string'){
  	let arr = text.split(' ').reverse().join(' ');
    return arr;
    
  } else {
  	console.error('text parameter should be a string value')
  }

}

const reversedString = reverseString("This is Valhalla");
console.log(reversedString);

// -----------------------------------------

const getHighestNumberofArray = function(numberArray){
	let highest = numberArray[0];
	let lowest = numberArray[0];
  
  numberArray.forEach((number) =>{
  	if(number > highest){
    	highest = number;
    }
    if(lowest > number){
    	lowest = number;
    }
  })

	return {
  	highest,
  	lowest,
  }
}

const numberArray = [34,7,23,32,5,62,-1];

const {highest, lowest} = getHighestNumberofArray(numberArray);
console.log('highest:');
console.log(highest);
console.log('lowest:');
console.log(lowest);

// --------------------------------------------------------------------------------

let numberArray = [34,7,23,32,5,62, 0, -3];

let i = 0;
for(i; i< numberArray.length; i++){
	let j = i;
  for(j; j< numberArray.length; j++){
		/*console.log('ceneme')
  	console.log('numberArray[i]', numberArray[i])
    console.log('numberArray[j]', numberArray[j])*/
    if(numberArray[i] > numberArray[j]){
      const tempVal = numberArray[i];
      numberArray[i] = numberArray[j];
      numberArray[j] = tempVal;
    }
  }
}


console.log(numberArray);

// --------------------------------------------------------------------------------

const getFirstRecurringChar = function(text){
  const charArray = [];
  let returnedChar = null;
  if(typeof text === 'string'){
    text.split('').forEach((char) => {
      if(returnedChar == null){
        if(charArray.findIndex((element) => element === char) !== -1){
          returnedChar = char
        } else {
          charArray.push(char);
        }
      }
    })
  
  }else {
    console.error('Given parameter is not string')
  }
return returnedChar;
}

const returnedChar = getFirstRecurringChar('ABCA');
console.log(returnedChar);
// --------------------------------------------------------------------------------

const isItEight = function(numberArray){
  let getEight = false;
    for(let i = 0; i<numberArray.length; i++){
      for(let j= 0; j<numberArray.length; j++){
        if(i !== j){
          if(numberArray[i] * numberArray[j] === 8){
            getEight = true;
            break;
          }
        }
      }
    }
    return getEight;
  }
  
  const isEight = isItEight([1,2,3,4]);
  console.log(isEight);