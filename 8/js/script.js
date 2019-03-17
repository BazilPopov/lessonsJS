window.addEventListener('DOMContentLoaded', function(){
	//tabs 7
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];


	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b){
		 if( tabContent[b].classList.contains('hide')){
		 	hideTabContent(0);
		 	tabContent[b].classList.remove('hide');
		 	tabContent[b].classList.add('show');

		 }
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
	//timer8
	let deadline = '2019-03-29'

	function getTime(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

			return{
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};
	function setClock(id, endtime){
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock(){
			let t = getTime(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if(t.total <= 0 ){
				clearInterval(timeInterval);
			}

		}
		updateClock();
		let timeInterval = setInterval(updateClock,1000);
	};
	setClock('timer', deadline);

	//modal9
	let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');


	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click',function(){
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = 'hidden';
	});

	//form 11
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся!";
	message.failure = "Что то не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			//AJAX

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			}else if(request.readyState === 4){
				if(request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				} else{
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i=0;i<input.length;i++){
			input[i].value='';
		}
		});


		//slider

		let slideIndex =1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');
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
				for (let i = 0; i < dots.length; i++){
					dots[i].classList.remove('dot-active')
				}

				slides[slideIndex - 1].style.display = 'block';
				dots[slideIndex - 1].classList.add('dot-active');
			}
			function plusSlides(n){
				showSlide(slideIndex += n)
			}

			function currentSlide(n){
				showSlide(slideIndex = n)
			}

			prev.addEventListener('click',function(){
				plusSlides(-1);
			})
			next.addEventListener('click',function(){
				plusSlides(1);
			})

			dotsWrap.addEventListener('click',function(event){
				for(let i=0;i<dots.length + 1 ; i++){
					if(event.target.classList.contains('dot') && event.target==dots[i-1]){
						currentSlide(i);
					}
				}
			})

			//calc

			let persons = document.getElementsByClassName('counter-block-input')[0],
				day = document.getElementsByClassName('counter-block-input')[1];
				


				price.addEventListener("keyup", function() {
				  console.log(day.value/persons.value)
				  console.log(select.value)

				  if (day.value != '' && persons.value != '')
				  	{total.textContent = (day.value*10)*(persons.value*5)*select.value}
				  else{
				  	total.textContent = 'Вы ввели не все данные, или не коректные)'
				  }
				})
				
				select.addEventListener("change", function() {
				  console.log(day.value/persons.value)
				  console.log(select.value)

				  if (day.value != '' && persons.value != '')
				  	{total.textContent = (day.value*10)*(persons.value*5)*select.value}
				  else{
				  	total.textContent = 'Вы ввели не все данные, или не коректные)'
				  }
				})
				




});

