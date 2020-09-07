const one = () => {
    let arreglo = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];
    return arreglo.map(function (numero) {
        if (typeof numero == 'number') {
            numero = numero*4;
        }
        return numero;
    }).filter(function (numero) {
        return numero > 8;
    });
}
export default one