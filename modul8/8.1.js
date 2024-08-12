console.log("Начало кода");

setTimeout(function() {
    console.log("Таймаут 1");
    Promise.resolve().then(function() {
        console.log("Микрозадача 1");
    });
}, 0);

setTimeout(function() {
    console.log("Таймаут 2");
    Promise.resolve()
        .then(() => console.log("Микрозадача 1"))
        .then(() => console.log("Микрозадача 2"));
}, 0);

Promise.resolve().then(function() {
    console.log("Микрозадача 1");
});

console.log("Конец кода");