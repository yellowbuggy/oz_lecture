const getPromptInput = () => {
    let input;
    let isNotValid = true;

    while (isNotValid) {
        let inputObj = prompt().split(" ");
        for (i of inputObj) {
            console.log(i)
        }
    }
} 
getPromptInput();

// const STAR = "*";

// // 입력 함수 (maxstar, minstar, else-break 추가)
// const getPromptInput = () => {
//     const MAXSTAR = 10;
//     const MINSTAR = 1;

//     let input;
//     let isNotValid = true;

//     while (isNotValid) {
//         let inputStr = prompt("Enter the number of stars (1-10):");
//         input = Number(inputStr);
//         if(isNaN(input) || input < MINSTAR || input > MAXSTAR) {
//             console.log('Invalid input! Enter a number between 1 and 10.');
//             continue;
//         }
//         else {
//             break;
//         }
//     }
//     return input;
// }
