const user_name = prompt('Введите свое имя');
const user_year = +prompt('Введите год своего рождения');
let user_age = 2024 - user_year;
if (typeof user_name === "string" & typeof user_year === "number") {
    alert(` ${user_name}: ${user_age}`);
} else {
    alert('Вы ввели имя не символами или год не цифрами');
}