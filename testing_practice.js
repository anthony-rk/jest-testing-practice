// function to capitalize a string
const capitalizeString = (str) => {
    let firstLetter = str[0].toUpperCase();
    let restOfString = str.slice(1, str.length);

    let result = firstLetter + restOfString;

    return result;
};

// Function to reverse a string
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

// Basic calculator object
const calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    divide: function(a, b) { return a / b; },
    multiply: function(a, b) { return a * b; }
};

// Caesar cypher function
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

// Helper functions for arrayAnalyze()
const findMin = (arr) => {
    let res = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (res > arr[i]) { res = arr[i] }
    }
    return res;
};

const findMax = (arr) => {
    let res = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (res < arr[i]) { res = arr[i] }
    }
    return res;
};

// Array Analysis
const arrayAnalyze = (arr) => {
    const objAnalysis = {};

    objAnalysis.average = (arr.reduce((a, b) => {
        return a + b;
    }, 0)) / arr.length;

    objAnalysis.min = findMin(arr);

    objAnalysis.max = findMax(arr);
    
    objAnalysis.length = arr.length;

    return objAnalysis;
};

export {   
    capitalizeString,
    reverseString,
    calculator,
    caesarEncryption,
    arrayAnalyze
}