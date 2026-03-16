// String 객체
const pw = "1234";
console.log(pw);
console.log(pw.length); // 문자열의 길이: 문자열의 기본적인 속성 length

if (pw.length < 8) {
  console.log("비밀번호는 8자 이상이어야 합니다.");
}

// String.includes()
const email = "test!naver.com";
console.log(email.includes("@")); // false - 문자열의 기본적인 메서드 includes
if (!email.includes("@")) {
  console.log("이메일 형식이 올바르지 않습니다.");
}

// String.indexOf()
console.log(email[0]); // t
console.log(email[2]); // s
console.log(email[3]); // t
console.log(email.indexOf("naver")); // 5
console.log(email.indexOf("@")); // -1: 문자열 내에 @ 가 없음

if (email.indexOf("@") < 0) {
  console.log("이메일 형식이 올바르지 않습니다.");
}

// String.trim()
let userId = "  gildong1234  ";
let userId2 = "gildong1234";

console.log(userId === userId2); // false
console.log(userId.trim() === userId2); // true

// String.replace()
// String.replaceAll()
const needToDelDot = ".안녕하세요. 나는 태구와. 함께. 삽니다....";

console.log(needToDelDot.replace(".", ""));
console.log(needToDelDot.replaceAll(".", ""));
console.log(needToDelDot);

const emailTemplate = "이메일 형식이 올바르지 않습니다: {{{email}}}";
const outputMsg = emailTemplate.replace("{{{email}}}", email);
console.log(outputMsg)

// String은 그 외애도 많은 기능이 있으니, 필요할 때 찾아 쓰면 됨!!!

