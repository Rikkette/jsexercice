//exo 1 
//let anneedenaissance = prompt("date de naissance")
//anneedenaissance = Number(anneedenaissance);
//let anneeActuelle = new Date().getFullYear();
//let age = anneeActuelle - anneedenaissance;

//console.log(" Vous avez " + age + " ans vous etes ");

//if (age >= 6 && age <= 7) {
//    console.log("Poussin de 6 à 7 ans.");
//}

//if (age >= 8 && age <= 9) {
//    console.log("Pupille de 8 à 9 ans.");
//}

//if (age >= 10 && age <= 11) {
//    console.log("Minime de 10 à 11 ans");
//}

//else (age <= 12); {
//    console.log("Cadet après 12 ans");
//}

//exo 2

//24 heurs
//59 minute
//59 SECOND

//let Heures = Number(prompt("entrez les Heures : "));
//let Minutes = Number(prompt("entrez les Minutes :"));
//Minutes ++;

//if (Heures == 23 && Minutes == 59) { 
//    Heures = 0;
//    Minutes = 0;

// }
//else if (Minutes == 59) {
//    Heures ++;
//    Minutes = 0;
//}

//if (Minutes == 59){
//Minutes = 0;
//}

//else (
//    Minutes ++
//);

//alert('Dans une minute, il sera ${Heures} heure(s), ${Minute} minute(s).')

//exo 3

// de 1 a 10 =010
// de 11 a 20 = 0,09
// de 21 a plus = 0,08

//let reprographie = Number(prompt("Quantité"));
//let prix = 0;

//if (reprographie <= 10) {
//    prix = reprographie * 0.10;
//}

//if (reprographie <= 20) {
//    prix = reprographie * 0.09;
//}

//if (reprographie <= 100) {
//    prix = reprographie * 0.08;
//}

//else {
//    prix = (10 * 0.10) + (20 * 0.09) + ((reprographie - 100) * 0.08);
//}
// alert(`Le coût total de votre facture est de ${prix.toFixed(2)} €.`);

//EXO 4

//homme +20 ans
//Femme de 18 a 35
//besoin de savoir age et sexe
//pour savoir si impossable

let age =  Number(prompt("Entre votre age"));
let sexe = prompt ("entre votre sexe H ou F");

if (isNaN(age)) {
    console.log("l'age saisi n'est pas un nombre valide")
} else {
    let imposable = false;
}

if (sexe === "H" && age > 20){
    imposable = true;
} else if (sexe === "F" && age >= 18 && age <=35){
    imposable = true;
}

if (imposable){
    console.log("Merde alors vous etes impossable !Bonne chance ! ");
} else {
    console.log("Bravos !Vous n'ete pas imposable Profitez en !")
}

//exo 5 

//Un candidat qui oblient plus de 50% elu premier tour
//un candidat qui obtien moin de 12.5% Peuvent participer au deuxieme tour

//ce que l'on veux pour ce code : 

//Scores pour 4 candidat au 1er tour
// candidat n1 elu / battu ou ballotage
// participe au second tour et arrive en tete au premier tour 
//OU
// defavorable , second toursans etre ariver au premier tour 

let CandidatN1= prompt
let CandidatN2= prompt
let CandidatN3= prompt
let CandidatN4= prompt