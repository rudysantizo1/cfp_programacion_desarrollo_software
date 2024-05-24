let fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci[i]);
}