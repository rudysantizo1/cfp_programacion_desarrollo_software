function divisibilidad(num){
    if(num%3 == 0 && num%5 == 0){
        return 'Divisible por tres y cinco';
    }

    else if(num%3 == 0){
        return 'Divisibilidad por tres';
    }

    else if(num%5 == 0){
        return 'Divisibilidad por cinco';
    }

    else{
        return 'No es divisible por cinco o tres';
    }
}


console.log(divisibilidad(15));