function ascendente(num){
    if (num == 10){
        return;
    }

    else{
        console.log(num+1);
        ascendente(num+1);
    }
}

ascendente(0);
