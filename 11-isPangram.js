// 1
function isPangram(string){
  const strFormat = string.toLowerCase();
  const alphabetic = "abcdefghijklmnopqrstuvwxyz"
  let newArray = [];
  if ( strFormat === alphabetic ) return true;

  strFormat.split("").forEach((checkLetter)=>{
      if ( alphabetic.split("").some(checkAlphabetic => checkAlphabetic === checkLetter) )
          newArray = [ ...newArray, checkLetter ];
  })
  
  const unitSet = new Set( newArray.sort( (a, b) => a.localeCompare(b) ) );
  newArray = Array.from( unitSet ).join("");
  return ( newArray === alphabetic )
}

// const str = "abcdefghijklmnopqrstuvwxyz"
// console.log( isPangram(str) )

// 2 - Refactored: Con new Set()
function isPangram( query ){
  const strFormat = query.toLowerCase();
  const setAlphabetic = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let element of strFormat) {
    if (setAlphabetic.has( element )) setAlphabetic.delete( element );
  }
  return setAlphabetic.size === 0;
}

const str = "abcdefghijklmnopqrstuvwxyz"
console.log( isPangram(str) );

// 3 Refactored: Con .Every()
function isPangram( query ){
  const alphabetic = "abcdefghijklmnopqrstuvwxyz";
  const formatQuery = query.toLowerCase();
  return [... alphabetic].every((element)=> formatQuery.includes( element ))
} 
// const str = "abcdefghijklmnopqrstuvwxyz"
// console.log( isPangram(str) );