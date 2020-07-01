const capitalizeString = (str) => {
    let firstLetter = str[0].toUpperCase();
    let restOfString = str.slice(1, str.length);

    let result = firstLetter + restOfString;

    return result;
};

const reverseString = (str) => {
    let strArray = [];
    let revString = '';

    for (let i = 0; i < str.length; i++)
        strArray.push(str[i]);
    
    strArray.reverse().forEach((letter) => {
        revString += letter;
    });

    return revString;
};

const calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    divide: function(a, b) { return a / b; },
    multiply: function(a, b) { return a * b; }
};

const caesarEncryption = (phrase, offset) => {
    var encMsg = "";

    for (let i = 0; i < phrase.length; i++)
    {
        let code = phrase.charCodeAt(i);

        // Check if it is in the Ascii Alphabet range
        if (code >= 65 && code <= 90) {
            code -= 65;
            code = (code + offset) % 26;
            code += 65;
        } else if (code >= 97 && code <= 122) {
            code -= 97;
            code = (code + offset) % 26;
            code += 97;
        }
        encMsg += String.fromCharCode(code);
    }
    return encMsg;
};

export {   
    capitalizeString,
    reverseString,
    calculator,
    caesarEncryption
}