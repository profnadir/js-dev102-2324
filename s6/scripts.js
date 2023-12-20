/* function sayHi(nom){
    return "hi " + nom;
}

let a = 5;
console.log(typeof a);

let b = () => console.log("hi from b");
console.log(typeof b);

console.log(sayHi("dev102")) ;


b(); */

 
/* function sayHi(nom){
    return "hi " + nom;
} */

/* function manger() {
    console.log("manger");
} */

/* chat.manger();
chien.manger(); */

/* console.log("hi") */  

/* • Création d’objet */

const salle1 = {

    nbStagiaires : 24,
    groupe : "dev102",
    isOuvert : false,
    genre : "informatque",

    etudier(){
        log("nous allons etudier JS");
    },

    fermerLaPorte(){
        console.log("La porte 1 est fermee");
        this.isOuvert = false;
    },

    ouvrirLaPorte(){
        console.log("La porte 1 est ouverte");
        this.isOuvert = true;
    }
}

const salle2 = {
    
    nbStagiaires : 25,
    groupe : "info101",
    isOuvert : false,
    genre : "infographie",

    etudier(){
        log("nous allons etudier PH");
    },

    fermerLaPorte(){
        console.log("La porte 2 est fermee");
        this.isOuvert = false;
    },

    ouvrirLaPorte(){
        console.log("La porte 2 est ouverte");
        this.isOuvert = true;
    }
}



/* console.log(salle1.nbStagiaires);
console.log(salle1.groupe); */
/* console.log(salle1.isOuvert);
salle1.ouvrirLaPorte();
console.log(salle1.isOuvert);
salle1.fermerLaPorte() */

/* console.log(salle1.isOuvert);
console.log(salle2.isOuvert);
salle1.ouvrirLaPorte();
salle2.ouvrirLaPorte(); */

/// NOOOOOOOOOOOOOOOOOOOOOOOOOOO///////
/* salle1.nbStagiaires = 10;

console.log(salle1.nbStagiaires)
*/

/* function Salle(nbStagiairesI, groupeI, isOuvertI, genreI){
    this.nbStagiaires = nbStagiairesI;
    this.groupe = groupeI;
    this.isOuvert = isOuvertI;
    this.genre = genreI;

    this.fermerLaPorte = () => {
        console.log("La porte  est fermee");
        this.isOuvert = false;
    }
    this.ouvrirLaPorte = () => {
        console.log("La porte  est ouverte");
        this.isOuvert = true;
    }
} */

class Salle {
    constructor(nbStagiairesI, groupeI, isOuvertI, genreI){
        this.nbStagiaires = nbStagiairesI;
        this.groupe = groupeI;
        this.isOuvert = isOuvertI;
        this.genre = genreI;
    }

    fermerLaPorte = () => {
        console.log("La porte  est fermee");
        this.isOuvert = false;
    }
    
    ouvrirLaPorte = () => {
        console.log("La porte  est ouverte");
        this.isOuvert = true;
    }
}

/* ES2015 class */

const salle3 = new Salle(25,"aai101",false,"industrie");
console.log(salle3.groupe);
salle3.fermerLaPorte();

const salle4 = new Salle(20,"agc201",true,"commerce");
console.log(salle4.nbStagiaires);



/* • Manipulation d’objet
• Manipulation des objets natifs
• Manipulation JSON  */