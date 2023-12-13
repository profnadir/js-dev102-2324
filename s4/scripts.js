/* si (condition) alors {bloc1}
sinon {bloc2} */

var isActive = true;
var age = 18;

if(age  > 18){
    console.log('ok1');
}else if(age < 18){
    console.log('ko1');
}else{
    //console.log('dev102');
}

/* var j = "me" // l m me j v s d

switch (j) {
    case "l":
        console.log("Lundi")
        break;

    case "m":
        console.log("Mardi")
        break;

    case "me":
        console.log("Mercredi")
        break;

    case "j":
        console.log("Jeudi")
        break;

    case "v":
        console.log("Vendredi")
        break;

    default:
        console.log("Merci de saisir : l m me j v ")
        break;
} */

// les boucles

/* pour i allant de 1 a 1 
{
    bloc
}  */


for(let i = 0; i<5 ; i=i+2){
    //console.log(i);
    //document.write("<h1>dev102</h1>")
}

/* i=0 0<5 i=2
dev102
i=2 2<5 i=4
dev102
i=4 4<5 i=6
dev102
i=6 6<5 break */

let notes1 = [17,13,19,14];
let notes2 = { cc1:17, cc2:13, cc3:19, efm:14  }

/* console.log(notes1[0])
console.log(notes1[1])
console.log(notes1[2])
console.log(notes1[3])
console.log(notes1[4])
console.log(notes1[5]) */



/* for(i=0; i< notes1.length ; i++){
    console.log(notes1[i])
} */

for(let e in notes2){
    console.log( e + ":" + notes2[e]) // cc1:17
}

for(let i = 20; i >= 0; i=i-2){
    //console.log(i)
}

/* prompt("Entrez votre age ?")

alert('merci de saisir votre age')


prompt("Entrez votre age ?") */

for (let i = 0; i < 10; i++)
{
if (i === 3) { continue; }
console.log(i);
}



/* for(let j = 0; j<9 ; j++){
    for(let i=0; i<j ;i++){
        document.write("*") 
    }
    document.write("<br>")
} */

/* j=0 j=1
j=1 j=2


    j=9
 */



function somme(a, b){
    let c = a+b;
    document.write(c)
}

function somme(a, b){
    let c = a+b;
    alert(c)
}

somme(84,40);