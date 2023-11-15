document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('book-form');
	const titleInput = document.getElementById('title');
	const authorInput = document.getElementById('author');
	const isbnInput = document.getElementById('isbn');
	const bookList = document.getElementById('book-list');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let title = titleInput.value.trim();
		let author = authorInput.value.trim();
		let isbn = isbnInput.value.trim();

		if (title === '' || author === '' || isbn === '') {
			showMessage('Veuillez remplir tous les champs', 'warning');
		} else {
			const row = document.createElement('tr');
			row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete-btn">Supprimer</button></td>
            `;
			bookList.appendChild(row);
			showMessage('Livre ajouté avec succès', 'success');
			form.reset();
		}
	});

	bookList.addEventListener('click', (e) => {
		if (e.target.classList.contains('delete-btn')) {
			e.target.parentElement.parentElement.remove();
			showMessage('Livre supprimé', 'danger');
		}
	});

	function showMessage(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		container.insertBefore(div, form);

		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}
});
