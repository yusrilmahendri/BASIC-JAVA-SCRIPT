function tes() {
    var data = {
        nama: "yusril",
        jurusan: "informatika",
        angkatan: 2018,
        nilai: [50, 60, 80]
    }

    console.log(data.nama)
    console.log(" nilai ujian terakhir anda : ", data.nilai[2])

    data.angkatan = "Teknik Informatika";
    console.log(data)
}
tes()