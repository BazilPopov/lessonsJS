window.addEventListener('DOMContentLoaded', function(){



let s = 0,h = 0,c = 0,candidate, candidate_arr = [],
	popupbtn = document.getElementById('popup-btn'),
	popup = document.querySelector('.popup'),
	overlay = document.querySelector('.overlay'),
	custom = document.querySelector('.custom'),
	main = document.querySelector('.main'),
	custominfo = document.querySelector('.custom-info'),
	customchar = document.querySelector('.custom-char'),
	customstyle = document.querySelector('.custom-style'),
	radio = document.querySelector('.radio'),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	personskins = document.querySelector('.person-skin'),
	personhair = document.querySelector('.person-hair'),
	personclothes = document.querySelector('.person-clothes')
	male_skins = ["url(../img/skin/skin-1.png)" , "url(../img/skin/skin-2.png)" , "url(../img/skin/skin-3.png)"],
	female_skins = ["url(../img/skin/skin-4.png)" , "url(../img/skin/skin-5.png)" , "url(../img/skin/skin-6.png)"],
	male_hair = ["url(../img/hair/construct/hair-1.png)" , "url(../img/hair/construct/hair-2.png)" , "url(../img/hair/construct/hair-3.png)"],
	female_hair = ["url(../img/hair/construct/hair-4.png)" , "url(../img/hair/construct/hair-5.png)" , "url(../img/hair/construct/hair-6.png)"],
	male_clothes = ["url(../img/clothes/construct/clothes-1.png)" , "url(../img/clothes/construct/clothes-2.png)" , "url(../img/clothes/construct/clothes-3.png)"],
	female_clothes = ["url(../img/clothes/construct/clothes-4.png)" , "url(../img/clothes/construct/clothes-5.png)" , "url(../img/clothes/construct/clothes-6.png)"],
	male_hair_slide = ["url(../img/hair/slide/hair-1.png)" , "url(../img/hair/slide/hair-2.png)" , "url(../img/hair/slide/hair-3.png)"],
	female_hair_slide = ["url(../img/hair/slide/hair-4.png)" , "url(../img/hair/slide/hair-5.png)" , "url(../img/hair/slide/hair-6.png)"],
	male_clothes_slide = ["url(../img/clothes/slide/clothes-1.png)" , "url(../img/clothes/slide/clothes-2.png)" , "url(../img/clothes/slide/clothes-3.png)"],
	female_clothes_slide = ["url(../img/clothes/slide/clothes-4.png)" , "url(../img/clothes/slide/clothes-5.png)" , "url(../img/clothes/slide/clothes-6.png)"],
	skin = document.querySelector('.skin'),
	hair = document.querySelector('.hair'),
	clothes = document.querySelector('.clothes'),
	hair_style_1 = document.querySelector('.hair-style-1'),
	hair_style_2 = document.querySelector('.hair-style-2'),
	hair_style_3 = document.querySelector('.hair-style-3'),
	clothes_style_1 = document.querySelector('.clothes-style-1'),
	clothes_style_2 = document.querySelector('.clothes-style-2'),
	clothes_style_3 = document.querySelector('.clothes-style-3'),
	ready = document.getElementById('ready'),
	candidate_card = ['url(../img/candidate-1.png)','url(../img/candidate-2.png)'],
	photo_card = document.getElementsByClassName('photo'),
	active = document.getElementsByClassName('main-cards-item-active');



let radios = radio.getElementsByTagName('input');
let value;

for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        console.log(radios[i].value);  
        value = radios[i].value;     
    }}



radio.addEventListener('change', function(){
for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        console.log(radios[i].value);
        value = radios[i].value;       
    }
}})


















popupbtn.addEventListener('click', function(){
	popup.style.display = 'none';
	overlay.style.display = 'none';
	main.style.display = 'none';
	custom.style.display = 'flex';
	custominfo.style.display = 'block';
	customchar.style.display = 'block';
	customstyle.style.display = 'block';
	active[0].classList.remove('main-cards-item-active')
});




let slaiderMy = function(what,p){
	let slideIndex =1,
			slides = document.getElementsByClassName(what),
			prev = document.getElementsByClassName('prev')[p],
			next = document.getElementsByClassName('next')[p]
			showSlide(slideIndex);
			function showSlide(n){
				if (n > slides.length){
					slideIndex =1;
				}
				if (n < 1){
					slideIndex = slides.length;
				}
				for (let i = 0; i < slides.length;i++){
					slides[i].style.display = 'none';
				}


				slides[slideIndex - 1].style.display = 'block';

			}
			function plusSlides(n){
				showSlide(slideIndex += n)

					if(value === 'Мужской'){
				if (what == 'skin-color'){
					s = slideIndex -1
					personskins.style.backgroundImage = male_skins[s]
				} else {
					if (what == 'hair-style'){
					h = slideIndex -1
					personhair.style.backgroundImage = male_hair[h]
				}else{ c = slideIndex -1
				personclothes.style.backgroundImage = male_clothes[c]}
				}
					}else{
						if (what == 'skin-color'){
					s = slideIndex -1
					personskins.style.backgroundImage = female_skins[s]
				} else {
					if (what == 'hair-style'){
					h = slideIndex -1
					personhair.style.backgroundImage = female_hair[h]
				}else{ c = slideIndex -1
				personclothes.style.backgroundImage = female_clothes[c]}
				}
					}
				
			}

			function currentSlide(n){
				showSlide(slideIndex = n)
					if(value === 'Мужской'){
				if (what == 'skin-color'){
					s = slideIndex -1
					personskins.style.backgroundImage = male_skins[s]
				} else {
					if (what == 'hair-style'){
					h = slideIndex -1
					personhair.style.backgroundImage = male_hair[h]
				}else{ c = slideIndex -1
				personclothes.style.backgroundImage = male_clothes[c]}
				}
					}else{
						if (what == 'skin-color'){
					s = slideIndex -1
					personskins.style.backgroundImage = female_skins[s]
				} else {
					if (what == 'hair-style'){
					h = slideIndex -1
					personhair.style.backgroundImage = female_hair[h]
				}else{ c = slideIndex -1
				personclothes.style.backgroundImage = female_clothes[c]}
				}
					}
			}

			prev.addEventListener('click',function(){
				plusSlides(-1);
			})
			next.addEventListener('click',function(){
				plusSlides(1);
			})
}


slaiderMy('skin-color',0)
slaiderMy('hair-style',1)
slaiderMy('clothes-style',2)


male.addEventListener('change', function(){
	personskins.style.backgroundImage = male_skins[s]
	personhair.style.backgroundImage = male_hair[h]
	personclothes.style.backgroundImage = male_clothes[c]

	hair_style_1.style.backgroundImage = male_hair_slide[0]
	hair_style_2.style.backgroundImage = male_hair_slide[1]
	hair_style_3.style.backgroundImage = male_hair_slide[2]
	clothes_style_1.style.backgroundImage = male_clothes_slide[0]
	clothes_style_2.style.backgroundImage = male_clothes_slide[1]
	clothes_style_3.style.backgroundImage = male_clothes_slide[2]

});

female.addEventListener('change', function(){
	personskins.style.backgroundImage = female_skins[s]
	personhair.style.backgroundImage = female_hair[h]
	personclothes.style.backgroundImage = female_clothes[c]

	hair_style_1.style.backgroundImage = female_hair_slide[0]
	hair_style_2.style.backgroundImage = female_hair_slide[1]
	hair_style_3.style.backgroundImage = female_hair_slide[2]
	clothes_style_1.style.backgroundImage = female_clothes_slide[0]
	clothes_style_2.style.backgroundImage = female_clothes_slide[1]
	clothes_style_3.style.backgroundImage = female_clothes_slide[2]
});

let name_form = document.getElementById('name'),
	age_form = document.getElementById('age'),
	select_form = document.querySelector('.select'),
	bio_form = document.getElementById('bio')

ready.addEventListener('click', function(){
	candidate = {
		name: name_form.value,
		age: age_form.value,
		sex: value,
		views: select.value,
		bio: bio.value,
		skin: s,
		hair: h,
		clothes: c
	}
	
	if (candidate_arr.length > 2){
		candidate_arr[0] = candidate_arr[1]
		candidate_arr[1] = candidate_arr[2]
		candidate_arr[2] = candidate
	}else{
		candidate_arr.push(candidate)
	}
	let first = candidate_arr[0], second = candidate_arr[1], third = candidate_arr[2]
	console.log(first)
	console.log(second)
	console.log(third)



	if (candidate_arr.length === 1){
	main_cards[0].style.display = 'block'
	name_cards[0].textContent = first.name
	age_cards[0].textContent = first.age
	sex_cards[0].textContent = first.sex
	views_cards[0].textContent = first.views
	bio_cards[0].textContent = first.bio

	if(first.sex === 'Мужской'){
		photo_card[0].classList.add('photo-1')

	}else{
		photo_card[0].classList.add('photo-2')
	}

	}else{
		if (candidate_arr.length === 2){
		main_cards[0].style.display = 'block'
		name_cards[0].textContent = first.name
		age_cards[0].textContent = first.age
		sex_cards[0].textContent = first.sex
		views_cards[0].textContent = first.views
		bio_cards[0].textContent = first.bio
		
		if(first.sex === 'Мужской'){
		photo_card[0].classList.add('photo-1')

	}else{
		photo_card[0].classList.add('photo-2')
	}
		main_cards[1].style.display = 'block'
		name_cards[1].textContent = second.name
		age_cards[1].textContent = second.age
		sex_cards[1].textContent = second.sex
		views_cards[1].textContent = second.views
		bio_cards[1].textContent = second.bio
		if(second.sex === 'Мужской'){
		photo_card[1].classList.add('photo-1')

	}else{
		photo_card[1].classList.add('photo-2')
	}
		}else{
			main_cards[0].style.display = 'block'
			name_cards[0].textContent = first.name
			age_cards[0].textContent = first.age
			sex_cards[0].textContent = first.sex
			views_cards[0].textContent = first.views
			bio_cards[0].textContent = first.bio
			
			if(first.sex === 'Мужской'){
		photo_card[0].classList.add('photo-1')

	}else{
		photo_card[0].classList.add('photo-2')
	}
			main_cards[1].style.display = 'block'
			name_cards[1].textContent = second.name
			age_cards[1].textContent = second.age
			sex_cards[1].textContent = second.sex
			views_cards[1].textContent = second.views
			bio_cards[1].textContent = second.bio
			
			if(second.sex === 'Мужской'){
		photo_card[1].classList.add('photo-1')

	}else{
		photo_card[1].classList.add('photo-2')
	}
			main_cards[2].style.display = 'block'
			name_cards[2].textContent = third.name
			age_cards[2].textContent = third.age
			sex_cards[2].textContent = third.sex
			views_cards[2].textContent = third.views
			bio_cards[2].textContent = third.bio
			
			if(third.sex === 'Мужской'){
		photo_card[2].classList.add('photo-1')

	}else{
		photo_card[2].classList.add('photo-2')
	}
		}
	}





	main.style.display = 'block';
	custom.style.display = 'none';
	custominfo.style.display = 'none';
	customchar.style.display = 'none';
	customstyle.style.display = 'none';
	console.log(candidate_arr)
})


let main_cards = document.getElementsByClassName('main-cards-item'),
	name_cards = document.getElementsByClassName('name'),
	age_cards = document.getElementsByClassName('age'),
	sex_cards = document.getElementsByClassName('sex'),
	views_cards = document.getElementsByClassName('views'),
	bio_cards = document.getElementsByClassName('bio'),
	result_count = document.getElementsByClassName('result-count'),
	reset = document.getElementById('reset'),
	voting = document.getElementById('voting'),
	crime = document.getElementById('crime'),
	progress_bar = document.getElementsByClassName('progress-bar-1');
main_cards[0].style.display = 'none'
main_cards[1].style.display = 'none'
main_cards[2].style.display = 'none'


reset.addEventListener('click', function(){
		popup.style.display = 'none';
	overlay.style.display = 'none';
	main.style.display = 'none';
	custom.style.display = 'flex';
	custominfo.style.display = 'block';
	customchar.style.display = 'block';
	customstyle.style.display = 'block';
	result_count[0].textContent = ''
result_count[1].textContent = ''
result_count[2].textContent = ''
progress_bar[0].style.height = '0%'
progress_bar[1].style.height = '0%'
progress_bar[2].style.height = '0%'
})


voting.addEventListener('click', function(){
	

function getRandomInt(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

let randoms = [],
	sum = 100
	
	
	for (let i = 0; i<2;i++){
		let random = getRandomInt(0,sum);
		sum = sum - random
		randoms[i] = random
		
	}
randoms[2] = 100 - randoms[0] - randoms[1]
result_count[0].textContent = randoms[0] + '%'
result_count[1].textContent = randoms[1] + '%'
result_count[2].textContent = randoms[2] + '%'
progress_bar[0].style.height = randoms[0] + '%'
progress_bar[1].style.height = randoms[1] + '%'
progress_bar[2].style.height = randoms[2] + '%'

let max = Math.max.apply(null, randoms)
if(randoms[0] == max){
	main_cards[0].classList.add('​main-cards-item-active')
	main_cards[1].classList.remove('main-cards-item-active')
	main_cards[2].classList.remove('main-cards-item-active')
}else{
	if(randoms[1] == max){
	main_cards[1].classList.add('main-cards-item-active')
	main_cards[0].classList.remove('main-cards-item-active')
	main_cards[2].classList.remove('main-cards-item-active')
}else{main_cards[2].classList.add('main-cards-item-active')
main_cards[1].classList.remove('main-cards-item-active')
	main_cards[0].classList.remove('main-cards-item-active')}
}


})

crime.addEventListener('click', function(){
function getRandomInt(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

let randoms = [],
	sum = 75
	
	
	for (let i = 0; i<2;i++){
		let random = getRandomInt(0,sum);
		sum = sum - random
		randoms[i] = random
		
	}

randoms[2] = 75 - randoms[0] - randoms[1]
randoms[1] = randoms[1] + 25
result_count[0].textContent = randoms[0] + '%'
result_count[1].textContent = randoms[1] + '%'
result_count[2].textContent = randoms[2] + '%'
progress_bar[0].style.height = randoms[0] + '%'
progress_bar[1].style.height = randoms[1] + '%'
progress_bar[2].style.height = randoms[2] + '%'

let max = Math.max.apply(null, randoms)
if(randoms[0] == max){
	main_cards[0].classList.add('​main-cards-item-active')
	main_cards[1].classList.remove('main-cards-item-active')
	main_cards[2].classList.remove('main-cards-item-active')
}else{
	if(randoms[1] == max){
	main_cards[1].classList.add('main-cards-item-active')
	main_cards[0].classList.remove('main-cards-item-active')
	main_cards[2].classList.remove('main-cards-item-active')
}else{main_cards[2].classList.add('main-cards-item-active')
main_cards[1].classList.remove('main-cards-item-active')
	main_cards[0].classList.remove('main-cards-item-active')}
}

})





});