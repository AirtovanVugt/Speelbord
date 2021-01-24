var worden = document.getElementById("hetwoord");
var raden = document.getElementById("raden");
var check = document.getElementById("checkKnop");
var antwoord = document.getElementById("antwoord-container");
	
	var row = 0;
	//dit zijn de rijen

		for(var i=0; i<=4; i++){
			for (var t = 0; t <=4; t++) {
				var letterknop = document.createElement("button");
				antwoord.appendChild(letterknop);
				letterknop.innerHTML = " ";
				letterknop.id = "row" + i  + "knop" + t;
				letterknop.style.backgroundColor = "red";
			}
		}
//knopjes maken en de inhoud zal gevuld worden met woord.

check.onclick = function(){
var woord = worden.value.split("");
var raad = raden.value.split("");
//hier split ik het woord zodat het een array word.
var array = [];
//lege array
	for(var i=0; i<=4; i++){
		if(woord[i] == raad[i]){
			array[i] = true;
		}
		else{
			array[i] = false;
		}
	}
//forloop met als de letters het zelfde zijn het true word.
	for(var i=0; i<=4; i++){
		var bam = document.getElementById("row" + row + "knop" + i);
		bam.innerHTML = raad[i];
		if(array[i] == true){
			bam.style.backgroundColor = "green";
			woord[i] = null;
		}
	}
//forloop: id word aangeroepen de knoppen worden gevuld met letters. en als array[i] gelijk is aan
//true word die groen.
	for(var i=0; i<=4; i++){
		var bam = document.getElementById("row" + row + "knop" + i);
		if(woord.includes(raad[i])){
			bam.style.backgroundColor = "yellow";
			var blow = woord.indexOf(raad[i]);
			woord[blow] = null;
		}
	}
//forloop: id word aangeroepen de if doet als er uberhaupt in woord[i] nog de zelfde letter zit als
//raad[i] zelfde is dan gaat die met indexOf() de letter eruit halen en dat naar null veranderen
//en dan de achtergrondkleur naar geel zetten.
		row++
//de rij plus 1 maken.
}