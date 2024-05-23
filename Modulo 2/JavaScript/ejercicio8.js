function diasSegundos(dias) {
    dias *= 60 * 60
    return dias * 24;
}

console.log(`Los dias a segundos son: ${diasSegundos(3)}`);