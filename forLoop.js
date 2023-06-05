
for (let i = 0; i < 30; i += 5) {
    console.log(i)
}


// array.length -1 ==== 5
// i ==== 5
// number === 35
// Write a method caesarCipher that takes in a string and a number.The function should return a new string where every character of the original is shifted num characters in the alphabet.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    let str = string.split("");
    for (let i = 0; i < str.length; i++) {
        let location = alphabet.indexOf(str[i]);
        let newletter;
        if ((location + num) > 25) newletter = alphabet[((location + num) % 25) - 1];
        else newletter = alphabet[location + num];
        str[i] = newletter;
    }
    let newword = str.join("");
    return newword;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
