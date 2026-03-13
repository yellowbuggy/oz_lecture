// 0 부터 4 까지 콘솔찍는 코드
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("###############")

// 1 부터 5 까지 콘솔찍는 코드
for (let i = 1; i <= 5; i+=1) {
  console.log(i);
}
console.log("###############")

// 1 부터 10 까지 홀수만 찍는 코드
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}
console.log("###############")

// 중첩 반복문
for (let i = 0; i < 2; i++) {
  console.log(`i: ${i}`);
  for (let j = 0; j < 2; j++) {
    console.log(`j: ${j}`);
  }
}
console.log("###############")

// for문과 배열
let arr = ["banana", "apple", "orange"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  const fruit = arr[i];
  console.log(fruit);
}
console.log("###############")

// break
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) break;
}
console.log("###############")

// continue
for (let i = 0; i < 10; i++) {
  if (i === 0) continue;
  console.log(i);
}
console.log("###############")

// for in 배열
for (idx in arr) {
  let fruit = arr[idx];
  console.log(idx, arr[idx]);
  if (fruit === "banana") {
    console.log("monkey!!!!");
    continue;
  }
  if (fruit === 'orange') {
    break;
  }
  console.log("oz!!")
}
console.log("###############")

// for in 객체
let obj = {
  name: "철수",
  age: 20
}
for (let key in obj) {
  console.log(`key: ${key}`);
  console.log(`val: ${obj[key]}`)
}
console.log("###############")

// for of 배열
for (item of arr) {
  console.log(item);
}