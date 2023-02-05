// Write your code below this line.
const luckyNumbers = num => {
    let arr = [];
    for (let index = 0; arr.length < num; index++) {
        let randomNum = Math.round(Math.random()*num);
        console.log(randomNum);
       if (!arr.includes(randomNum)) {
               arr.push(randomNum);
       } 
       console.log(arr);
    }
    return arr;
}
luckyNumbers(7);