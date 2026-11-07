// const mobil = {
//     merk: "Toyota",
//     model: "Camry",
//     tahun: "2020", 

//     nyalakanMesin: function() {
//         console.log("mesin dinyalakan");
        
//     }
// };

// console.log(mobil.merk);
// mobil.nyalakanMesin()




class mobil {
constructor(merek, warna, tahun) {
    this.merek = merek;
    this.warna = warna;
    this.tahun = tahun;
    this.kecepatan = 0;
}

    nyalakanMesin() {
        console.log(`mesin ${this.merek} dinyalakan`);
    }

    jalankan () {
        this.kecepatan += 10;
        console.log(`mobil ${this.merek} sedang berjalan dengan kecepatan ${this.kecepatan} km/jam`);
    }
}

const mobil1 = new mobil("Toyota", "hitam", "2020");
const mobil2 = new mobil("Honda", "putih", "2021");

console.log(mobil1);
mobil1.nyalakanMesin();
mobil1.jalankan();

console.log(mobil2);
mobil2.nyalakanMesin();
mobil2.jalankan();
// console.log(mobil);

// function kendaraan(){
//     console.log(mobil);
    
// }

// kendaraan()