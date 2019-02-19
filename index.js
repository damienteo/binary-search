const jsonfile = require('jsonfile');

// const nameList = [
//     'Aaron',
//     'Andy',
//     'Batman',
//     'Betsy',
//     'Boba',
//     'Bonnie',
//     'Clarence',
//     'Daisy',
//     'Elektra',
//     'Flash'
// ];

// binarySearch(nameList, 'Daisy'); //=> true

const phonebook = 'phonebook.json';

binarySearch = (object, string) => {
	console.log(object.findIndex(item => {
		item === string;
	}))
	console.log("length", object.length);
	console.log(string);

	let start = 0;
	let end = object.length-1;
	let middle = Math.floor((start + end)/2);

	console.log("middle", middle);
	console.log("first middle name", object[middle]);

	while (object[middle] !== string && start < end) {
		if (string > object[middle]) {
			console.log("start point", start);
			console.log("object at start", object[start])
			console.log("object at middle", object[middle])
			start = middle + 1;
			console.log("new start point", start);
		} else {
			console.log("end", start);
			console.log("object at end", object[end])
			console.log("object at middle", object[middle])
			end = middle - 1;
		}
		middle = Math.floor((start + end)/2);
		console.log("new middle", middle);
	}

	return object[middle];
}

var namelist =[];


jsonfile.readFile(phonebook, (err, obj) => {
	obj.forEach(obj => {
		namelist.push(obj.name);
	})
	namelist.sort();
	// console.log(namelist);
	console.log(binarySearch(namelist, 'Dalenna'));

})

