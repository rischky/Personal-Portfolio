const toggleButton = document.getElementById("toggleButton");
const textBox = document.querySelector(".text-box");

// Tambahkan event listener untuk menangani klik pada tombol
toggleButton.addEventListener("click", function (event) {
  // Toggle kelas "active" pada elemen "text-box"
  textBox.classList.toggle("active");
  event.stopPropagation(); // Untuk menghentikan event klik dari menyebar ke luar elemen "text-box"
});

// Tambahkan event listener pada dokumen untuk menangani klik di luar "text-box"
document.addEventListener("click", function (event) {
  if (!textBox.contains(event.target) && !toggleButton.contains(event.target)) {
    // Klik terjadi di luar elemen "text-box" dan tombol toggleButton
    textBox.classList.remove("active");
  }
});
