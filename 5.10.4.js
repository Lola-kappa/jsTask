const user_name = prompt('Введите свое имя');
const user_year = +prompt('Введите год своего рождения');
let age_user = 2024 - user_year;
let result = age_user % 10;
if (result == 1) {
    alert(`${user_name}:${age_user} год`);
} else if (result >= 2 && result <= 4) {
    alert(`${user_name}:${age_user} года`);
} else if (result >= 5 && result <= 9 || result == 0) {
    alert(`${user_name}:${age_user} лет`);
}