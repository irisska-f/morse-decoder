const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    let str = '';
    for (let i of arr) {

        if (i === '**********') {
            str += ' ';
        } else {
            let line = i.split('').join('');
            line = line.replace(/00/ig, '');
            let currSymbol = '';

            for (let j = 0; j < line.length; j += 2) {
                currSymbol += (line.substr(j, 2) === '10') ? '.' : '-';
            }

            str += MORSE_TABLE[currSymbol];
        }
    }
    return str;
}

module.exports = {
    decode
}
