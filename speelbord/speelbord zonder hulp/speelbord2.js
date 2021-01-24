var worden = document.getElementById("hetwoord");
var raden = document.getElementById("raden");
var check = document.getElementById("checkKnop");
var antwoord = document.getElementById("antwoord-container");

var row = 0;

check.onclick = function(){
	var woord = worden.value.split("");
	var raad = raden.value.split("");
	if(woord.length != 5 || raad.length != 5){
		alert("je moet minstens 5 letters invoeren");
	}
	else{
		for(i=0; i<=4; i++){
			var letterknop = document.createElement("button");
			antwoord.appendChild(letterknop);
			letterknop.innerHTML = raad[i];
			letterknop.id = "row" + row + "knop" + i;
			letterknop.style.backgroundColor = "red";
			if(woord[i] == raad[i]){
				letterknop.style.backgroundColor = "green";
				woord[i] = null;
			}
		}
		for(i=0; i<=4; i++){
			if(woord.includes(raad[i])){
				document.getElementById("row" + row + "knop" + i).style.backgroundColor = "yellow";
				var index = woord.indexOf(raad[i]);
				woord[index] = null;
			}
		}
	}
	row++;
}