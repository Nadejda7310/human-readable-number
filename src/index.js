module.exports = function toReadable (number) {
    const alphabet = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const alphabet1 = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const alphabet2 = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const alphabet3 = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    
    let result = ''
    let numStr = number.toString()

    if (numStr.length === 3){
        if(numStr.slice(1, ) === '00'){
            result = `${alphabet1[numStr[0]]} hundred`
        }
        else if (numStr.slice(1, ) < 20 && numStr.slice(1, ) > 9){
                result = `${alphabet1[Math.floor(number/100)]} hundred ${alphabet2[numStr.slice(1, )]}`
            }
        else if (numStr[2] === '0'){
            result = `${alphabet1[numStr[0]]} hundred${alphabet3[numStr[1]] === '' ? '' : ' ' + alphabet3[numStr[1]]}`
        }
        else {
                result = `${alphabet1[numStr[0]]} hundred${alphabet3[numStr[1]] === '' ? '' : ' ' + alphabet3[numStr[1]]} ${alphabet1[numStr[2]]}`
            }

    }
    else if (numStr.length === 2){
        if (numStr < 20){
            result = `${alphabet2[number]}`
        }
        else if (numStr[1] === '0'){
            result = `${alphabet3[numStr[0]]}`
        }
        else { 
            result = `${alphabet3[numStr[0]]} ${alphabet1[numStr[1]]}`
        }
    }

    else if (numStr.length === 1){
        result = `${alphabet[number]}`
    }

    return result;
}


