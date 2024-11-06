/* 
let compteur = 2;
function maFonction() {
    let myVar = 456;
    console.log("myVar:" + myVar);
}
if (compteur > 1) {
    let myVar2 = "Wazaa!";
    console.log("myVar2:" + myVar2);
}
console.log("myVar: " + myVar);

console.log("myVar2:" + myVar2);

------------------------------------

let ="Bonjour";
window.alert(let);
window.alert("Entrez votre nom");
window.alert("let + Entrez votre nom"); 

let nom = prompt("Entrez votre nom");
let prenom = prompt("Entrez votre prénom");
let sexe = confirm("Etes-vous un Homme");

if (sexe == true) { alert(" Bonjour Monsieur " + nom + prenom + " Bienvenue sur notre site web ");
 }
 else {
     alert(" Bonjour Madame" + nom + prenom); 
    }   
------------------------------------------------------

let reponse = "C";
if (reponse == "A") {
    console.log("Bonne réponse !");
}
else if (reponse == "B") {
    console.log("Mauvaise réponse !");
}
else {
    console.log("Réponse inconnue.");
}
    */

/*-----------------------------------------------------*/
/* 1 - Parité 

let nombre= prompt("entre un nombre");

if (nombre % 2 == 0) {
    console.log("nombre pair");
} else {
    console.log("nombre impair");
} */

/*-----------------------------------------------------*/
/* 2 - Age */
/*
let anneedenaissance = prompt("date de naissance")
anneedenaissance = Number(anneedenaissance);
let anneeActuelle = new Date().getFullYear();
let age = anneeActuelle - anneedenaissance;
console.log("Vous avez " + age + " ans.");
if (age > 18) {
    console.log("Vous etes majeur.");
} 
    */

/*-----------------------------------------------------*/
/* 3 - Calculette */
/*
let chiffre1 = Number(prompt("entrez le premier nombre : "));
let chiffre2 = Number(prompt("entrez le deuxieme nombre :"));
let operateur = prompt("entrez un operateur (+, -, *, /) :");
let resultat;
if (operateur === "+") {
    resultat = chiffre1 + chiffre2; /*addition*//*
} else if (operateur === "-") {
resultat = chiffre1 - chiffre2; /*soustraction*//*
} else if (operateur === "*") {
resultat = chiffre1 * chiffre2; /*multiplication*//*
} else if (operateur === "/") {
if (chiffre2 === 0) {
    console.log("erreur : division par zero impossible !");
} else {
    resultat = chiffre1 / chiffre2; /*division*//*
}
} else {
console.log("erreur : calcul invalide !");
}
if (resultat !== undefined) {
console.log("resultat : " + resultat);
} */

/*------------------------------------------------------------------------------*/
/* 1 - Saisie */

/*let i = 1;
let prenom;
while (prenom !=""){
    prenom = prompt("saisissez un prenom"+i)
    i++;
    console.log(prenom)
}
console.log(i +-2)*/

/*------------------------------------------------------------------------------*/

/* 2 - Entiers inférieurs à N */
/*
let n = prompt("veuillez saisir un chiffre");
n = parseInt(n);
console.log (typeof n) 

if (!isNaN(n) && n > 0) {
    let i = n - 1;
    while (i >= 0) {
        console.log(i);
        i--;
    }
} else {
    console.log("Veullez entrer un chiffre valide et positif")
}*/

/*------------------------------------------------------------------------------*/

/* 3 - Somme des entiers inférieurs à N */
/*
let n = prompt("veuillez saisir un chiffre");
n = parseInt(n);
if (!isNaN(n) && n > 0) {
    let somme = 0;

    for (let i = 0; i < n; i++) {
        somme += i;
    }
    console.log("la somme des nombres inferieurs à " + n + " est : " + somme);

} else {
    console.log("Veuillez entrer un nombre valide et positif.");
} */

/*------------------------------------------------------------------------------*/
/* 4 - Somme d'un intervalle */

/* 
let n1 = parseInt(prompt(" veuillez saisir le deuxieme nombre (n1)"));
let n2 = parseInt(prompt(" veuillez saisir le deuxieme nombre (n2)"));
let somme = 0;

if (!isNaN(n1) && !isNaN(n2) && n1 <= n2) {
    for (let i = n1; i <= n2; i++) {
        somme += i;
    }
    console.log("la somme des entiers de " + n1 + " à " + n2 + "est : " + somme);
} else {
    console.log("veuillez entrer des nombres valides, et assurez-vous que n1 <= n2.");
}*/

/*------------------------------------------------------------------------------*/
/* 5 - Moyenne */

//let somme = 0; /*la somme*/
//let nombre1 = parseInt(prompt("veuillez saisir une 1er somme"));
//let nombre2 = parseInt(prompt("veuillez saisir une 2eme somme"));
//do {
//    nombre1 = parseInt(prompt("veuillez saisir un chiffre entier"));
//   if (!isNaN(nombre1) && !isNaN(nombre2) && !== 0) {
//       somme += nombre1; nombre2; /*ajout des sommes*/
//    } else if (nombre1 !== 0) (nombre2 !== 0) {
//        alert("veuillez entrer un nombre valide");
//    }
//} while (nombre1 !==0);(nombre2 !==0);
//let moyenne = somme;
//console.log("la somme des nombres saisis est : " + somme);
//console.log("la moyenne des nombres saisis est : " + moyenne);
// else {
//  console.log("Aucun nombre vlide n'a ete saisi.") 
//}

/*------------------------------------------------------------------------------*/

/* 8) les fonctions */ 

