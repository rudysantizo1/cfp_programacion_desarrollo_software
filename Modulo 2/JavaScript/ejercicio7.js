function factura(precio) {
    descuneto = (precio*10)/100
    return `El precio original: ${precio}\n
            Descuento de: ${descuneto}\n
            Precio final: ${precio - descuneto} `
}


console.log(factura(100));


