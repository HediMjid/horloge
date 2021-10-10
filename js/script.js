// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {

	//Extraire l'heure actuel à l'aide de l'objet Date()
	var date = new Date();
	//Stocker l'heure , minute , seconde  dans des varaiables
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	var ss = (h*3600)+(m*60)+(s);
	// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
	// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
	var deg_hours = (360/12)*(h%12)+(((360/12)/60)*m);
	console.log();
	var deg_minutes = (360/60)*m;
	var deg_secondes = (360/60)*ss;


	AIGUILLEHR.style.transform="rotate("+deg_hours+"deg)";
	AIGUILLEMIN.style.transform="rotate("+deg_minutes+"deg)";
	AIGUILLESEC.style.transform="rotate("+deg_secondes+"deg)";

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);