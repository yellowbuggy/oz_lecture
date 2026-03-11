// 변수 선언
const myName = "황충찬";
var age = 28;
let isMale = true;
let job; // undefined
let project = null;
let big = 100n;
let potential = Infinity; // 부동소수점의 연장선.


// 문자열 출력
let introduction = 
`안녕하세요.
저의 이름은 ${myName} 입니다.
나이는 ${age}세 이고요, 제가 남자라는 것은 ${isMale} 입니다.
현재 직업은 ${job}이고요, 여태껏 해왔던 프로젝트는 ${project} 입니다.
하지만, 저의 잠재력은 어마어마(${big}. 아니, ${potential})합니다.`;

let closing = "잘~\t부탁드립니다!";

console.log(introduction + "\n" + closing);

// 배열
let hobby = ["reading", "gaming", "coding"];

console.log(`Hobbyies: ${hobby[0]}, ${hobby[1]}, ${hobby[2]}`);

// 객체 리터럴
let userInfo = {
  name: "John",
  age: 20,
  isStudent: true
};

  let IntroductionOfJohn = 
`Hi, my name is ${userInfo.name}.
I'm ${userInfo.age} years old.
I'm ${userInfo.isStudent}ly student. Trust me.`;

console.log(IntroductionOfJohn);

// typeof
console.log("############### typeof")
console.log("string: ", typeof myName);
console.log("number: ", typeof age);
console.log("boolean: ", typeof isMale);
console.log("undefined: ", typeof job);
console.log("null: ", typeof project);
console.log("bigInt: ", typeof big);
console.log("Infinity: ", typeof potential);
console.log("array: ", typeof hobby);
console.log("dictionary: ", typeof userInfo);

// null & undefined
console.log("############### ==")
let n = null;
let u; 

// 결과: all true 
console.log("n == null:", n == null);
console.log("n == undefined:", n == undefined);
console.log("u == null:", u == null);
console.log("u == undefined:", u == undefined);
console.log("null == undefined:", null == undefined);

console.log("############### ===")
console.log("n === null:", n === null);
console.log("n === undefined:", n === undefined);
console.log("u === null:", u === null);
console.log("u === undefined:", u === undefined);
console.log("null === undefined:", null === undefined);

console.log("############### NaN") // 부동소수점의 연장선
console.log("NaN == NaN:", NaN == NaN);
console.log("NaN === NaN:", NaN === NaN);
console.log("NaN === isNaN(NaN):", NaN === isNaN(NaN));
console.log("isNaN(NaN):", isNaN(NaN));

// 배열과 null, undefined
let list = ["가", 1, n, u];

console.log("############### list & null, undefined")
console.log(list);
console.log("null in list:", list[2]);
console.log("undefined in list:", list[3]);

// 객체 리터럴과 null, undefined
let dict = {
  null: 1,
  undefined: "나",
  nu: null,
  undef: undefined
};
console.log("############### object literal & null, undefined") // 변수 선언과 다르게 예약어 사용 가능. but 가독성이 좋지 않은 나쁜 코드임
console.log(dict);
console.log("dict.null:", dict.null);
console.log("dict.undefined:", dict.undefined);
console.log("dict.nu:", dict.nu);
console.log("dict.undef:", dict.undef);