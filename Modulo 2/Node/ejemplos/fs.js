// const fs = require('node:fs');

// let data = fs.readFileSync('texto.txt','utf-8');
// let stats = fs.statSync('texto.txt');
// // console.log(stats.isDirectory());
// // console.log(stats.isFile());
// // console.log(stats.size);

// let data2 = fs.readFile('texto.txt','utf-8', 
//     (err, data) =>{
//         if(err) {
//             console.error('Este es el error 11111 ${err}');
//         }

//         return
//     }

// )


// const data = fs.readFile('text.txt','utf-8');
// const data2 = fs.readFileSync('text.txt','utf-8 ');
// const data3 = fs.readFileSync('text.txt','utf-8');

const promises = require('node:fs/promises')
promises.readdir('C:/Users/rudysantizo/Desktop/Programacion_cfp/Modulo 2/Node/ejemplos')
    .then((files) =>{
        files.foreach((file) => {
            console.log(file);
        });
    }).catch((err) =>{
        if(err){
            console.error(`Error reading direcotry: ${err}`);
            return;
        }
    })

