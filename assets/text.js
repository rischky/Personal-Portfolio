// Ambil elemen dengan ID "toggleButton" dan elemen dengan kelas "text-box"
const toggleButton = document.getElementById("toggleButton");
const textBox = document.querySelector(".text-box");

// Tambahkan event listener untuk menangani klik pada tombol
toggleButton.addEventListener("click", function () {
  // Toggle kelas "active" pada elemen "text-box"
  textBox.classList.toggle("active");
});
