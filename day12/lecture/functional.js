// 함수형 프로그래밍 (객체지향프로그래밍의 일환)
console.log("functional");

let numbers = [1, 2, 3];

// Array.prototype.map() (1대1 함수)
let doubled = numbers.map(function (num) {
  return num * 2;
})
console.log(doubled); [2, 4, 6]

// Array.prototype.filter (부분집합)
// 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
let numbers2 = [1, 2, 3, 4, 5];

const filtered = numbers2.filter(function (num) {
  return num % 2 === 0;
});
const filteredArrow = numbers2.filter((num) => num % 2 === 0);
console.log(filtered);
console.log(filteredArrow);

// Array.prototype.reduce()
// 메서드는 배열의 각 요소에 대해 주어진 reduce 흠수를 실행하여 단일 출력값을 반환한다.
let numbers3 = [1, 2, 3, 4, 5];

const reduced = numbers3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
const reducedArrow = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reduced);
console.log(reducedArrow);
