
let given_string = "aba";
function isPalindrome(string){
    if(string.length === 0){
        return false;
    }
    array_1 = [];
    for(let i = string.length - 1 ; i >= 0; i--){
        array_1.push(string.charAt(i));
    }
    console.log(array_1.join(""))

    if(array_1.join("") === string){
        console.log(true);
        return true;
    }
    else{
        console.log("false")
    }
}

isPalindrome(given_string)