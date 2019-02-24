var budget, namemag, price, nameemployers;
var arr = [];


function start(){
	budget = +prompt("Ваш бюджет:");
	while(isNaN(budget) || budget == "" || budget == null){
		budget = +prompt("Ваш бюджет:");
	}
	namemag = prompt("Название Вашего магазина:");
};
start();

function tovar(){
	for (let i=0; i<2; i++){
		let a = prompt("Название товара:");
		if ((typeof(a)) === 'string' && a != '' && a.length<50 && (typeof(a)) != null){
			arr[i] = a;
		}else{
			alert("Вы ввели неверное значение повторите пожалуйста!");
			i--;
		}
	}
}
tovar();

console.log(arr);
var mainList = obj  = {
	budg: budget,
	name: namemag,
	shopGoods: arr,
	employers: {},
	open: false,
	discount: false
};
function employersNam(){
	for( let i = 0; i< 4; i++){
		let name = prompt("Имя сотрудника: ");
		if ((typeof(name)) === 'string' && name != '' && name.length<50 && (typeof(name)) != null){
			mainList.employers[i] = name;
		}else{
			alert("Вы ввели неверное значение повторите пожалуйста!");
			i--;
		}
	}
}
employersNam();

function skidos(price){
	if(discount == true){
		price = price * 0.8;
	}
	return price;
}
function dnBudg(){
alert(mainList.budg / 30);
}
dnBudg();
console.log(mainList);


