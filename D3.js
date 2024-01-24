const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
let charactersNames = [];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let index = 0; index < starWarsCharacters.length; index++) {
  charactersNames.push(starWarsCharacters[index].name);
}
console.log(charactersNames);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
const femaleCharacters = [];
for (let index = 0; index < starWarsCharacters.length; index++) {
  starWarsCharacters[index].gender === "female"
    ? femaleCharacters.push(starWarsCharacters[index])
    : null;
}
console.log(femaleCharacters);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};
console.log(eyeColor);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (let index = 0; index < starWarsCharacters.length; index++) {
  switch (starWarsCharacters[index].eye_color) {
    case "blue":
      eyeColor.blue = starWarsCharacters[index].eye_color;
      break;
    case "yellow":
      eyeColor.yellow = starWarsCharacters[index].eye_color;
      break;
    case "brown":
      eyeColor.brown = starWarsCharacters[index].eye_color;
      break;
    case "red":
      eyeColor.red = starWarsCharacters[index].eye_color;
      break;
    case "blue-gray":
      eyeColor["blue-gray"] = starWarsCharacters[index].eye_color;
      break;

    default:
      break;
  }
}

console.log(eyeColor);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let crewMass = 0;
let index = 0;

while (index < starWarsCharacters.length) {
  crewMass += starWarsCharacters[index].mass;
  index++;
}
console.log("la massa totale è di= ",crewMass);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

//supponiamo di il primo oggetto abbia massa=0 quindi leveremo alla nostra massa totale la sua massa specifica: crewMass-=starWarsCharacters[0].mass

if (crewMass < 500) {
  console.log("Ship is underLoader");
} else if (crewMass > 500 && crewMass < 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass < 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: Over 900");
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

const starWarsCharacters2 = structuredClone(starWarsCharacters);
console.log(starWarsCharacters);

for (let index = 0; index < starWarsCharacters.length; index++) {
  if (starWarsCharacters[index].gender === "n/a") {
    console.log("si sono n/a");
    starWarsCharacters2[index].gender = "robot";
  } else {
    null;
  }
}
console.log(
  starWarsCharacters2 , "starWarsCharacter2 modifica gender in roobot"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

console.log(charactersNames.length);

for (let index = 0; index < charactersNames.length; index++) {
  for (let i = 0; i < femaleCharacters.length; i++) {
    if (charactersNames[index] === femaleCharacters[i].name) {
      charactersNames.splice(index, 1);
    } else {
      null;
    }
  }
}
console.log(
  "lunghezza caracterName dopo aver rimosso i female " , charactersNames.length
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).

  

*/

//il metodo Math.flow ci va ad arrotondare i numeri decimali portandoli in eccesso o difetto ma intero
//quindi con il metodo Math.random * "un numero" va a moltiplicare in modo randomico fino ad um massimo di quel numero che gli sto assegnando io però siccome può anche darci dei numeri
//decimali grazie al floor esterno andremo sempre ad avere un numero intero

let random = Math.floor(Math.random() * starWarsCharacters.length);
// console.log(random);
let randmoCharacter = starWarsCharacters[random];
// console.log(randmoCharacter);
console.log(
  "Il nostro personaggio si chiama: " +
    randmoCharacter.name +
    " è di genere: " +
    randmoCharacter.gender +
    " ha gli occhi di colore: " +
    randmoCharacter.eye_color +
    " ha i capelli color: " +
    randmoCharacter.hair_color +
    " è nato nell'anno : " +
    randmoCharacter.birth_year +
    " ha un altezza di: " +
    randmoCharacter.height +
    " la sua massa è di: " +
    randmoCharacter.mass +
    " la sua skin ha il colore: " +
    randmoCharacter.skin_color
);
