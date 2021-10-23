function latihan() {
    var data = {
        nama: 'yusril mahendri',
        nim: 1800018397,
        ips: {
            semester1: 3,
            semester2: 3.5,
            semester3: 4,
            semester4: 1,
            semester5: 2,
        }
    }
    console.log(data.nama);
    console.log(data.nim);
    console.log(data.ips.semester1);

    for (x in data) {
        console.log(data[x]);
    }
}
latihan()