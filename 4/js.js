var budget, namemag, price, nameemployers;
var arr = [];


function start(){
	budget = +prompt("Ваш бюджет:, ");
	while(isNaN(budget) || budget == "" || budget == null){
		budget = +prompt("Ваш бюджет:", '');
	}
	namemag = prompt("Название Вашего магазина:", '');
};
start();



console.log(arr);
var mainList  = {
	budg: budget,
	name: namemag,
	shopGoods: arr,
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	tovar: function tovar(){
			for (let i=0; i<2; i++){
				let a = prompt("Название товара:");
				if ((typeof(a)) === 'string' && a != '' && a.length<50 && (typeof(a)) != null){
					arr[i] = a;
				}else{
					alert("Вы ввели неверное значение повторите пожалуйста!", '');
					i--;
				}
			}
		},

	workTime: function workTime(time){
		if(time<0){
			console.log('Такого не может быть!')
		}else if(time >8 && time <20) {
			console.log('Время пахать!')
			mainList.open = true;
		} else if (time<24){
			console.log('Позновато припёрлись!')
		}else {
			console.log('в сутках только 24 часа!')
		}
	},

	dnBudg: function dnBudg(){
		alert(mainList.budg / 30);
		},

	skidos:function skidos(price){
		if(discount == true){
			price = price * 0.8;
		}},

	employersNam:function employersNam(){
	for( let i = 0; i< 4; i++){
				let name = prompt("Имя сотрудника: ", '');
				if ((typeof(name)) === 'string' && name != '' && name.length<50 && (typeof(name)) != null){
					mainList.employers[i] = name;
				}else{
					alert("Вы ввели неверное значение повторите пожалуйста!");
					i--;
				}
			}
		},

		chooseShopItems: function chooseShopItems(){
			let items = prompt("Перечислите через запятую ваши товары!");
			while((typeof(items)) == null){
				items = prompt("Перечислите через запятую ваши товары!");
			}
			mainList.shopItems = items.split(",");
			mainList.shopItems.sort();

		},

		vivodforEach: function vivodforEach(){
			mainList.shopItems.forEach(function(item,i,shopItems){
				console.log( (1+i) + ") У нас Вы можете купить: " + item )
			})
		},

		vivodforin: function vivodforin(){
			for (let key in mainList.shopItems){
				console.log("Наш магазин включает в себя товар: " + mainList.shopItems[key])
			}
		}

};


console.log(mainList);


