const userName = prompt('Введите свое имя');
const userYear = +prompt('Введите год своего рождения');
let userAge = 2024 - userYear;
if (typeof userName === "string" & typeof userYear === "number") {
    alert(` ${userName}: ${userAge}`);
} else {
    alert('Вы ввели имя не символами или год не цифрами');
}