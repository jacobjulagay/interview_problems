
let number = 10
function multiples(number){

    let sum = 0;
    for(let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0 || i%15 === 0){
            sum+=i
        }
    }
    return sum
}
console.log(multiples(number))