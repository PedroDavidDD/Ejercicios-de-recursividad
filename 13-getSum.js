function getSum(a, b)
{
   const plus = Math.max(a, b);
   const less = Math.min(a, b);
   let temp = []

   for (let index = less; index <= plus; index++) {
      temp = [ ...temp, index ];
   }
   
   const acc = temp.reduce((prev, cur)=> {
      return prev + cur;
   } );

   return acc;
}

console.log(getSum(-1, 2));