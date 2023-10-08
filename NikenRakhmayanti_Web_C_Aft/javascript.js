// Contoh 1: if, else, dan nested if
let angka = 15;

if (angka > 10) {
  console.log("Angka lebih besar dari 10");
} else {
  console.log("Angka kurang dari atau sama dengan 10");
}

// Contoh 2: Nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else if (nilai >= 50) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

// Contoh 3: Penggunaan operator ternary
let usia = 25;
let status;

status = usia >= 18 ? "Dewasa" : "Anak-anak";
console.log("Status: " + status);

// Contoh 1: switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// Contoh 2: switch case dengan ekspresi
let operator = "+";
let hasil;

switch (operator) {
  case "+":
    hasil = 10 + 5;
    break;
  case "-":
    hasil = 10 - 5;
    break;
  default:
    hasil = "Operasi tidak valid";
}

console.log("Hasil operasi: " + hasil);

// Contoh 3: switch case untuk memeriksa jenis data
let data = 100;

switch (typeof data) {
  case "number":
    console.log("Data adalah angka");
    break;
  case "string":
    console.log("Data adalah string");
    break;
  default:
    console.log("Data tidak dikenali");
}

// Contoh 1: for loop untuk mengulang angka
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh 2: for loop untuk mengulang elemen dalam array
let nama = ["Sanji", "Doffy", "Marco"];

for (let i = 0; i < nama.length; i++) {
  console.log("Nama ke-" + (i + 1) + ": " + nama[i]);
}

// Contoh 3: for loop dengan increment yang berbeda
for (let i = 10; i > 0; i -= 2) {
  console.log("Iterasi ke-" + i);
}

// Contoh 1: while loop
let n = 1;

while (n <= 3) {
  console.log("Iterasi while ke-" + n);
  n++;
}

// Contoh 2: do while loop
let m = 1;

do {
  console.log("Iterasi do while ke-" + m);
  m++;
} while (m <= 3);

// Contoh 3: while loop dengan kondisi yang salah dari awal
let p = 10;

while (p < 5) {
  console.log("Iterasi while ke-" + p);
  p++;
}

// Contoh 1: Deklarasi dan pemanggilan fungsi
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(30, 21);
console.log("Hasil penambahan: " + hasilPenambahan);

// Contoh 2: Fungsi tanpa nilai kembali (void)
function sapa(nama) {
  console.log("Halo, " + nama + "!");
}

sapa("Niken");
sapa("Sanji");

// Contoh 3: Fungsi dengan argumen default
function hitungLuasPersegi(panjang = 1, lebar = 1) {
  return panjang * lebar;
}

let luas = hitungLuasPersegi(4, 5);
console.log("Luas persegi: " + luas);

