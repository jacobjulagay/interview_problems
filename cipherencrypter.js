
string = "xyz"
key = 2
//Expected output = "zab"
function cipherEncrypter(string, key){
  
    result = []
    for(let i = 0; i < string.length; i++)   {
        let newCode =  getNewLetter(string, i, key)
        result.push(newCode)
    } 
    console.log(result)
}

function getNewLetter(str, index, key){
    newKey = key % 26 // this handles key's that are greater than 26
    newLetter = str.charCodeAt(index) + newKey

    if(newLetter<=122){
        return String.fromCharCode(newLetter)
    }else{
        return String.fromCharCode(96+ (newLetter % 122))
    }
}



cipherEncrypter(string,key)