const userName = prompt('Введите свое имя');
const userYear = +prompt('Введите год своего рождения');
let ageUser = 2024 - userYear;
let result = ageUser % 10;
if (result == 1) {
    alert(`${userName}:${ageUser} год`);
} else if (result >= 2 && result <= 4) {
    alert(`${userName}:${ageUser} года`);
} else if (result >= 5 && result <= 9 || result == 0) {
    alert(`${userName}:${ageUser} лет`);
}