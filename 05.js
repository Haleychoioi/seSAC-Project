// 1.
let arr = [];
for (i = 1; i <= 100; i++) {
  arr.push(i);
}

let sum1 = 0;
for (i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.log(sum1);

let sum2 = 0;
for (const num of arr) {
  sum2 += num;
}
console.log(sum2);

let sum3 = 0;
arr.forEach((num) => {
  sum3 += num;
});
console.log(sum3);

// 2.
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff = new Set([...fruits1, ...fruits2]);
console.log(same);
console.log(diff);

// 3.
let day = new Date().getDay();
console.log(day === 0 || day === 6 ? "주말" : "평일");

let random = Math.floor(Math.random() * 11);
console.log(random);
