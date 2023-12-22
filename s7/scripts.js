/* const stagiaire1 = {
    nom : "john",
    prenom : "doe",

    ecrire(){
        console.log('hi');
    }
}

stagiaire1.age = 20;

delete stagiaire1.nom;

console.log(stagiaire1.age); */

/* Manipulation des objets natifs */

/* 1- Array */
/* 
let salle4 = new Salle(...);

let tab1 = new Array(...) */

/* let tab = new Array(); let tab = [];
console.log(tab);
console.log(tab.length); */

/* let tab2 = new Array(3);
console.log(tab2);
console.log(tab2.length); */

/* let notes = new Array(14,17,16); */


/* let notes2 = [14,17,16,14,13,16]; */

/* notes2.push(10);
notes2.pop();
notes2.pop();
notes2.unshift(20);
notes2.shift();
notes2.shift();


notes2[1]= 20;  */

/* console.log(notes2.includes(16)); */
/* console.log(notes2.concat([20,20,20])); */
/* console.log(notes2);
console.log(notes2.join('-'));
console.log(notes2.join('/')); */

/* notes2.splice(2,1) 

console.log(notes2); */

/* let tab = ['h','e','l','l','o'];
console.log(tab.reverse()); */

/* for(let i = 0 ; i < notes2.length ; i++){
    console.log(notes2[i]);
} */

/* for(const note of notes2){
    console.log(note);
} */

/* notes2.indexOf(16)

notes2.forEach(
    (element) => {
        if(element > 16){
            console.log('hi');
        }
        console.log(element);
    }
); */



/* console.log(notes);
console.log(notes.length);
console.log(notes2);
console.log(notes2.length); */

/* console.log(notes2.indexOf(16,3)); */

/* Exo */

let notes = [15,17,18,13,14];
let sum = 0;
for(let i = 0; i< notes.length ; i++){
    sum = sum + notes[i];
}
let moy = sum / notes.length;
console.log(moy);
let max = notes[0];
for(let i = 0; i< notes.length ; i++){ 
    if( notes[i] > max ){ 
        max = notes[i];
    }
}
console.log(max);
let min = notes[0]
for(let i = 0; i< notes.length ; i++){
    if( notes[i] < min ){ 
        min = notes[i];
    }
}

console.log(notes.indexOf(min)); 

/* String */

let groupe = "hi dev 102";
console.log(groupe.length);
console.log(groupe.charAt(1));
console.log(groupe.endsWith('101'));
console.log(groupe.concat(' ','js'));
console.log(groupe.includes(' '));
console.log(groupe.toUpperCase());
console.log(groupe.trim());
console.log(groupe.split(' '));

/* if(groupe.includes(' ') == true) {
    alert('cin invalide')
} */

let nom = "john doe";
let nomTab = nom.split(' ')
console.log(nom.split(' '));
console.log(nomTab[0]);
console.log(nomTab[1]);
