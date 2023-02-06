let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

/*  1.1 Verifica daca numele “Daniel” se afla pe lista */ 

stringName = "Daniel"
const isIncluded = badKids.includes(stringName);

console.log(isIncluded);

if (isIncluded) {
    console.log("Numele 'Daniel' se afla pe lista");
} else
    console.log("Numele 'Daniel' nu se afla pe lista");

/*1.2 Dacă numele “Daniel” se afla pe lista, modifica string-ul, 
astfel incat in locul lui “Daniel” să fie “Gigel” */

replacedStringName = "Gigel";

if (isIncluded) {
    const NewBadKids = badKids.replace(stringName, replacedStringName);
    console.log(NewBadKids)
}

/* Fie urmatorul string:
Sa se calculeze media aritmetica a notelor */

const testGrades = "9.80/6.85/9.10/7.80/8.20";

let testGradesArray = testGrades.split("/").map(Number);
console.log(testGradesArray);


function media(testGradesArray) {
    console.log("array", testGradesArray);

    const sum = testGradesArray.reduce((accumulator, nota) => accumulator + nota, 0);
    console.log(sum);
    const medie = sum / testGradesArray.length;
    return medie;
}
console.log(media(testGradesArray));


/* 3. Fie urmatorul obiect */

const props = {
    name: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
}

/* 3.1 Destructureaza din obiect urmatoarele proprietati: name, price, currency */

const { name, price, currency } = props;


/* 3.2 Folosind proprietatile destructurate, afiseaza un mesaj in forma 
“Produsul {name} are pretul {price}” */

const nume = props.name;
const pret = props.price;
const moneda = props.currency;
console.log(`Produsul ${nume}, are pretul ${pret} ${moneda}`);

/* 4.Fie urmatorul obiect
Creeaza un obiect nou, care sa contina proprietatile obiectelor props si aditionalProps */

const additionalProps = {
    isAvailable: true
}
const obiectNou = { ...props, ...additionalProps };
console.log(obiectNou);
//const obiectNou = (props, additionalProps);

/* 5. Sa se scrie un regex pentru a valida daca un string este un CNP valid.
 Un CNP este valid daca respecta urmatoarele reguli: 

Formatul este SAALLZZJJNNNC, unde 
S reprezinta o valoare intre 1 si 8
AA reprezinta o valoare intre 00 si 99
LL reprezinta o luna valida, valoare intre 01 si 12
ZZ reprezinta ultimele dou cifre ale anului, valoare intre 00 si 99
JJ reprezinta codul judetului, valoare intre 01 si 52
NNN reprezinta orice numar intre 001 si 999
C reprezinta orice cifra intre 0 si 9 */

const cnpValid = "2971122459906";
const cnpInvalid = "9971122450006";
const buletinReg = /^[1-8]([0-9]{2})(0[1-9]|1[0-2])([0-9]{2})(0[1-9]|[1-4][0-9]|5[0-2])([0-9]{3})([0-9])$/gm;

function checkMatch(buletinTest) {
    if (buletinReg.test(buletinTest)) {
        console.log(`Stringul ${buletinTest} este valid`);
    } else {
        console.log(`Stringul ${buletinTest} este invalid`);
    }
}
checkMatch(cnpValid);
checkMatch(cnpInvalid);

/* Cerinte optionale:
 1. Sa se scrie o functie cu un numar nedeterminat de parametri. 
 Primul parametru va reprezenta o descriere a operatiei(un string),
 care va fi afisat, iar restul de parametrii vor fi numere reale. 
 Sa se inmulteasca aceste numere si sa se afiseze descrierea */

function multiply(multiplier, ...elemente) {

    let res = 1;
    for (const elem of elemente) {
        res *= elem;
    }
    return console.log(multiplier + ":", res);
}

multiply("Inmultire", 1, 2, 3, 4);

/* 2.Fie urmatorul array
Folosind spread operator, sa se afiseze cea mai mica valoare din array */

const values = [-1, 100, -500, 2, 3, 4, 5];
const min = Math.min(...values);
console.log("Cea mai mica valoare din array este: ", min);
