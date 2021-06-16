//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let age = prompt('Ingrese su edad');

if (age > 18) {
    console.log('Puede conducir');
} else {
    console.log('No puede conducir');
}

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/
let number = prompt('Ingrese una nota');

if (number <= 2) {
    alert('Su nota es muy defienciente');
} else if (number <= 4) {
    alert('Su nota es insuficiente');
} else if (number <= 6) {
    alert('Su nota es suficiente');
} else if (number == 7) {
    alert('Su nota es bien');
} else if (number <= 9) {
    alert('Su nota es notable');
} else if (number == 10) {
    alert('Su nota es sobresaliente');
} else {
    alert('Introuduce un numero valido')
}

//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let resultado = "";

do {
    const cadena = prompt("Introduce una cadena");

    if (resultado == "") {
        resultado = resultado + cadena;
    } else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
document.write(resultado);

//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let numero;
do {
    numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined && confirm("Desea seguir?"));
document.write(suma);

//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

do {
    const dni = Number(prompt('Ingrese un dni'));
    if (dni <= 99999999 && dni >= 0) {
        let division = dni % 23;
        switch (division) {
            case 0:
                letra = "T"
                break;
            case 1:
                letra = "R"
                break;
            case 2:
                letra = "W"
                break;
            case 3:
                letra = "A"
                break;
            case 4:
                letra = "G"
                break;
            case 5:
                letra = "M"
                break;
            case 6:
                letra = "Y"
                break;
            case 7:
                letra = "F"
                break;
            case 8:
                letra = "P"
                break;
            case 9:
                letra = "D"
                break;
            case 10:
                letra = "X"
                break;
            case 11:
                letra = "B"
                break;
            case 12:
                letra = "N"
                break;
            case 13:
                letra = "J"
                break;
            case 14:
                letra = "Z"
                break;
            case 15:
                letra = "S"
                break;
            case 16:
                letra = "Q"
                break;
            case 17:
                letra = "V"
                break;
            case 18:
                letra = "H"
                break;
            case 19:
                letra = "L"
                break;
            case 20:
                letra = "C"
                break;
            case 21:
                letra = "K"
                break;
            case 22:
                letra = "E"
                break;
            default:
                alert('Numero erroneo')
                break;
        }
        alert("Numero: " + dni + ", Letra: " + letra);
    } else {
        alert("No es un numero");

    }
} while (confirm("Desea seguir?"))

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….*/

for (let i = 1; i <= 30; i++) {
    for (let repeticion = 0; repeticion < i; repeticion++) {
        document.write(i);
    }
    document.write("<br>");
}

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

const numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        let rep, i;
        for (i = numrep; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    }
    else {
        alert("El número introducido no es válido");
    }
}
else {
    alert("No has introducido un número");
}

/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

1
12
123
1234
12345
123456
……*/

let numberRep = prompt("Introduce numero de repeticion");
let rep;
let i;
if (Number(numberRep) == numberRep) {
    if (numberRep > 0 && numberRep <= 50) {
        for (i = 0; i <= numberRep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    }
    else {
        alert("El número introducido no es válido");
    }
}
else {
    alert("No has introducido un número");
}

/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/

let f;
const j = 500;
const repetition = 0;
for (f = 1; f <= j; f++) {
    document.write(f);
    if (f % 4 == 0) {
        document.write(" (Multiplo de 4)");
    } else if (f % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (f % 5 == 0) {
        document.write("<hr>");
    }
}



/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math*/

let q, w;

const filas = Number(prompt("Introduce numero de filas"));
const colum = Number(prompt("Introduce numero de columnas"));
let res = filas * colum;

document.write("<table border>");

for (q = 0; q < filas; q++) {
    document.write("<tr>");
    for (w = 0; w < colum; w++) {
        document.write("<td>");
        document.write(res);
        res--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

const nombre1 = prompt("Nombre 1:");
const edad1 = Number(prompt("Edad 1:"));

const nombre2 = prompt("Nombre 2:");
const edad2 = Number(prompt("Edad 2:"));

const nombre3 = prompt("Nombre 3:");
const edad3 = Number(prompt("Edad 3:"));

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
} else if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
} else if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

/*12- Realiza un script que genere un número aleatorio entre 1 y 99

 Ejercicios con String*/

let num = Math.floor((Math.random() * 99) + 1);
document.write(num);

//13- Realiza un script que pida un texto y lo muestre en mayúsculas.

const texto = prompt("Introduce el texto");
document.write("TEXTO: " + texto.toUpperCase + ".");

/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;
let caracter;
let e;
for (e = 0; e < numchar; e++) {
    caracter = cadena.charAt(e);
    if (i == numchar - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}

/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

const cadenas = prompt("Introduce una cadena de texto:");
let numchars = cadenas.length;
cadenas = cadenas.toUpperCase();
let car;
let contador = 0;
let r;
for (r = 0; r < numchars; r++) {
    car = cadenas.charAt(r);
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let cadenaes = prompt("Introduce un Texto:");
let numchares = cadenaes.length;
let t;
let cars;
let salidas = "";
for (t = 0; t < numchares; t++) {
    cars = cadenaes.charAt(t);
    salidas = cars + salidas;
}
document.write(salidas);

/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let vocales = ["a", "e", "i", "o", "u"];
let textos = prompt("Introduce un texto");
let textomin = textos.toLowerCase();
let posicion = 0;
let parar = false;
for (let t = 0; t < textomin.length; t++) {
    for (let u = 0; u < vocales.length; u++) {
        if (vocales[u] == textomin.charAt(t)) {
            posicion = t;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);