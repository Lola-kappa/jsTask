let polindrom = [];
let copyPolindrom = [];

const userPolindrom = prompt('Введите слово, чтобы проверить является ли оно полиндромом:');
let lents = userPolindrom.length - 1;

for (let i = 0; i <= lents; i++) {
    polindrom[i] = userPolindrom[i];
}

for (let i = lents; i >= 0; i--) {
    copyPolindrom[lents - i] = polindrom[i]
    return 'Слово полиндром'

}

for (let i = 0; i < lents; i++) {
    if (copyPolindrom[i] !== polindrom[i])
        return 'Слово не полиндром!'
}