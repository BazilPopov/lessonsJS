var btn_open_shop = document.getElementById('open-btn');
	nameShop = document.querySelector('.name-value')
	budgetvalue = document.querySelector('.budget-value')
	btn = document.getElementsByTagName('button')
	goodsitem =document.getElementsByClassName('goods-item')
	goodsvalue = document.querySelector('.goods-value')
	chooseitem = document.querySelector('.choose-item')
	itemsvalue = document.querySelector('.items-value')
	timevalue = document.querySelector('.time-value')
	isopenvalue = document.querySelector('.isopen-value')
	hireemployersitem =document.getElementsByClassName('hire-employers-item')
	employersvalue = document.querySelector('.employers-value')

var budget1
btn_open_shop.onclick = function(){

	var namemag = prompt("Название Вашего магазина:", '');
	while( namemag == "" || namemag == null){
		namemag = prompt("Название Вашего магазина:", '');
	}

	nameShop.textContent = namemag;
	budget1 = +prompt("Ваш бюджет:, ");
	while(isNaN(budget1) || budget1 == "" || budget1 == null){
		budget1 = +prompt("Ваш бюджет:", '');
	}
	budgetvalue.textContent = budget1
	
	console.log(budget1)
}

var k=0;
btn[1].onclick = function(){
	var tovar = [];
	for ( i = 0; i<4; i++){
		if(goodsitem[i].value == "" || goodsitem[i].value == null){
			k++;
		}else{
			tovar.push(goodsitem[i].value)
		}
		
	}
	goodsvalue.textContent = tovar;
	console.log(tovar)
}

chooseitem.addEventListener("keyup", function() {
  itemsvalue.innerText = chooseitem.value;
})

timevalue.addEventListener("keyup", function() {
  console.log(timevalue.value);
  		if(timevalue.value<0){
			console.log('Такого не может быть!')
			isopenvalue.style.backgroundColor = "red"
		}else if(timevalue.value >=8 && timevalue.value <20) {
			console.log('Время пахать!')
			
			isopenvalue.style.backgroundColor = "green"
		} else if (timevalue.value<24){
			console.log('Позновато припёрлись!')
			isopenvalue.style.backgroundColor = "red"
		}else {
			console.log('в сутках только 24 часа!')
			isopenvalue.style.backgroundColor = "red"
		}
})


btn[2].onclick = function(){
	var t = budget1/30
	console.log(t)
	budget.value = t
}

btn[3].onclick = function(){
	var sotr = [];
	for ( i = 0; i<3; i++){
		if(hireemployersitem[i].value == "" || hireemployersitem[i].value == null){
			k++;
		}else{
			sotr.push(hireemployersitem[i].value)
		}
		
	}
	employersvalue.textContent = sotr;
	console.log(sotr)
}