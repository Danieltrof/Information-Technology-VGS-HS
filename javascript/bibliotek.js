//For å hente et ".js" dokumentet inn i en html fil skriver vi src="filnanvn" i script kommandoen

// Funksjon som returnerer det største av to tall
function storsteAvToTall(a,b) {
	if (a > b) {
		return a;
	}
	else {
		return b;
	}
}

// Funksjon som returnerer det minste av to tall
function storsteAvToTall(a,b) {
	if (a < b) {
		return a;
	}
	else {
		return b;
	}
}

//Returnerer antall ganger vi finner et bestemt element, f.eks. antall ganger tallet 3 forekommer
function antallGangerElement(array,element) {
	var antall = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == element) {
			antall++;
		}
	}
	return antall;
}

//Fjerne alle av et gitt element fra en array, f.eks. fjerne alle 3-ere
function fjerneAlleElement(array,element) {
	var ny = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] != element) {
			ny.push(array[i]);
		}
	}
	return ny;
}


//Funksjon som returnerer det største elementet i en array

function storstIArray(array) {
var storste = 0;
  for (var i = 0; i < storste; i++) {
  if (array[i] > storste) {
    var storste = array[i]
  }
}
return storste;
}


// returnerer et tilfeldig tall mellom minste og storste
function tilfeldigTall(minste,storste) {
  return Math.floor(Math.random()*(storste-minste+1))+minste
}


//n antall tilfeldige tall i en Array
function nTilfeldige (n) {
  var tilfeldige = [];
  for (var i = 0; i < n; i++) {
    array.push(tilfeldigTall(minste,storste))
  }
  return tilfeldige;
}

//Hvilke tall mangler
function hvaMangler(minste,største) {

}
