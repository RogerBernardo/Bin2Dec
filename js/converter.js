const maiorBase = 21;

function dec_to(str, destiny) {
    let converted = [];
    let convertedFilter;
    let number = parseInt(str);

    if (number == 0)
        return 0;

    if (destiny <= 0 || destiny > maiorBase)
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
            for (let i = 0; i < converted.length; i++) {
                converted[i] = translate(converted[i]);
            }
            convertedFilter = converted.reverse().toString().replace(/,/g, '');
            return convertedFilter;
    }
}

function to_dec(str, origin) {
    let strNumber = str.toString();
    let originalNumber = strNumber.split('');
    let convertedNumber = 0;

    originalNumber.reverse();

    if (origin <= 0 || origin > maiorBase)
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

    if (Number.isInteger(parseInt(number)))
        str = number;

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
        case 21:
            return 'L';
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
        case 'L':
            return 21;
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

    if (origin <= 1 || origin > maiorBase)
        return;

    if (destiny <= 1 || destiny > maiorBase)
        return;

    if (numberOrigin == '' || numberOrigin == null)
        return;

    let value_destiny = converter(numberOrigin, origin, destiny);
    document.getElementById('number_destiny').value = value_destiny;
}


function operations(number1, base1, number2, base2, operator) {
    if (base1 != base2)
        return;

    let number1InDec = parseInt(converter(number1, base1, 10));
    let number2InDec = parseInt(converter(number2, base2, 10));
    let result;

    switch (operator) {
        case '+':
            result = number1InDec + number2InDec;
            return converter(result, 10, base1);

        case '*':
            result = number1InDec * number2InDec;
            return converter(result, 10, base1);

        case '-':
            result = number1InDec - number2InDec;
            return converter(result, 10, base1);

        case '/':
            if (number2InDec != 0) {
                result = parseInt(number1InDec / number2InDec);
                return converter(result, 10, base1);
            }
            break;

        default:
            return;
    }
}

let togglerCalc = 0;
function changeNumberToLetter() {
    let number_0 = document.getElementById('calc_number_0');
    let number_1 = document.getElementById('calc_number_1');
    let number_2 = document.getElementById('calc_number_2');
    let number_3 = document.getElementById('calc_number_3');
    let number_4 = document.getElementById('calc_number_4');
    let number_5 = document.getElementById('calc_number_5');
    let number_6 = document.getElementById('calc_number_6');
    let number_7 = document.getElementById('calc_number_7');
    let number_8 = document.getElementById('calc_number_8');
    let number_9 = document.getElementById('calc_number_9');


    if (togglerCalc % 2 == 0) {
        number_0.innerHTML = 'A';
        number_0.setAttribute('name', 'A');

        number_1.innerHTML = 'B';
        number_1.setAttribute('name', 'B');


        number_2.innerHTML = 'C';
        number_2.setAttribute('name', 'C');

        number_3.innerHTML = 'D';
        number_3.setAttribute('name', 'D');

        number_4.innerHTML = 'E';
        number_4.setAttribute('name', 'E');

        number_5.innerHTML = 'F';
        number_5.setAttribute('name', 'F');

        number_6.innerHTML = 'G';
        number_6.setAttribute('name', 'G');

        number_7.innerHTML = 'H';
        number_7.setAttribute('name', 'H');

        number_8.innerHTML = 'I';
        number_8.setAttribute('name', 'I');

        number_9.innerHTML = 'J';
        number_9.setAttribute('name', 'J');
    }

    else {
        number_0.innerHTML = '0';
        number_0.setAttribute('name', '0');

        number_1.innerHTML = '1';
        number_1.setAttribute('name', '1');

        number_2.innerHTML = '2';
        number_2.setAttribute('name', '2');

        number_3.innerHTML = '3';
        number_3.setAttribute('name', '3');

        number_4.innerHTML = '4';
        number_4.setAttribute('name', '4');

        number_5.innerHTML = '5';
        number_5.setAttribute('name', '5');

        number_6.innerHTML = '6';
        number_6.setAttribute('name', '6');

        number_7.innerHTML = '7';
        number_7.setAttribute('name', '7');

        number_8.innerHTML = '8';
        number_8.setAttribute('name', '8');

        number_9.innerHTML = '9';
        number_9.setAttribute('name', '9');
    }

    togglerCalc++;
}

function addToVisor(particle) {
    document.getElementById('calc_visor_expressions').innerHTML += particle;
    console.log(particle);
}

function cleanVisor() {
    document.getElementById('calc_visor_expressions').innerHTML = '';
    document.getElementById('calc_visor_result').innerHTML = '';
}

function removeLastParticle() {
    let expression = document.getElementById('calc_visor_expressions').innerHTML;
    cleanExpression = expression.substring(0, (expression.length - 1));
    document.getElementById('calc_visor_expressions').innerHTML = cleanExpression;
}