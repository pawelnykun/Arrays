//deklaracja i inicjalizacja tablic
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//łączenie tablic
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
//dodawanie nowego elementu tablicy
var newName = 'Marian';
if ( allNames.indexOf(newName) === -1 ) {
	allNames.push(newName);
}
console.log(allNames);