let num = [5, 7, 3, 4, 1, 2, 6];
num.push(0);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(3);
if (pos == -1) {
  console.log(`O valor nao foi enontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
