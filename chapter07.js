//object 
function panggil() {
    var mobil = {
        type: 'sedan',
        harga: 1000,
        warna: 'biru',

        // array dalam object
        tahun: [2001, 2000, 2003, 2005]
    }

    console.log(mobil)
    console.log(mobil.harga)
    console.log(mobil.tahun[1])

    //object property
    panggil.warna = "pink";
    console.log(panggil)

    //tambah property object
    panggil.harga = 1000;
    console.log(panggil)
}
panggil()