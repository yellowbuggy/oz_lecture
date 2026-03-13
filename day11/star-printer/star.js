const STAR = "*";

// 입력 함수
const getPromptInput = () => {
    const MAXSTAR = 10;
    const MINSTAR = 1;

    let input;
    let isNotValid = true;

    while (isNotValid) {
        let inputStr = prompt("Enter the number of stars (1-10):");
        input = Number(inputStr);
        if(isNaN(input) || input < MINSTAR || input > MAXSTAR) {
            console.log('Invalid input! Enter a number between 1 and 10.');
            continue;
        }
        isNotValid = false;
    }
    return input;
}

// 별 가로로 찍기 함수
function printStar(count=1) {
    var stars = "";
    for (var i = 1; i <= count; i ++) {
        stars += STAR;
    }
    console.log(stars);
}

// 역순 별찍기 함수
const printReverseStars = function(count=1) {
    let stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*".repeat(count - i);
        stars += "\n";
    }
    console.log(stars);
}

// 정사각형 별찍기 함수
const printSquare = (count=1) => {
    let stars = "";
    for (i = 0; i < count; i++) {
        stars += "*".repeat(count);
        stars += "\n";
    }
    console.log(stars);
}

// 여러개 입력값
const printMultipleStars = function(...counts) {
    for (let count of counts) {
        let stars = "*".repeat(count);
        console.log(`Stars for count ${count}: ${stars}`)
    }
}

// 인풋 및 콘솔
const input = getPromptInput();

console.log("1. 가로로 별찍기");
printStar(input);
console.log("(기본값)")
printStar();

console.log("2. 역순으로 별찍기");
printReverseStars(input);
console.log("(기본값)")
printReverseStars();

console.log("3. 사각형으로 별찍기");
printSquare(input);
console.log("(기본값)")
printSquare();

console.log("4. 여러 숫자");
printMultipleStars(1, 2, 3, 4, 5, 20);
// prompt()를 여러개 받는 것은 ...