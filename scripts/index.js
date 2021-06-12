// Buttons
let editBtn = document.querySelector('#editBtn');
let cancelBtn = document.querySelector('#cancelBtn');
let saveBtn = document.querySelector('#saveBtn');
let closeBtn = document.querySelector('.modal__close');

// Modal
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

// Text
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');

// Inputs
let nameInput = document.forms.profile.elements.name;
let titleInput = document.forms.profile.elements.title;

editBtn.addEventListener('click', function (event) {
	nameInput.value = profileName.textContent;
	titleInput.value = profileTitle.textContent;
	overlay.classList.add('overlay_show');
	modal.classList.add('modal_show');
});

overlay.addEventListener('click', closeModal)
cancelBtn.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)

function closeModal() {
	overlay.classList.remove('overlay_show');
	modal.classList.remove('modal_show');
}

saveBtn.addEventListener('click', function () {
	profileName.textContent = nameInput.value;
	profileTitle.textContent = titleInput.value;
	closeModal();
})

