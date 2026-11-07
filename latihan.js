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




class siswa {
constructor(nama, nis, jurusan) {
    this.nama = nama;
    this.nis = nis;
    this.jurusan = jurusan;
}

    siswa() {
        console.log(`siswa ${this.nama} dengan nis ${this.nis} jurusan ${this.jurusan}`);
    }

    siswa () {
        this.nama += 1;
        console.log(`siswa ${this.nama}, ${this.nis}, ${this.jurusan} `);
    }
}

const siswa1 = new siswa("Atha", "12345", "Rpl");
const siswa2 = new siswa("Dika", "12345", "Rpl");
const siswa3 = new siswa("kenzie", "12345", "Rpl");
const siswa4 = new siswa("rasya", "12345", "Rpl");

// console.log(siswa1);
// siswa1.siswa();
// siswa1.siswa();

// console.log(siswa2);
// siswa2.siswa();
// siswa2.siswa();

// console.log(siswa3);
// siswa3.siswa();
// siswa3.siswa();

// console.log(siswa4);
// siswa4.siswa();
siswa4.siswa();
siswa3.siswa();
siswa2.siswa();
siswa1.siswa();
// console.log(siswa);

// function kendaraan(){
//     console.log(siswa);
    
// }

// kendaraan()
const form = document.getElementById("forminput");
const listSiswa = document.getElementById("listsiswa");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const nis = Number(document.getElementById("nis").value);
    const jurusan = document.getElementById("jurusan").value;
    
    const siswa1 = new siswa(nama, nis, jurusan);

    const listItem = document.createElement("li");
    listItem.textContent = `Nama: ${siswa1.nama}, NIS: ${siswa1.nis}, Jurusan: ${siswa1.jurusan}`;
    listSiswa.appendChild(listItem);

});