let num = 4;
let str = "";

for (let i = 0; i < 3; i++) {
    for (let j = num - 3; j < num; j++) {
        if (j % 2 == 0) {
            str += "0 ";
        } else {
            str += "x ";
        }
    }
    console.log(str);
    num += 3;
    str = ""
}