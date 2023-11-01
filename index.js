/**
 * Tipos de datos en JS
 *
 * number
 * string
 * boolean
 * null
 * undefined
 * arrays???
 * Object
 * Function
 *
**/
// const persona1 = {
//   nombre: 'Juan',
//   edad: 30,
//   direccion: {
//     calle: 'Calle 1',
//     numero: 123
//   }
//   getDatos = function () {
//     return `${this.nombre} ${this.edad}`;
//   }
// }
// objeto.getDatos();
var arreglo = [];
var arreglo2 = Array(3);
// console.log(typeof arreglo);
var miFuncion = function (a, b) {
    return a + b;
};
// console.log(typeof miFuncion);
/**
* Tipos de datos en TS
*
* any
* unknown
* never
* array
* tuplas
* enums
**/
var noSeQueEs = 'Hola'; // any deberia evitarse su uso
// definicion implicita
var lastName = "Perez";
// definicion explicita
var firstName;
firstName = "Dylan";
var json = JSON.parse('{"numero": 55}');
// console.log(typeof json);
// console.log(json);
var arreglo3 = [2, 8, 9];
// console.log(typeof arreglo3);
// arreglo3.push(10); // no se puede agregar porque es readonly
// Ejemplo de tuplas
var coord = [55.2, 41.3];
// similitud useState con tuplas
var myUseState = [45, function () { }];
// ejemplo de enums
var TiposDatos;
(function (TiposDatos) {
    TiposDatos[TiposDatos["number"] = 3] = "number";
    TiposDatos[TiposDatos["string"] = 4] = "string";
    TiposDatos[TiposDatos["boolean"] = 5] = "boolean";
    TiposDatos[TiposDatos["null"] = 6] = "null";
})(TiposDatos || (TiposDatos = {}));
var buenEmpleado = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle 1',
        numero: 123
    }
};
var buenEmpleado2 = {
    nombre: 'Pedro',
    edad: 45,
    direccion: {
        calle: 'Calle 2',
        numero: 456
    },
    altura: 1.75
};
var documento = "123";
// Funciones
function setPersona(nombre, edad, calle, numero) {
    return {
        nombre: nombre,
        edad: edad,
        direccion: {
            calle: calle,
            numero: numero
        }
    };
}
// Casting
var x = 123;
var Casa = /** @class */ (function () {
    function Casa(tamanio1, puertas1, superficie1, placard1) {
        this.tamanio = tamanio1;
        this.puertas = puertas1;
        this.superficie = superficie1;
        this.placard = placard1;
    }
    Casa.prototype.getDatosCasa = function () {
        return "Tama\u00F1o: ".concat(this.tamanio, ", Puertas: ").concat(this.puertas, " superficie habitacion: ").concat(this.superficie);
    };
    Casa.prototype.formulasuperEspecial = function (tamanio1) {
        return this.tamanio + tamanio1 * 2;
    };
    Casa.prototype.setTamanio = function (tamanio) {
        this.tamanio = this.formulasuperEspecial(tamanio);
        // this.tamanio = tamanio;
    };
    return Casa;
}());
var casa1 = new Casa(50, 3, 42.5, true);
console.log(casa1.getDatosCasa());
// casa1.tamanio = formulasuperEspecial();
// const persona4 = new PersonaInterface()
