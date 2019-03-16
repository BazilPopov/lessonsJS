var size_arr = +prompt("Размер матрицы: ");
var small_arr = [], big_arr=[], sum = 0;

for (let i = 0; i<size_arr; i++){
	small_arr=[];
	for (let j = 0; j<size_arr; j++){
		let element = getRandomInt(0, 5)
		small_arr.push(element);
		sum = sum+element;
	}
	big_arr.push(small_arr);
}


console.log(big_arr);
console.log(sum);



function getRandomInt(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

