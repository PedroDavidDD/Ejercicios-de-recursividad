// 1 normal
function highAndLow(num) {
    const numbers = num.split(" ");
    console.log(numbers)

    const plus = numbers.reduce((previous, current)=> current > previous ? current : previous);

    const less = numbers.reduce((previous, current)=> current > previous ? previous : current );

    return [plus, " ", less].join("");
}

console.log(highAndLow("10 1 9 3 4 -5 -20"));

// 2 Recursive function
function higthAndLow (str){
    const format = str.split(" ")
    const plus = Math.max(... format);
    const less = Math.min(... format)
    
    return plus+" "+less;
    }
    console.log(higthAndLow("10 1 -3 2 5 -20"))