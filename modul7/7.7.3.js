const oneUser = {
    name: 1,
    age: 15
};
const twoUser = {
    name: 2,
    age: 23

}
const threeUser = {
    name: 3,
    age: 18
}
const arr = [oneUser, twoUser, threeUser];
const filterAge = arr.filter((item) => {
    return item.age >= 18;
});
console.log(filterAge)