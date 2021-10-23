// fungsi 
//metode penulisan lama
function JalanSatu(){
	console.log('jalan satu');
}

const jalanDua = function (){
	console.log("jalan dua");
}

//metode penulisan baru
const jalanTiga = () => {
	console.log("jalan tiga");
}

//cara jalankan fungsi 
JalanSatu()
jalanDua()
jalanTiga()


//mengambalikan nilai fungsi 
function ambil(){
	return 'terambil';
}
console.log(ambil());

function lempar(){
	var lem = "ditangkap";

	return lem;
}
var temp = lempar();
console.log(temp);

//argument atau prameter di fungsi 
function data(x,y){
	console.log(x);
	console.log(y);
}
data("nilai anda",10)

//default pada fungsi
function dataKu(z = 10){
    console.log(z);
}
dataKu();





