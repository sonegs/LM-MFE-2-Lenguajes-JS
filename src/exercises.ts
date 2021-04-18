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
        this.count++;
        if (this.first && this.second && this.third) { 
            console.log(`"Congratulations!!!. You won ${this.count} coins!!`); 
            this.count = 0; 
        } else { 
            console.log('Good luck next time!!');
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

console.log('\n\n****** EXTRA EXERCISES *****\n\n');

// Califications Summary
// Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas) y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.

// Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre, nota más alta y media de notas (StudentSummary).

// No se permite el uso de clases. En caso de usar funciones auxiliares típalas. Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones a tres números.
console.log('\n\n****** CALIFICATIONS SUMMARY *****\n\n');

interface Students {
    name: String,
    califications: number[]
}

const students: Students[] = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
  ];
  
  const summarizeClassRoom = (studentList: Students[]) => {

    interface StudentsResults {
        name: String,
        highestCalification: number;
        averageCalification: number;
    }

    const studentsResult: StudentsResults[] = [];

    studentList.map(student => {

        // Student name
        const name = student.name;

        //Highest Calification
        const highestCalification: number = Math.max(...student.califications);

        // Average Calitifation
        const sum: number = student.califications.reduce((previous, current) => current += previous);
        const result: number = sum / student.califications.length;
        const averageCalification:number = parseFloat(result.toPrecision(3));

        // Add the final student object into the array studentResults
        studentsResult.push({name, highestCalification, averageCalification});
    });

    return studentsResult;
  };
  
  console.log(summarizeClassRoom(students));

//   Curry Setter
// En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario. Crea una función set que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad del objeto con el valor pasado como argumento.

// El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.

// Opcional
// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente. Es decir, modifica la función set para poder crear setName, setSurname y setAge que reciban sólo el objeto y el valor y sepan qué propiedad actualizar.

// TypeScript: Además, si quieres, puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.
console.log('\n\n****** CURRY SETTER *****\n\n');

const changeName = (user: Users, newName:string) => {
    return {
        ...user,
        name: newName
    }
}
const changeSurname = (user: Users, newSurname:string) => {
    return {
        ...user,
        surname: newSurname
    }
}
const changeAge = (user: Users, newAge:number) => {
    return {
        ...user,
        age: newAge
    }
}

const set = changeValue => (...args) => changeValue(...args);

const setName = set(changeName);
const setSurname = set(changeSurname);
const setAge = set(changeAge);

interface Users {
    name: string;
    surname: string;
    age: number;
}

const julia: Users = { name: "Julia", surname: "Álvarez", age: 19 };

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia === setName(julia,"Ana")); // false