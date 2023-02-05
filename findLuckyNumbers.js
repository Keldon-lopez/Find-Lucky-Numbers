// Write your code below this line.
const luckyNumbers = num => {
    let arr = [];
    for (let index = 0; arr.length < num; index++) {
        let randomNum = Math.round(Math.random()*num);
       if (!arr.includes(randomNum)) {
               arr.push(randomNum);
       } 
    }
    return arr;
}
console.log(luckyNumbers(7));