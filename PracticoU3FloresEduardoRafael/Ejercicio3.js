
// Función definida de forma estandar
function totalAlumnos(varones,mujeres) {
    console.log('Cantidad de varones: ' + varones);
    console.log('Cantidad de mujeres: ' + mujeres);
    console.log('Total de alumnos: ' + (varones + mujeres));
}
totalAlumnos(12,16);

// Función con retorno
function totalAlumnos() {
    let varones = 12;
    let mujeres = 16;
    return varones + mujeres;
}
totalAlumnos();

// Función anónima

let total = function(varones,mujeres) {
    return (varones + mujeres);
}
console.log(total(12,16));

// Función flecha

let suma = (varo,muj) => varo+muj;

console.log(suma(12,16));

// Función de Orden Superior

function calculaTotalAlumnos(varo,muj,operacion) {
    return operacion(varo,muj);
}

let totalAlum = calculaTotalAlumnos(12,16,(varo,muj) => varo + muj);
console.log(totalAlum);

// Función como método

let curso = {
    nombre: "Programacion Web",
    cantMujeres: 16,
    cantVarones: 12,

    calculaTotalAlumnos: function() {
        total = this.cantMujeres + this.cantVarones;
        console.log('Total de alumnos en ' + this.nombre, ' : ' + total);
    }
};

curso.calculaTotalAlumnos();