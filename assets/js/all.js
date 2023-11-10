// Tentukan panjang maksimum teks yang diizinkan
var maxLength = 150;

// Pilih semua elemen dengan kelas "card-text"
var elementsToTruncate = document.querySelectorAll(".card-text");

// Lakukan perulangan untuk setiap elemen
for (var i = 0; i < elementsToTruncate.length; i++) {
  var cardTextElement = elementsToTruncate[i];

  // Periksa apakah panjang teks melebihi maxLength
  if (cardTextElement.textContent.length > maxLength) {
    // Potong teks sesuai dengan maxLength
    var truncatedText = cardTextElement.textContent.substring(0, maxLength);

    // Tambahkan titik tiga jika ada pemotongan
    if (truncatedText.length < cardTextElement.textContent.length) {
      truncatedText += "...";
    }

    // Perbarui teks pada elemen
    cardTextElement.textContent = truncatedText;
  }
}

// Tambahkan event listener untuk menampilkan tombol "Kembali ke atas" saat gulir halaman
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  // Tambahkan event listener untuk menggulir halaman ke atas saat tombol diklik
  button.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Tentukan jumlah kartu yang ditampilkan awalnya
var displayedCards = 6;

// Tentukan jumlah kartu yang ditampilkan awalnya
var displayedCards = 6;

// Dapatkan elemen tombol "Muat Lebih Banyak"
var loadMoreButton = document.getElementById("load-more-button");
var allCards = document.querySelectorAll('div.col-12.col-md-6.col-lg-4.mb-5');

// Fungsi untuk memuat lebih banyak kartu
function loadMoreCards() {
  for (var i = displayedCards; i < displayedCards + 6; i++) {
    if (i < allCards.length) {
      allCards[i].style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
      break;
    }
  }
  displayedCards += 6;

  // Periksa apakah semua kartu telah ditampilkan
  if (displayedCards >= allCards.length) {
    loadMoreButton.style.display = "none";
  }
}

// Sembunyikan kartu-kartu yang tidak ditampilkan pada awalnya
for (var i = displayedCards; i < allCards.length; i++) {
  allCards[i].style.display = "none";
}

// Tambahkan event listener pada tombol "Muat Lebih Banyak" untuk memicu fungsi loadMoreCards
loadMoreButton.addEventListener("click", loadMoreCards);

// Dapatkan elemen navbar
var navbar = document.getElementById("navbar-main");

var lastScrollTop = 0;

// Tambahkan event listener untuk mendeteksi saat pengguna menggulir halaman
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Periksa arah scroll (ke atas atau ke bawah)
  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.transform = "translateY(-100%)"; // Sembunyikan navbar
  } else {
    // Scroll up
    navbar.style.transform = "translateY(0)"; // Tampilkan kembali navbar
  }

  lastScrollTop = scrollTop;
});
