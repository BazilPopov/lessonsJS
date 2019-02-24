var str = "урок-3-был слишком легким";
var str1 = str[0].toUpperCase();
var str2 = '';
var str3 = '';
var str4 = '';
var k = 0;
var i,num;

for (i=1; i<str.length; i++){
	str1  = str1 + str[i];
}

console.log(str1);

for (i=0; i<str1.length; i++){
	if (str1[i] === "-"){
		str2 = str2 + " ";
	}else{
		str2 = str2 + str1[i];
	}
}
console.log(str2);

for (i=0; i<str2.length; i++){
	if (str2[i+1] === "л" && str2[i+2] === "е" && str2[i+3] === "г" && str2[i+4] === "к" && str2[i+5] === "и" && str2[i+6] === "м"){
		k++;
		break;
	}else{
		str3 = str3 + str2[i];
	}
}
console.log(str3);

for (i=0; i<str3.length; i++){
	if (i == str3.length-2 || i == str3.length-1){
		str4=str4+"a";
	}else{
		str4=str4+str3[i];
	}
}
console.log(str4);
alert(str4);
num = 0;
var num1=0;
var arr = [20, 33, 1, "Человек", 2, 3];
for (i=0; i<arr.length; i++){
	num = arr[i];
	if ((typeof(num))!= 'string'){
		num = num * num;
		num1 = num1 + num;
	}
	
}

// console.log(arr.length);
 console.log(Math.sqrt(num1));