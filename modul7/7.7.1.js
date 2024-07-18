const person = {
    name: 'Лола ',
    age: '24'
}

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age} `)
}
printInfo.call(person)