word = "din"
function duplicateEncode(word){
    let stack = [];
    for(let i = 0; i < word.length; i++){
        stack.push(word.charAt(i))
    }
    
    console.log(stack)
}
duplicateEncode(word)