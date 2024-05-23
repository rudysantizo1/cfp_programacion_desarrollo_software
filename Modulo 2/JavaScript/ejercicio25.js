function permutacion(contraseña, permuta, contraseñaAdivinar){

    if(permuta == null){
        console.log("sadas");
        return;
    }
    if(permuta.length == 0){
        if(contraseña == contraseñaAdivinar){
            console.log("contraseña adivinada");
            return 0;
        }
    }

    for (let i = 0; i < permuta.length; i++) {
        
        let nuevoContraseña = contraseña + permuta[i];
        let nuevoPermuta = permuta.substring(0,i) + permuta.substring(i+1);

        permutacion(nuevoContraseña, nuevoPermuta, contraseñaAdivinar);
        
        return;   
    }
}

let contraseñaAdivinar = "contraseña";
let contraseña= "cotñaenrsa"

permutacion("", contraseña, contraseñaAdivinar);




