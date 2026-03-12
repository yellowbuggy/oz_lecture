// 이항산술 연산자
let sum = 10 + 20;
console.log(sum); // 30

let sub = 20 - 10;
console.log(sub); // 10

let multi = 10 * 20;
console.log(multi); // 200

let remain = 10 % 3;
console.log(remain); // 1

let exp = 2 ** 3;
console.log(exp); // 8

// 단항산술 연산자
let increment = 10;
++ increment; // 전치연산: 더한 후 할당
increment ++; // 후치연산: 할당 후 더함
console.log(increment);
let decrement = 10;
-- decrement;
decrement --;
console.log(decrement);

// 단항 부정 연산자
var num = 10;
num = -num;
console.log(num); // -10

// 연산자 우선순위
var i = 3 + 4 * 5;
console.log(i); // 23
var i = (3 + 4) * 5;
console.log(i); // 35

// 복합 대입 연산자
let x = 10;
x += 5;
console.log(x); // x = x + 5
let y = 10;
y -= 5;
console.log(y); // y = y - 5
z = 10;
z *= 5;
console.log(z); // z = z * 5
let u = 10;
u /= 5;
console.log(u); // u = u / 5
let v = 10;
v %= 3;
console.log(v); // v = v % 3
let t = 10;
t **= 2;
console.log(t); // t = t ** 2

// 논리 연산자
let _true = true;
let _false = false;

// and 연산자
console.log('true && true', _true && _true);
console.log('true && false', _true && _false);
console.log('false && true', _false && _true);
console.log('false && false', _false && _false);

// or 연산자
console.log('true || true', _true || _true);
console.log('true || false', _true || _false);
console.log('false || true', _false || _true);
console.log('false || false', _false || _false);

// xor 연산자
console.log('true ^ true', _true ^ _true);
console.log('true ^ false', _true ^ _false);
console.log('false ^ true', _false ^ _true);
console.log('false ^ false', _false ^ _false);

// not(negation) 연산자
console.log('!true', !_true);
console.log('!false', !_false);

// 비교 연산자
const line = 180;
console.log('line < 170', line < 170);
console.log('line < 190', line < 190);
console.log('line >= 170', line >= 170);
console.log('line >= 190', line >= 190);

// 삼항 연산자
var score = 90;
let grade = (score >= 90) ? 'A+' : 'B';
console.log(grade);

// 조건문
var num = 10;
if (num % 2 === 0) {
  console.log("변수 num에 할당된 숫자는 짝수입니다.");
} else {
  console.log("변수 num에 할당된 숫자는 홀수입니다.");
};

// switch문
let food = "melon";
switch(food) {
  case "melon":
  case "apple":
    console.log("fruit");
    break;
  case "carrot":
    console.log("vegetablee");
    break;
  default:
    console.log("It's not fruits and vegetables");
    break;
}

// if문
var score = 85;
if (score >= 90 && score <= 100) {
  console.log("A++학점");
} else if (score >= 80) {
  console.log("A학점");
} else if (score >= 70) {
  console.log("B학점");
} else {
  console.log("학점없음");
}