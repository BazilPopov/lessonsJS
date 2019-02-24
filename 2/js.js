var budget = +prompt("Ваш бюджет:");
console.log(budget);
var namemag = prompt("Название Вашего магазина:");
console.log(namemag);
var arr = [];
for (let i=0; i<2; i++){
	let a = prompt("Название товара:");
	if ((typeof(a)) === 'string' && a != '' && a.length<50){
		arr[i] = a;
	}else{
		alert("Вы ввели неверное значение повторите пожалуйста!");
		i--;
	}
}


console.log(arr);


var mainList = obj  = {
	budg: budget,
	name: namemag,
	shopGoods: arr,
	employers: {},
	open: false
};

alert(mainList.budg / 30);

console.log(mainList);


