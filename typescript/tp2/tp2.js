let totalDepenses = 0;

//  Ajouter une dépense en cliquant sur le bouton Ajouter
document.getElementById('ajouter').addEventListener('click', () => {
	const titre = document.getElementById('titre').value;
	const montant = parseFloat(document.getElementById('montant').value);
	if (titre && !isNaN(montant)) {
		ajouterDepense(titre, montant);
		totalDepenses += montant;
		document.getElementById('totalDepenses').textContent =
			totalDepenses.toFixed(2);
	}
});

// Vider la liste des dépenses en cliquant sur le bouton Vider
document.getElementById('vider').addEventListener('click', () => {
	viderListe();
	totalDepenses = 0;
	document.getElementById('totalDepenses').textContent = totalDepenses;
});

// Filtre au onChange sur l'input

document.getElementById('filtreMontant').addEventListener('change', () => {
	const filtreMontant = parseFloat(
		document.getElementById('filtreMontant').value
	);
	const depenses = document.getElementById('listeDepenses').children;
	for (let i = 0; i < depenses.length; i++) {
		const montantDepense = parseFloat(depenses[i].textContent.split(':')[1]);
		if (montantDepense > filtreMontant) {
			depenses[i].style.backgroundColor = 'yellow';
		} else {
			depenses[i].style.backgroundColor = '';
		}
	}
});

function ajouterDepense(titre, montant) {
	const li = document.createElement('li');
	li.textContent = `${titre} : ${montant} €`;
	document.getElementById('listeDepenses').appendChild(li);
}

function viderListe() {
	document.getElementById('listeDepenses').innerHTML = '';
}
