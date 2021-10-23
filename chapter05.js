//perulangan for
function perulangan(){
	for(var i = 1; i < 10; i++){
		console.log(i);
	}
}
perulangan()

//perulangan while
var i = 1;
while(i <10){
	console.log(i);
	i++;
}

//perulangan do while
var x = 1;
do{
	console.log(x);
}
while(x < 10)

//perulangan bersarang (nested loop)
for (var d = 0; d < 3; d++){
	console.log("d ke", d)
	for(var f = 0; f < 2; d++){
		console.log("f ke", f)
	}
	console.log("");
}

//break and continue
for(var i=0;i<=10;i++){
	console.log(i);
	if(i == 5){
		break;
	}
	else if( i == 6){
		continue;
	}
	else {
		console.log(" ");
	}
}
