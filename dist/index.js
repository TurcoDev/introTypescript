"use strict";
const arreglo = [];
const arreglo2 = Array(3);
const miFuncion = (a, b) => {
    return a + b;
};
const noSeQueEs = 'Hola';
let lastName = "Perez";
let firstName;
firstName = "Dylan";
const json = JSON.parse('{"numero": 55}');
const arreglo3 = [2, 8, 9];
const coord = [55.2, 41.3];
const myUseState = [45, function () { }];
var TiposDatos;
(function (TiposDatos) {
    TiposDatos[TiposDatos["number"] = 3] = "number";
    TiposDatos[TiposDatos["string"] = 4] = "string";
    TiposDatos[TiposDatos["boolean"] = 5] = "boolean";
    TiposDatos[TiposDatos["null"] = 6] = "null";
})(TiposDatos || (TiposDatos = {}));
const buenEmpleado = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle 1',
        numero: 123
    }
};
const buenEmpleado2 = {
    nombre: 'Pedro',
    edad: 45,
    direccion: {
        calle: 'Calle 2',
        numero: 456
    },
    altura: 1.75
};
const documento = "123";
function setPersona(nombre, edad, calle, numero) {
    return {
        nombre,
        edad,
        direccion: {
            calle,
            numero
        }
    };
}
let x = 123;
class Casa {
    constructor(tamanio1, puertas1, superficie1, placard1) {
        this.tamanio = tamanio1;
        this.puertas = puertas1;
        this.superficie = superficie1;
        this.placard = placard1;
    }
    getDatosCasa() {
        return `Tamaño: ${this.tamanio}, Puertas: ${this.puertas} superficie habitacion: ${this.superficie}`;
    }
    formulasuperEspecial(tamanio1) {
        return this.tamanio + tamanio1 * 2;
    }
    setTamanio(tamanio) {
        this.tamanio = this.formulasuperEspecial(tamanio);
    }
}
const casa1 = new Casa(50, 3, 42.5, true);
console.log(casa1.getDatosCasa());
