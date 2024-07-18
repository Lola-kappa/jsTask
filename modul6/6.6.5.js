const keyNames = ['some', 'arr', 'dom', 'tom'];
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key of keyNames) {
    arrValues.push(obj[key]);
}
console.log(arrValues);