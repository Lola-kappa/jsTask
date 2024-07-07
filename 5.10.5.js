const user_age = +prompt('Введите ваш возраст');
const user_sum = +prompt('Введите сумму желаемого кредита');
let sum = user_sum % 1000
if (user_age >= 18 && user_age <= 21 && sum == 0 && user_sum <= 50000) {
    alert(`Мы можем вам выдать:${user_sum} `);
} else if (user_age > 0 && user_age < 18) {
    alert(`Вы не получите кредит, вам нет 18 лет`);
} else if (user_age >= 18 && sum != 0) {
    alert('Введите сумму кратную 1000');
} else if (user_age >= 35 && user_age <= 65 && sum == 0 && user_sum <= 1000000) {
    alert(`Мы можем вам выдать:${user_sum}`);
} else if (user_age >= 21 && user_age <= 35 && sum == 0 && user_sum <= 400000) {
    alert(`Мы можем вам выдать:${user_sum}`);
} else if (user_age >= 18 && user_age <= 21 && sum == 0 && user_sum > 50000) {
    alert(`Мы можем вам выдать максимум 50000`);
} else if (user_age >= 35 && user_age <= 65 && sum == 0 && user_sum > 1000000) {
    alert(`Мы можем вам выдать максимум 1000000`);
} else if (user_age >= 21 && user_age <= 35 && sum == 0 && user_sum > 400000) {
    alert(`Мы можем вам выдать максимум 400000`);
} else if (user_age == "" && user_sum == "") {
    alert(`Всего доброго, кредит вам не нужен`)
}