class Automovil {
    constructor(rued,puert,col,vel) {
        this.ruedas = rued;
        this.puertas = puert;
        this.color = col;
        this.velocidad = vel;
    }

    aumentaVelocidad() {
        aumento = 20;
        this.velocidad += aumento;
        console.log('Se aumento la velocidad en ' + aumento + ' km/h, alcanzando una velocidad total de ' + this.velocidad + ' km/h');
    }

    detallaAuto() {
        console.log('El auto de ' + this.ruedas + ' ruedas, ' + this.puertas + ' puertas, y color ' + this.color + ' va a una velocidad de ' + this.velocidad + ' km/h');
    }

}

let unAuto = new Automovil(4,2,'Azul marino',200);
unAuto.detallaAuto();
unAuto.aumentaVelocidad();