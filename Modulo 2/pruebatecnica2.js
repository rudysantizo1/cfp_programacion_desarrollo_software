function longitudMaxSubcadena(cadena) {
    let diferencia = {0: -1};
    let cero = 0, uno = 0, maxLongitud = -1;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === '0') {
            cero++;
        } else {
            uno++;
        }

        let diff = cero - uno;

        if (diferencia.hasOwnProperty(diff)) {
            maxLongitud = Math.max(maxLongitud, i - diferencia[diff]);
        } else {
            diferencia[diff] = i;
        }

    }

    return maxLongitud;
}

let cadena = "0010001110";
console.log(longitudMaxSubcadena(cadena));


