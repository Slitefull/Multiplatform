let home = document.getElementById('btnHome');
let about = document.getElementById('btnAbout');
let contacts = document.getElementById('btnContacts');

let homeHeadline = document.getElementById('homeHeadline');

let paintHeadline = document.getElementById('paintHeadline');
let dkbankHeadline = document.getElementById('dkbankHeadline');
let crudHeadline = document.getElementById('crudHeadline');

let paintDescription = document.getElementById('paintDescription');
let crudDescription = document.getElementById('crudDescription');
let dkbankDescription = document.getElementById('dkbankDescription');

function ukrLang () {
	home.innerHTML = 'Головна';
	about.innerHTML = 'Про нас';
	contacts.innerHTML = 'Контакти';

	homeHeadline.innerHTML = 'Головна';

	paintHeadline.innerHTML = 'Пейнт';
	crudHeadline.innerHTML = 'Таблиця CRUD';
	dkbankHeadline.innerHTML = 'ДКБанк';

	paintDescription.innerHTML = 'Пейнт дає можливість намалювати малюнок за допомогою інструментів: лінії, квадрата, кола та гумки';
	crudDescription.innerHTML = 'Просто та швидко скопіюйте, прочитайте, оновіть, видаліть інформацію користувача в таблиці';
	dkbankDescription.innerHTML = 'Зареєструйте обліковий запис у DKBank, щоб мати широкі можливості управління своїми заощадженнями';
}

function rusLang () {
	home.innerHTML = 'Главная';
	about.innerHTML = 'О нас';
	contacts.innerHTML = 'Контакты';

	homeHeadline.innerHTML = 'Главная';

	paintHeadline.innerHTML = 'Пейнт';
	crudHeadline.innerHTML = 'Таблица CRUD';
	dkbankHeadline.innerHTML = 'ДКБанк';

	paintDescription.innerHTML = 'Пейнт дает возможность нарисовать рисунок с помощью инструментов: линии, квадрата, круга и резинки';
	crudDescription.innerHTML = 'Просто и быстро скопируйте, прочитайте обновите, удалите информацию пользователя в таблице';
	dkbankDescription.innerHTML = 'Зарегистрируйте учетную запись в DKBank, чтобы иметь возможность управлять своими сбережениями';
}

function engLang () {
	home.innerHTML = 'Home';
	about.innerHTML = 'About';
	contacts.innerHTML = 'Contacts';

	homeHeadline.innerHTML = 'Home';

	paintHeadline.innerHTML = 'Paint';
	crudHeadline.innerHTML = 'Table CRUD';
	dkbankHeadline.innerHTML = 'DKBank';
	
	paintDescription.innerHTML = 'Paint allows you to draw a pucture using the tools: line, square, circle and eraser';
	crudDescription.innerHTML = 'Copy, Read, Upgrate, Delete yours user information in database simply and fast';
	dkbankDescription.innerHTML = 'Register the account in DKBank to take ample ability to manage your savings';
}

eng.addEventListener("click", engLang);
rus.addEventListener("click", rusLang);
ukr.addEventListener("click", ukrLang);