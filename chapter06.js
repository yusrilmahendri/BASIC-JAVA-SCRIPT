//nested array (array di dalam array) 

function rey(){
	var data = [["ab1","ac1","ad1"],
	            ["ab2","ac2","ad2"],
	            ["ab3","ac3","ad3"],]

	console.log(data.length);
	console.log(data[1][2])
}
rey()

//array dalam perulangan
var x = [1,2,3,4,5];
for(var i=0; i < x.length; i++){
	console.log(x[i]);

//perulangan for of
var angka = [0,1,2,3,4,5,6,9];
for(let nilai of angka){
	console.log(nilai);
}