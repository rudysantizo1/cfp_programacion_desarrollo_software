interface Persona{
    nombre : String;
    edad : number;
};

function devolver(persona:Persona):String{
    return `Nombre: ${persona.nombre} 
        Edad: ${persona.edad}` 
}

const persona1: Persona = {
    nombre:"Rudy",
    edad:23
};


console.log(devolver(persona1))


/* 
function devolver(persona) {
    return `Nombre: ${persona.nombre} 
        Edad: ${persona.edad}`;
}
const persona1 = {
    nombre: "Rudy",
    edad: 23
};
console.log(devolver(persona1));


*/