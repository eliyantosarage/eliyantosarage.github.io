// Fungsi untuk menambahkan atribut alt dan title secara otomatis pada semua elemen tautan
function tambahkanAltTitleOtomatis() {
    // Ambil semua elemen tautan di halaman
    var semuaTautan = document.getElementsByTagName('a');
  
    // Loop melalui setiap elemen tautan
    for (var i = 0; i < semuaTautan.length; i++) {
      // Ambil teks dari elemen tautan
      var teksLink = semuaTautan[i].innerText;
  
      // Set atribut alt dan title dengan nilai teksLink
      semuaTautan[i].setAttribute('alt', teksLink);
      semuaTautan[i].setAttribute('title', teksLink);
    }
  }
  
  // Panggil fungsi saat halaman selesai dimuat
  document.addEventListener("DOMContentLoaded", function () {
    tambahkanAltTitleOtomatis();
  });
  
  // Menambahkan event listener untuk menangani kejadian DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    // Mengambil semua elemen input dalam dokumen
    var inputElements = document.querySelectorAll('input');
  
    // Iterasi melalui setiap elemen input
    inputElements.forEach(function (input) {
      // Menetapkan atribut autocomplete pada setiap elemen input menjadi 'off'
      input.setAttribute('autocomplete', 'off');
    });
  });