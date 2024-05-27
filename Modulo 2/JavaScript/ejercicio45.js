let caracteres = ['a', 'b', 'c', 'd', 'e', 'f','g']
let caracterBuscar = 'z';
let encontrado = false;

for(elemen of caracteres){
    if (caracterBuscar == elemen){
        encontrado = true;
    }
}

console.log(`¿el numero se encontro en el array?: ${encontrado}`);

