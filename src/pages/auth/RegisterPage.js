export default function RegisterPage() {
    return `
      <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-400 w-full py-4 px-6 flex items-center fixed top-0">
          <a href="#login" class="text-white text-2xl">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <h1 class="text-white text-lg font-semibold ml-4">Daftar Akun</h1>
        </div>
    
        <!-- Registration Form -->
        <div class="bg-white shadow-md rounded-lg w-11/12 max-w-lg p-6 mt-20">
          <form id="registerForm" class="flex flex-col gap-4">
            <!-- Name -->
            <div>
              <label for="name" class="text-sm font-semibold text-gray-600">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama lengkap"
                required
                class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
    
            <!-- Email -->
            <div>
              <label for="email" class="text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email kamu"
                required
                class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
    
            <!-- Phone Number -->
            <div>
              <label for="phone_number" class="text-sm font-semibold text-gray-600">Nomor WhatsApp</label>
              <input
                type="tel"
                id="phone_number"
                placeholder="Masukkan nomor WhatsApp"
                required
                class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
    
            <!-- Password -->
            <div>
              <label for="password" class="text-sm font-semibold text-gray-600">Kata Sandi</label>
              <div class="relative mt-2">
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan kata sandi"
                  required
                  class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  id="togglePassword"
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
    
            <!-- Confirm Password -->
            <div>
              <label for="confirm-password" class="text-sm font-semibold text-gray-600">Konfirmasi Kata Sandi</label>
              <div class="relative mt-2">
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Ulangi kata sandi kamu"
                  required
                  class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  id="toggleConfirmPassword"
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
    
            <!-- Terms & Conditions -->
            <p class="text-xs text-gray-500 mt-2">
              Dengan menekan tombol Daftar, saya menyetujui 
              <a href="#" class="text-blue-400 hover:underline">Syarat & Ketentuan</a> dan 
              <a href="#" class="text-blue-400 hover:underline">Kebijakan Privasi</a>.
            </p>
    
            <!-- Submit Button -->
            <button
              type="submit"
              class="bg-blue-400 text-white py-2 rounded-lg font-medium mt-4 hover:bg-blue-500 transition"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    `;  
  }
  
  export function addRegisterPageEvents() {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerForm = document.getElementById('registerForm');
  
    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePassword.innerHTML = isPassword
        ? '<i class="fa-solid fa-eye-slash"></i>'
        : '<i class="fa-solid fa-eye"></i>';
    });
  
    toggleConfirmPassword.addEventListener('click', () => {
      const isPassword = confirmPasswordInput.type === 'password';
      confirmPasswordInput.type = isPassword ? 'text' : 'password';
      toggleConfirmPassword.innerHTML = isPassword
        ? '<i class="fa-solid fa-eye-slash"></i>'
        : '<i class="fa-solid fa-eye"></i>';
    });
  
    // Handle form submission
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Extract input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone_number = document.getElementById('phone_number').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      // Validate password match
      if (password !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi harus sama!');
        return;
      }
  
      // Simulate registration process
      const userData = {
        name,
        email,
        phone_number,
        password,
      };
      console.log('User Data:', userData);
      alert('Pendaftaran berhasil! Silakan login.');
      window.location.hash = '#login';
    });
  }
  