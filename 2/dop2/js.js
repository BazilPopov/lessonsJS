var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
console.log(week);
var today = "Вторник";
var saturday = "Суббота";
var sunday = "Воскресение";
for (let i = 0; i < week.length; i++){
	if (week[i] === today){
		document.write("<p class='bold'>" + week[i] + "</p>");
	}else{
		if(week[i] === saturday || week[i] === sunday){
			document.write("<p class='italic'>" + week[i] + "</p>");
		}else{
			document.write("<p>" + week[i] + "</p>");
		}
	}
}


var arr = [];
arr[0] = "89898";
arr[1] = "7985";
arr[2] = "214";
arr[3] = "566";
arr[4] = "2333";
arr[5] = "3555";
arr[6] = "2334";
console.log(typeof(arr[1]));
for (let i = 0; i < arr.length; i++){
	let string = arr[i];
	if(string[0] ==="7" || string[0] ==="3"){
		console.log(arr[i]);
	}
}