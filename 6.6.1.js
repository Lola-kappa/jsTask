let user_polindrom;
let polindrom = [];
let copy_polindrom = [];
let check = true;

user_polindrom = prompt('Введите слово, чтобы проверить является ли оно полиндромом:');
let lents = user_polindrom.length - 1;

for (let i = 0; i <= lents; i++) {
    polindrom[i] = user_polindrom[i];
}

for (let i = lents; i >= 0; i--) {
    copy_polindrom[lents - i] = polindrom[i];
}

for (let i = 0; i < lents; i++) {
    if (copy_polindrom[i] !== polindrom[i]) check = false;
}

if (check) {
    alert(`Слово полиндром!!!`);
} else {
    alert(`Слово не полиндром!`);
}