function aplicaDescuento(precio) {
    const descuentoAplicado = precio -(precio *(10/100));

    if(precio>100){
        return descuentoAplicado;
    }

    else{
        return precio;
    }
}


console.log(`El precio final ${aplicaDescuento(120)}`);