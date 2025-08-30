document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil nilai form
  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggal").value;
  const genderEls = document.getElementsByName("gender");
  const pesan = document.getElementById("pesan").value.trim();

  let gender = "";
  for (let g of genderEls) {
    if (g.checked) {
      gender = g.value;
    }
  }

  // Validasi
  if (nama === "" || tanggal === "" || gender === "" || pesan === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  // Tampilkan hasil
  const resultBox = document.getElementById("resultBox");
  const now = new Date();
  resultBox.innerHTML = `
    <p><b>Current time:</b> ${now}</p>
    <p><b>Nama:</b> ${nama}</p>
    <p><b>Tanggal Lahir:</b> ${tanggal}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${pesan}</p>
  `;

  // Reset form
  document.getElementById("messageForm").reset();
});