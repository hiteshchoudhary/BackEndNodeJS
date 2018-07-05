
let getMyGrade = function(currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercent >= 90) {
        myGrade = 'A'
    } else if (myPercent >= 80) {
        myGrade = 'B'
    } else if (myPercent >= 70) {
        myGrade = 'C'
    } else if (myPercent >= 60) {
        myGrade = 'D'
    } else {
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and percentage is ${myPercent}`

}

let yourResult = getMyGrade(92, 150)
console.log(yourResult);
