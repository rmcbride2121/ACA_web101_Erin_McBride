let gma=0;
let gpa=0;

for (let inc = 0; inc < 24; inc++) {
    gma = gma + 1.5;
    gpa = gpa + 0.5;

    if (gma > 12) {
        gma -= 12;
    }

    if (gma == gpa) {
        console.log(gma, gpa);
    }
};