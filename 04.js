// 1.
for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

// 2.
// let input = prompt('숫자를 입력해주세요.');
// input = Number(input);
// for (let i = 1; i <= input; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }

// 3.
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 4.
let sum = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);
