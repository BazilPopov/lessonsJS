var 
	menu = document.getElementsByClassName('menu-item'),
	menu1 = document.querySelector('.menu'),
	prom = document.getElementById('prompt'),
	pm = document.createElement('li'),
	rek = document.querySelector('.adv'),
	body = document.querySelector('body'),
	header = document.querySelector('header');
	

	body.style.backgroundImage = 'url(../img/apple_true.jpg) ';
	pm.classList.add("menu-item");
	menu1.appendChild(pm)
	menu1.insertBefore(menu[2],menu[1])
	rek.remove();

	pm.textContent = 'Пятый пунтк';
	title.textContent = 'Мы продаем только подленную технику Apple'
	let otz = prompt("Ваше отношение к яблоку: ");
	prom.textContent = otz;

