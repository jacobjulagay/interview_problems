
let given_string = "aba";
function isPalindrome(string){
    //checking if string is empty 
    if(string.length === 0){
        return false;
    }

    // O(N) Space and Time
    // pushing to the list instead of "+=""
    array_1 = [];
    for(let i = string.length - 1 ; i >= 0; i--){
        array_1.push(string.charAt(i));
    }
    console.log(array_1.join(""))

    // Joining the array to compare w/ string
    if(array_1.join("") === string){
        console.log(true);
        return true;
    }
    else{
        console.log("false")
    }
}

isPalindrome(given_string)