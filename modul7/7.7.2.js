function calculate(a, b, operator) {
    if (operator === "+") {

        return (a + b)
    } else if (operator === "-") {
        return (a - b)
    } else if (operator === "/") {
        return (a / b)
    } else if (operator === "*") {
        return (a * b)
    } else {
        return ("Данной операции нет")
    }
}
const arr = [1000, 7, "-"];
console.log(calculate.apply(null, arr));