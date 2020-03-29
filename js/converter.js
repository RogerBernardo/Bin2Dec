/*
Próxima implementação:
Permitir mais de um valor no mesmo campo
    Exemplo:    1001101 1010101 1011101 
                ABCD 1342D FADF 
*/
function dec_to(str, destiny) {
    let converted = [];
    let convertedFilter;
    let number = parseInt(str);

    if (number == 0)
        return 0;

    if (destiny <= 0 || destiny >= 21)
        return;

    while (number > 0) {
        converted.push(number % destiny);
        number = parseInt(number / destiny);
    }

    switch (destiny) {
        case 2:
        case 8:
        case 10:
            convertedFilter = converted.reverse().toString().replace(/,/g, '');
            return convertedFilter;
        default:
            for (let i = 0; i < converted.length; i++)
                converted[i] = translate(converted[i]);
            convertedFilter = converted.reverse().toString().replace(/,/g, '');
            return convertedFilter;
    }
}

function to_dec(str, origin) {
    let strNumber = str.toString();
    let originalNumber = strNumber.split('');
    let convertedNumber = 0;

    originalNumber.reverse();

    if (origin <= 0 || origin >= 21)
        return;

    if (strNumber == '' || strNumber == null)
        return;

    switch (origin) {
        case 2:
        case 8:
        case 10:
            for (let i = 0; i < originalNumber.length; i++)
                convertedNumber += Math.pow(origin, i) * originalNumber[i];
            return convertedNumber;

        default:
            for (let i = 0; i < originalNumber.length; i++) {
                if (Number.isInteger(originalNumber[i] * 1))
                    convertedNumber += Math.pow(origin, i) * (originalNumber[i]);
                else
                    convertedNumber += Math.pow(origin, i) * (translate(originalNumber[i]));
            }
            return convertedNumber;
    }
}

function converter(number, origin, destiny) {
    if (origin == 10)
        return dec_to(number, destiny);


    else {
        let numberInDec = to_dec(number, origin);
        return dec_to(numberInDec, destiny);
    }
}

function translate(number) {
    let str;
    if (Number.isInteger(str))
        str = number

    else
        str = number.toString().toUpperCase();

    if (str >= 0 && str <= 9)
        return str;

    switch (str) {
        case 10:
            return 'A';
        case 11:
            return 'B';
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
        case 16:
            return 'G';
        case 17:
            return 'H';
        case 18:
            return 'I';
        case 19:
            return 'J';
        case 20:
            return 'K';
        case 'A':
            return 10;
        case 'B':
            return 11;
        case 'C':
            return 12;
        case 'D':
            return 13;
        case 'E':
            return 14;
        case 'F':
            return 15;
        case 'G':
            return 16;
        case 'H':
            return 17;
        case 'I':
            return 18;
        case 'J':
            return 19;
        case 'K':
            return 20;
        default:
            return '';
    }
}

function clean() {
    document.getElementById('number_origin').value = '';
    document.getElementById('number_destiny').value = '';
}


function converterHandler() {
    let origin = document.getElementById('base_origin').value;
    let destiny = document.getElementById('base_destiny').value;
    let numberOrigin = document.getElementById('number_origin').value;

    if (origin <= 1 || origin >= 21)
        return;

    if (destiny <= 1 || destiny >= 21)
        return;

    if (numberOrigin == '' || numberOrigin == null)
        return;

    let value_destiny = converter(numberOrigin, origin, destiny);
    document.getElementById('number_destiny').value = value_destiny;
}