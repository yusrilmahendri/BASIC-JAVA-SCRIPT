//percabangan(perkondisian)

function jalan(){
	var nilai = 1;
   
	if(nilai === 3){
          console.log("cetak");
	}
	else{
           console.log("tidak cetak");
	}
}

jalan()


//if else if else 
var c = 10;
if (c > 10){
	console.log("lebih besar dari 10");
}
else if(c < 10){
	console.log("lebih kecil dari 10");
}
else {
	console.log("x adalah 10");
}


//nested if else  (if bersarang)
var x = 10;
var y = 20;
var z = 5;

if(x > y){
	if(x > z){
		console.log("X adalah terbesar");
	}else{
		console.log("x kedua terbesar");
	}
}
else {
	if(x < z){
		console.log("x adalah terkecil");
	}
	else {
		console.log("x terkecil kedua");
	}
  }


  //switch 
  function tes(){
  	var n = 10;

  	switch (n){
  		case 10:
  		console.log('nice');
  		break;

  		case 1:
  		console.log('bad');
  		break;

  		case 9:
  		console.log('not so bad');
  		break;

  		default:
  		console.log("not found");
  	}
  }
 tes()