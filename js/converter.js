/*
Próxima implementação:
1. Permitir mais de um valor no mesmo campo
Exemplo:    1001101 1010101 1011101 
            ABCD 1342D FADF 
*/
function dec_to(str, destiny) {
    let converted = [];
    let number = parseInt(str);

    if (number == 0)
        return 0;

    else {
        while (number > 0) {
            converted.push(number % destiny);
            number = parseInt(number / destiny);
        }

        if (destiny == 16) {
            for (let i = 0; i < converted.length; i++)
                converted[i] = translateHexTo(converted[i], 'hex');
            return converted.reverse().toString();
        }

        if (destiny == 8 || destiny == 2 || destiny == 10)
            return converted.reverse().toString();
    }
}

function to_dec(str, origin) {
    let strNumber = str.toString();
    let originalNumber = strNumber.split('');
    let convertedNumber = 0;
    originalNumber.reverse();

    if (origin == 2 || origin == 8 || origin == 10) {
        for (let i = 0; i < originalNumber.length; i++) {
            convertedNumber += Math.pow(origin, i) * originalNumber[i];
        }
        return convertedNumber;
    }

    else if (origin == 16) {
        for (let i = 0; i < originalNumber.length; i++) {
            if (Number.isInteger(originalNumber[i] * 1))
                convertedNumber += Math.pow(origin, i) * (originalNumber[i]);
            else
                convertedNumber += Math.pow(origin, i) * (translateHexTo(originalNumber[i], 'dec'));
        }
        return convertedNumber;
    }
}

function bin_to(str, destiny) {
    let dec = to_dec(str, 2);

    if (destiny == 8)
        return dec_to(dec, 8);

    if (destiny == 16)
        return dec_to(dec, 16);

    if (destiny == 10)
        return dec;
}

function to_bin(str, origin) {
    if (origin == 8) {
        let dec = to_dec(str, 8);
        return dec_to(dec, 2);
    }

    if (origin == 16) {
        let dec = to_dec(str, 16);
        return dec_to(dec, 2);
    }
}

function hex_to(str, destiny) {
    let dec = to_dec(str, 16);
    return dec_to(dec, destiny);
}

function oct_to(str, destiny) {
    let dec = to_dec(str, 8);
    return dec_to(dec, destiny);
}

function translateHexTo(str, base) {
    if (base === 'hex') {
        str *= 1;

        if (str >= 0 && str < 9)
            return str;
        if (str == 10)
            return 'A';
        if (str == 11)
            return 'B';
        if (str == 12)
            return 'C';
        if (str == 13)
            return 'D';
        if (str == 14)
            return 'E';
        if (str == 15)
            return 'F';
    }

    else if (base === 'dec') {
        strUpper = str.toUpperCase();
        if (strUpper == 'A')
            return 10;
        if (strUpper == 'B')
            return 11;
        if (strUpper == 'C')
            return 12;
        if (strUpper == 'D')
            return 13;
        if (strUpper == 'E')
            return 14;
        if (strUpper == 'F')
            return 15;
    }
}

function converter() {
    let selectBases = document.getElementById('select-bases');
    let optionValue = selectBases.options[selectBases.selectedIndex].value;
    let unconverted = document.getElementById('textarea-origin').value;
    let numericBases = optionValue.split('-');

    let origin = numericBases[0];
    let destiny = numericBases[1];

    if (origin == 10) {
        document.getElementById('textarea-destiny').value = (dec_to(unconverted, destiny));
    }

    else if (destiny == 10) {
        document.getElementById('textarea-destiny').value = (to_dec(unconverted, origin));
    }

    else if (origin == 2) {
        document.getElementById('textarea-destiny').value = (bin_to(unconverted, destiny));
    }

    else if (destiny == 2) {
        document.getElementById('textarea-destiny').value = (to_bin(unconverted, origin));
    }

    else if (origin == 8) {
        document.getElementById('textarea-destiny').value = oct_to(unconverted, destiny);
    }

    else if (origin == 16) {
        document.getElementById('textarea-destiny').value = hex_to(unconverted, destiny);
    }
}

function clean() {
    document.getElementById('textarea-origin').value = '';
    document.getElementById('textarea-destiny').value = '';
}
