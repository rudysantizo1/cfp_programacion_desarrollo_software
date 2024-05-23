function promedio(notas) {
    total = 0;
    for(let i of notas){
        total+=i;
        console.log(i);
    }
    return total/3;
}

console.log("El promedio de las notas es " + promedio([100,100,90]));