const loadBtn = document.querySelector(".load-btn");
const clearBtn = document.querySelector(".clear-btn");
const wrap = document.querySelector(".wrap");

let data;
fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=120")
    .then((res) => res.json())
    .then((res) => (data = res));
loadBtn.addEventListener("click", () => {
    for (let i = 0; i < data.length; i++) {
        let elem = `<img src=${data[i].url}</img>`;
        wrap.innerHTML += elem;
    }
});
const cleanData = () => {
    wrap.innerHTML = "";
};

clearBtn.addEventListener("click", cleanData);