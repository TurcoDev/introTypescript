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

const arreglo: any[] = [];
const arreglo2 = Array(3);

// console.log(typeof arreglo);

const miFuncion = (a: number, b: number) => {
  return a + b;
}

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

const noSeQueEs: any = 'Hola'; // any deberia evitarse su uso

// definicion implicita
let lastName = "Perez";

// definicion explicita
let firstName: string;
firstName = "Dylan";
const json = JSON.parse('{"numero": 55}');
// console.log(typeof json);
// console.log(json);

const arreglo3: readonly number[] = [2,8,9]; 
// console.log(typeof arreglo3);
// arreglo3.push(10); // no se puede agregar porque es readonly

// Ejemplo de tuplas
const coord: [x: number, y: number] = [55.2, 41.3];

// similitud useState con tuplas
const myUseState: [valor: number, funcion: Function] = [45, function() { }]

// ejemplo de enums
enum TiposDatos {
  number = 3,
  string,
  boolean,
  null
}

// console.log(TiposDatos.boolean);

// type

type Direccion = {
  calle: string,
  numero: number
}

type Persona = {
  nombre: string,
  edad: number,
  direccion: Direccion
}

const buenEmpleado: Persona = {
  nombre: 'Juan',
  edad: 30,
  direccion: {
    calle: 'Calle 1',
    numero: 123
  }
}

// interfaces

interface PersonaInterface {
  nombre: string,
  edad: number,
  direccion: Direccion
}

interface PersonaAltura extends PersonaInterface {
  altura: number
}

const buenEmpleado2: PersonaAltura = {
  nombre: 'Pedro',
  edad: 45,
  direccion: {
    calle: 'Calle 2',
    numero: 456
  },
  altura: 1.75
}

// Uniones

type Documento = number | string;

const documento: Documento = "123";

// Funciones

function setPersona(nombre: string, edad: number, calle: string, numero: number): Persona {
    return {
      nombre,
      edad,
      direccion: {
        calle,
        numero
      }
    }
}

// Casting

let x: unknown = 123;
// let num: number = Number(x);
// console.log(x.length); // error x no posee la propiedad length
// console.log( ( x as string ).length);
// console.log( (<string> x ).length);


// Clases

interface Habitacion {
  superficie: number,
  placard: boolean
}


class Casa implements Habitacion {
  private tamanio: number;
  private puertas: number;
  superficie: number;
  placard: boolean;


  constructor(tamanio1: number, puertas1: number, superficie1: number, placard1: boolean) {
    this.tamanio = tamanio1;
    this.puertas = puertas1;
    this.superficie = superficie1;
    this.placard = placard1;
  }

  public getDatosCasa(): string {
    return `Tamaño: ${this.tamanio}, Puertas: ${this.puertas} superficie habitacion: ${this.superficie}`;
  }

  private formulasuperEspecial(tamanio1: number): number {
    return this.tamanio + tamanio1 * 2;
  }

  public setTamanio(tamanio: number): void {
    this.tamanio = this.formulasuperEspecial(tamanio);
    // this.tamanio = tamanio;
  }
}


const casa1 = new Casa(50, 3, 42.5, true);
console.log(casa1.getDatosCasa())
// casa1.tamanio = formulasuperEspecial();
// const persona4 = new PersonaInterface()
