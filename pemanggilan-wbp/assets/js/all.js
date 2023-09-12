var isSuaraBerlangsung = false;
var currentOptionIndex = -1;

function cariNama() {
  var searchText = document.getElementById("search").value.toLowerCase();
  var options = document.getElementById("namaSelect").options;

  for (var i = currentOptionIndex + 1; i < options.length; i++) {
    var nama = options[i].value.toLowerCase();
    if (nama.includes(searchText)) {
      document.getElementById("namaSelect").selectedIndex = i;
      currentOptionIndex = i;
      return;
    }
  }

  for (var i = 0; i <= currentOptionIndex; i++) {
    var nama = options[i].value.toLowerCase();
    if (nama.includes(searchText)) {
      document.getElementById("namaSelect").selectedIndex = i;
      currentOptionIndex = i;
      return;
    }
  }

  showNotification("Nama tidak ditemukan.", true);
}

function ubahKecepatanSuara() {
  var slider = document.getElementById("kecepatanSuara");
  var label = document.getElementById("kecepatanSuaraLabel");
  var kecepatan = slider.value;
  label.innerText = "Kecepatan Suara: " + kecepatan + "x";
}

function ubahStatusPanggil(isBerlangsung) {
  isSuaraBerlangsung = isBerlangsung;
  var panggilButton = document.getElementById("panggilButton");
  panggilButton.disabled = isBerlangsung;
}

function panggilSuara() {
  if (!isSuaraBerlangsung) {
    var selectedOption = document.getElementById("namaSelect");
    var nama = selectedOption.options[selectedOption.selectedIndex].value;
    var panggilButton = document.getElementById("panggilButton");

    if (selectedOption.selectedIndex === 0) {
      showNotification("Pilih nama terlebih dahulu!", true);
    } else if (nama !== "") {
      var panggilan = "WBP Atas Nama " + nama + " Dibesuk";
      var speech = new SpeechSynthesisUtterance(panggilan);

      var kecepatanSuara = document.getElementById("kecepatanSuara").value;
      speech.rate = parseFloat(kecepatanSuara);

      panggilButton.classList.add("panggil-button-spin");

      ubahStatusPanggil(true);

      speechSynthesis.speak(speech);

      speech.onend = function (event) {
        panggilButton.classList.remove("panggil-button-spin");
        ubahStatusPanggil(false);
      };
    }
  }
}

var slider = document.getElementById("kecepatanSuara");
slider.addEventListener("input", ubahKecepatanSuara);

function showNotification(message, isError = false) {
  var notification = document.getElementById("notification");
  notification.innerText = message;
  notification.classList.remove("error-notification");

  if (isError) {
    notification.classList.add("error-notification");
  }

  notification.style.display = "block";

  var notificationSound = document.getElementById("notification-sound");
  notificationSound.play();

  setTimeout(function () {
    notification.style.display = "none";
  }, 3000);
}

function updateSelectOptions() {
  var input, filter, select, option, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toLowerCase();
  select = document.getElementById("namaSelect");
  option = select.getElementsByTagName("option");

  for (i = 0; i < option.length; i++) {
    txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }

  for (i = 0; i < option.length; i++) {
    if (option[i].style.display === "") {
      select.selectedIndex = i;
      break;
    }
  }
}

document.getElementById("search").addEventListener("input", updateSelectOptions);

var audio = new Audio("https://cdn.jsdelivr.net/gh/eliyantosarage/pemanggilan-wbp@main/assets/audio/attention.wav");
var isAudioBermain = false;

function putarAudio() {
  if (!isAudioBermain) {
    audio.play();
    isAudioBermain = true;
    document.getElementById("volumeButton").classList.add("panggil-button-spin");

    audio.onended = function () {
      isAudioBermain = false;
      document.getElementById("volumeButton").classList.remove("panggil-button-spin");
    };
  }
}

function alarmSuara() {
  var selectedOption = document.getElementById("namaSelect");
  var nama = selectedOption.options[selectedOption.selectedIndex].value;
  var alarmButton = document.getElementById("alarmButton");

  if (selectedOption.selectedIndex === 0) {
    showNotification("Pilih nama terlebih dahulu!", true);
  } else if (nama !== "") {
    var panggilan = "Pengunjung WBP Atas Nama " + nama + " . Waktu Kunjungan Anda Telah Habis. Terima Kasih";
    var speech = new SpeechSynthesisUtterance(panggilan);

    var kecepatanSuara = document.getElementById("kecepatanSuara").value;
    speech.rate = parseFloat(kecepatanSuara);

    alarmButton.classList.add("panggil-button-spin");

    ubahStatusPanggil(true);

    speechSynthesis.speak(speech);

    speech.onend = function (event) {
      alarmButton.classList.remove("panggil-button-spin");
      ubahStatusPanggil(false);
    };
  }
}
