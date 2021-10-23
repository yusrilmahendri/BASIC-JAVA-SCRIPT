 var a = 150;
 var b = 160;
 var y = 145;

function tinggi(){
   if(a <= b){
   	  if(b <= y){
         console.log("siswa b merupakan tinggi badan tertinggi");
   	  }
   	  else if(y >= 160){
   	  	console.log("siswa y merupakan tinggi badan terpendek");
   	  }
   	  else if(a >= b){
   	  	console.log("a merupakan siswa tinggi badan sedang");
   	  }
   }
   else {
   	  if( b >= y){
   	  	console.log(y);
   	  	console.log(a);
   	  	console.log(b);
   	  }
   	  else{
   	  	console.log("not found");
   	  }
   }
}
console.log(tinggi());
