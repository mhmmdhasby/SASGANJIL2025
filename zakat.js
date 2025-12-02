const NISAB_BULANAN = 7140498;
const PERSENTASE_ZAKAT = 0.025;


function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}


function hitungZakat() {
    
    const penghasilan = parseFloat(document.getElementById('penghasilan').value) || 0;
    const pengeluaran = parseFloat(document.getElementById('pengeluaran').value) || 0;
    
    
    if (penghasilan < 0 || pengeluaran < 0) {
        alert('Penghasilan dan Pengeluaran tidak boleh bernilai negatif.');
        return;
    }
    
    
    const penghasilanBersih = penghasilan - pengeluaran;
    
    let status = '';
    let zakatDibayarkan = 0;
    let statusElement = document.getElementById('resStatus');
    
    if (penghasilanBersih >= NISAB_BULANAN) {
        
        status = 'WAJIB ZAKAT';
        zakatDibayarkan = penghasilanBersih * PERSENTASE_ZAKAT;
        statusElement.className = 'wajib-zakat';
    } else {
        
        status = 'TIDAK WAJIB ZAKAT (Penghasilan Bersih di bawah Nisab)';
        zakatDibayarkan = 0;
        statusElement.className = 'tidak-wajib-zakat';
    }
    
    
    document.getElementById('resPenghasilan').textContent = formatRupiah(penghasilan);
    document.getElementById('resPengeluaran').textContent = formatRupiah(pengeluaran);
    document.getElementById('resBersih').textContent = formatRupiah(penghasilanBersih);
    document.getElementById('resStatus').textContent = status;
    
    
    document.getElementById('resZakat').textContent = formatRupiah(zakatDibayarkan);
}


function resetForm() {
    document.getElementById('penghasilan').value = '';
    document.getElementById('pengeluaran').value = '';
    
    
    const defaultText = '-';
    document.getElementById('resPenghasilan').textContent = defaultText;
    document.getElementById('resPengeluaran').textContent = defaultText;
    document.getElementById('resBersih').textContent = defaultText;
    document.getElementById('resStatus').textContent = defaultText;
    document.getElementById('resZakat').textContent = defaultText;
    
    
    document.getElementById('resStatus').className = '';
}