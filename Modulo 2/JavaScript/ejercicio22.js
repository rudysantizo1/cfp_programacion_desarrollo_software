function descendente(num){
    if (num == 1){
        return;
    }

    else{
        console.log(num-1);
        descendente(num-1);
    }
}

descendente(11);
