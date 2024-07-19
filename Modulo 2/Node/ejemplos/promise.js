// const promises = require('node:fs/promises')

// promises.readFile('texto.txt' ,  'UTF-8')
//     .then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.error(`Error reading files: ${err}`);
// });

// Promise.all([
//     promises.readFile('texto.txt' ,  'UTF-8'),
//     promises.readFile('text.txt' ,  'UTF-8')
// ]).then(([file1,file2]) => {
//     console.log(file1);
//     console.log(file2);
// }).catch((err) =>{
//     console.error(`Error reading files: ${err}`)
// }) ;

const {readFile} = require('node:fs/promises')

// async function promesas() {
//   let data3 =  await readFile('muchotexto.txt', 'utf-8');
//   console.log(data3);
//   console.log('------------');

//   let data2 = await readFile('text.txt', 'utf-8');
//   console.log(data2);
//   console.log('***---------');

//   let data = await readFile('texto.txt', 'utf-8');
//   console.log(data);
//   console.log('----------**');

// }


async function promesas() { 
  try {
    console.log(await readFile('texto/muchotexto.txt', 'utf-8'));
    
  } catch (error) {
    
  }

}

promesas();
