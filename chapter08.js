//ubah property
function tas() {
    var mobil = {
        type: 'sedan',
        harga: 1000,
    };

    mobil.type = 'kijang';
    console.log(mobil)
}
tas();

//fungsi di dalam object
function fungsiObject() {
    var x = {
        pesan: hallo(),
    }
    console.log(x.pesan);
}

function hallo() {
    return "Hello, Wolrd!";
}
fungsiObject();

//nested object
function nestedObject() {
    var mahasiswa = {
        nama: 'Yusril Mahendri',
        ipk: {
            semester1: 3.0,
            semester2: 3.3,
            semester3: 3.5,
            semester4: 3.8,
            semester5: 4.0,

        }
    }
    console.log(mahasiswa.nama);
    console.log(mahasiswa.ipk.semester2);
}
nestedObject();

//menampilkan object di dalam perulangan for in
function panggilObject() {
    var siswa = {
        nama: 'Yusril Iza Mahendri',
        nim: 1800018397,
        semester: 7,
    }
    for (var x in siswa) {
        console.log(siswa[x]);
    }
}
panggilObject();