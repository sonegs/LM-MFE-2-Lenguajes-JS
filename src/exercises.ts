// EJERCICIO 1 **********
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
console.log('\n\n****** EXERCISE 1 *****\n\n');

const namesArray = ['Braulio', 'Antonio', 'Miguel', 'Santi'];
const head = ( [firstName, ...moreNames]: string[] ) => firstName; // Destructuring
console.log(namesArray);
console.log(`Extrae el valor de la primera posición del Array: ${head(namesArray)}`);

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([first, ...myArray]: string[]) => myArray; // Rest Operator
console.log('Devuelve todo el array excepto el primer elemento:');
console.log(tail(namesArray));

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (myArray) => myArray.slice(0, 3); // Prototype Method Example
console.log('Devuelve todo el array excepto el último elemento:');
console.log(init(namesArray));

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (myArray) => [...myArray].pop(); // Spread + Pop
console.log(`Devuelve el valor de la última posición del Array: ${last(namesArray)}`);

// EJERCICIO 2 **********
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const countries = ['Spain', 'Germany', 'France', 'United Kingdom'];

console.log('\n\n****** EXERCISE 2: BASIC VERSION *****\n\n');
const concatEasy = (a, b) => { return [...a, ...b]; };
console.log(concatEasy(namesArray, countries));

// Optional version
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concat = (...myArguments) => myArguments.reduce((previous, current) => previous.concat(current));

console.log('\n\n****** EXERCISE 2: OPTIONAL VERSION *****\n\n');

console.log(concat(namesArray, countries, countries, namesArray));

// EJERCICIO 3
// CLONE
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source
console.log('\n\n****** EXERCISE 3 *****\n\n');

const clone = (source, other?) => ( other ? {...other, ...source} : {...source} );
    
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log('Primera parte del ejercicio: ');
console.log(clone(a));

// MERGE
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const merge = (source, target) => (clone(source, target));

console.log('Segunda parte: ');
console.log(merge(a, b));

// EJERCICIO 4
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
console.log('\n\n****** EXERCISE 4 *****\n\n');

const checkBook = (books:BookInterface[], titleToSearch: string): boolean[] => books.map(book => (book.isRead && titleToSearch == book.title) ? true : false );
const isBookRead = (books:BookInterface[], titleToSearch: string): boolean => checkBook(books, titleToSearch).reduce((previous, current) => current ? current : previous );  

interface BookInterface {
    title: String,
    isRead: Boolean
}

const books: BookInterface[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// EJERCICIO 5
/*El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true y debera reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje */
console.log('\n\n****** EXERCISE 5 *****\n\n');


class SlothMachine {
    count: number;
    first: boolean;
    second: boolean;
    third: boolean;

    constructor(){
        this.count = 0;
    }

    play(){
        this.first = Math.random() < 0.5;
        this.second = Math.random() < 0.5;
        this.third = Math.random() < 0.5;
        if (this.first && this.second && this.third) { 
            console.log(`"Congratulations!!!. You won ${this.count} coins!!`); 
            this.count = 0; 
        } else { 
            console.log('Good luck next time!!');
            this.count++;
        }
        
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();