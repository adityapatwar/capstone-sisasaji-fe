document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
  
    // Data dummy untuk validasi
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123";
  
    // Ambil input email dan password
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
  
    // Validasi email dan password
    if (emailInput === correctEmail && passwordInput === correctPassword) {
      // Jika valid, arahkan ke halaman dashboard
      window.location.href = "../page/dashbord.html"; // Ganti dengan URL dashboard
    } else {
      // Jika tidak valid, tampilkan pesan kesalahan
      alert("Email atau kata sandi salah. Silakan coba lagi.");
    }
  });
  
  // Fitur toggle password visibility
  document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  
    // Ubah ikon jika diperlukan (opsional)
    this.textContent = type === 'password' ? '👁️' : '🙈';
  });
  