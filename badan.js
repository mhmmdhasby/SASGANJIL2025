function hitungBMI() {
    
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggiCM = parseFloat(document.getElementById('tinggi').value);
    
    
    if (isNaN(berat) || isNaN(tinggiCM) || berat <= 0 || tinggiCM <= 0) {
        alert('Mohon masukkan angka yang valid untuk Berat dan Tinggi Badan.');
        document.getElementById('nilaiBMI').textContent = '-';
        document.getElementById('kategoriBMI').textContent = '-';
        return;
    }
    
    
    const tinggiMeter = tinggiCM / 100;
    
    
    const bmi = berat / (tinggiMeter * tinggiMeter);
    
    
    let kategori = '';
    if (bmi < 18.5) {
        kategori = 'Kurus (Kekurangan berat badan)';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = 'Normal (Ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        kategori = 'Kelebihan berat badan (Pre-obesitas)';
    } else {
        kategori = 'Obesitas';
    }
    
    
    document.getElementById('nilaiBMI').textContent = bmi.toFixed(2); // 
    document.getElementById('kategoriBMI').textContent = kategori;
}