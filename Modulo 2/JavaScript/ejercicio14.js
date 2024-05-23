function minimo(a,b,c) {
    if(a==b && a==c){
        console.log("Todos son iguales");
    }

    else{

        if(a>b && a>c){
            console.log(a);
        }

        else if(b>c && b>a){
            console.log(b);
        }

        else if(c>a && c>b){
            console.log(c);
        }

        else{
            console.log("Dos numeros son iguales");
        }

    }
}

minimo(1,3,5)