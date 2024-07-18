const arr = [1, 2, 7, 4, 5, 2, 1];
const unikal = new Set(arr);
//console.log(unikal)
const newArr = Array.from(unikal);

const unikalNumbers = newArr.filter(() => {
    return newArr.sort();
})
console.log(unikalNumbers);