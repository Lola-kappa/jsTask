const oneFunction = (n) => {
    if (n === 0) {
        console.log("Операция завершена")
    } else {
        oneFunction(n - 1);
    }
}