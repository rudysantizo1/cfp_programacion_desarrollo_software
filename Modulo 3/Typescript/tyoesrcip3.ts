interface Animal{
    nombre:string;
    sonido:() => void;
};

interface Perro extends Animal{

};

const elPerro:Perro = {
    nombre: "Max",
    sonido: ()=>'Woof',
};

console.log(`El perro ${elPerro.nombre} hace ${elPerro.sonido()}`);

/*
const elPerro = {
    nombre: "Max",
    sonido: () => 'Woof',
};
console.log(`El perro ${elPerro.nombre} hace ${elPerro.sonido()}`);


*/

// class Animal{
//     public nombre:String;
//     public hacerSonido:String;
    
//     constructor(nombre:String, hacerSonido:String){
//         this.nombre = nombre;
//         this.hacerSonido = hacerSonido;
//     }

//     sonido(){
//         return `el nombre ${this.nombre}
//         y hace: ¡¡¡${this.hacerSonido}!!!!`
//     }
// }

// class Perro extends Animal{
//     constructor(nombre:String){
//         super(nombre, "Woof");
//     }

    
// }


// const perro1 = new Perro('Pedro');

// console.log(perro1.sonido());



/*

    class Animal {
    constructor(nombre, hacerSonido) {
        this.nombre = nombre;
        this.hacerSonido = hacerSonido;
    }
    sonido() {
        return `el nombre ${this.nombre}
        y hace: ¡¡¡${this.hacerSonido}!!!!`;
    }
}
class Perro extends Animal {
    constructor(nombre) {
        super(nombre, "Woof");
    }
}
const perro1 = new Perro('Pedro');
console.log(perro1.sonido());

*/