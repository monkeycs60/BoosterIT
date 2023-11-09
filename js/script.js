class Employe {
	constructor(matricule, nom, prenom, dateEntree, role, service) {
		this.matricule = matricule;
		this.nom = nom;
		this.prenom = prenom;
		this.dateEntree = new Date(dateEntree); 
		this.role = role;
		this.service = service;
	}

	afficher() {
		console.log(
			`Matricule: ${this.matricule}, Nom: ${this.nom}, Prénom: ${this.prenom}, Role: ${this.role}, Service: ${this.service}`
		);
	}

	calculerAnciennete() {
		const now = new Date();
		const anciennete = now.getFullYear() - this.dateEntree.getFullYear();
		return anciennete;
	}

	calculerSalaire(base, primeService, primeAnciennete) {
		const salaire =
			base +
			(base * primeService) / 100 +
			((base * primeAnciennete) / 100) * this.calculerAnciennete();
		return salaire;
	}
}

class Directeur extends Employe {
	gerer() {
		console.log(`Le directeur ${this.nom} est en train de gérer la société.`);
	}
}

class Ouvrier extends Employe {
	constructor(
		matricule,
		nom,
		prenom,
		dateEntree,
		role,
		service,
		specialite,
		diplome
	) {
		super(matricule, nom, prenom, dateEntree, role, service);
		this.specialite = specialite;
		this.diplome = diplome;
	}

	afficherInfo() {
		super.afficher();
		console.log(`Spécialité: ${this.specialite}, Diplôme: ${this.diplome}`);
	}
}

// Exemples:
const employe = new Employe(
	'123',
	'Michel',
	'Martinez',
	'2010-01-01',
	'Développeur',
	'Informatique'
);
employe.afficher();
console.log(`Ancienneté: ${employe.calculerAnciennete()} ans`);
console.log(`Salaire: ${employe.calculerSalaire(30000, 10, 5)} €`);

const directeur = new Directeur(
	'124',
	'Pierre',
	'Dosne',
	'2005-05-16',
	'Directeur',
	'Direction'
);
directeur.afficher();
directeur.gerer();

const ouvrier = new Ouvrier(
	'125',
	'Sarah',
	'Larue',
	'2012-03-12',
	'Ouvrier',
	'Maintenance',
	'Électricien',
	'BTS Électrotechnique'
);
ouvrier.afficherInfo();
console.log(ouvrier.calculerSalaire(2000, 5, 2));

