// Exo 1
// a)
var txt = 'Hello World';
txt = txt.replace('World', 'Universe');
console.log(txt); // Affiche "Hello Universe"

// b)
var str = 'Android,Javascript,Web';
var array = str.split(',');
console.log(array);

// exo 2

// Imaginons que vous avez un formulaire avec un champ `input` id="name"
// et une balise `div` pour afficher le résultat id="result"

document.getElementById('name').addEventListener('input', function (e) {
	let name = e.target.value;
	document.getElementById('result').innerText = `Bonjour, ${name}!`;
});

// exo 3
const students = ['Paul', 'Anne', 'Mick'];
students.push('Zoe');

const sortedStudents = students.sort();
console.log(sortedStudents);

// exo 4
let cours = {
	nom: 'JavaScript Avancé',
	niveau: 'Intermédiaire',
	votes: 0,
};
console.log(cours);

document.getElementById('likeButton').addEventListener('click', function () {
	cours.votes += 1;
	document.getElementById(
		'likeCount'
	).textContent = `Nombre de J'aime : ${cours.votes}`;
});

// Exo 5
// a))))
const guests = [
	'Madrid',
	'Lisbonne',
	'Paris',
	'Lisbonne',
	'Lisbonne',
	'Paris',
	'Lisbonne',
];

const visitorCount = {};
guests.forEach((city) => {
	visitorCount[city] = (visitorCount[city] || 0) + 1;
});

for (let city in visitorCount) {
	console.log(`Pays : ${city}, visiteurs : ${visitorCount[city]}`);
}

// b)))
const users = [
	{ id: 1, revenus: [10, 30] },
	{ id: 2, revenus: [10, 40] },
	{ id: 3, revenus: [40, 40] },
];

users.forEach((user) => {
	const total = user.revenus.reduce((acc, current) => acc + current, 0);
	console.log(`ID : ${user.id}, Total des revenus : ${total}`);
});
