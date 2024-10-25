
function manejoArreglo() {
    let arreglo = [1, 2, 3, 4, 5, 6, 11, 23, 1, 989, 0, 1, 111, 645, 50, 45];


    // Devuelve el menor elemento del arreglo (inciso a)
    let min = arreglo[0];
    arreglo.forEach(elem => {
        if(elem < min){
            min = elem;
        }
    });
    console.log(min);

    // Devuelve suma de todos los elementos del arreglo (inciso b)
    let total = arreglo.reduce((tot,valor) => tot + valor, 0);
    console.log(total);

    // Devuelve arreglo con cada elemento el doble que en el original (inciso c)
    let arreDoble = arreglo.map(num => num * 2);
    console.log(arreDoble);

    // Devuelve arreglo con elementos mayores o iguales a 10 (inciso d)
    let mayores = arreglo.filter(num => num >= 10);
    console.log(mayores);

    // Devuelve el índice del primer elemento mayor a 10 (inciso e)

    let mayorA10 = (num) => num > 10;
    console.log(arreglo.findIndex(mayorA10));
}