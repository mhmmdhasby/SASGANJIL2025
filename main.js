function hitung() {
  
  // menampung nilai harga
  let harga = Number(document.getElementById("harga").value)
  
  // menampung nilai jumlah
  let jumlah = Number(document.getElementById("jumlah").value)
  // menampung nilai diskon
  let diskon = Number(document.getElementById("diskon").value)
  
  // langkah 1: hitung subtotal
  let subtotal = harga * jumlah
  
  // langkah 2: menghitung diskon
  let potongan = subtotal * (diskon / 100)
  
  // langkah 3: menghitung pajak misal 11%
  let pajak = subtotal * (11 / 100)
  
  
  // langkah 4: hitung total
  let total = subtotal - potongan + pajak
  
  // langkah 5: menampilkan hasil
  document.getElementById("hasil").innerHTML = `
Subtotal: Rp ${subtotal} <br>
diskon(${diskon}%):-Rp ${potongan}<br>
pajak(11%) : +Rp ${pajak} <br>
Total Bayar :Rp ${total}
`
}