const person = {
    firstName: "Лола"
};

function setFullName(newName) {
    this.fullName = newName;
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person.fullName)