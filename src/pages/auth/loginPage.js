export default function LoginPage() {
    return `
      <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
        <!-- Logo Section -->
        <div class="flex flex-col items-center mb-8">
          <div class="flex items-center gap-2 text-blue-400 text-4xl font-bold">
            <i class="fa-solid fa-utensils"></i>
            <span>SisaSaji</span>
          </div>
          <p class="text-sm text-gray-500 mt-2">Berbagi makanan, berbagi kebahagiaan</p>
        </div>
  
        <!-- Login Box -->
        <div class="w-11/12 max-w-sm bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-lg font-semibold text-gray-700 mb-6">Masuk ke Akun Anda</h2>
          <form id="loginForm" class="flex flex-col gap-4">
            <!-- Email Input -->
            <div>
              <label for="email" class="text-sm font-semibold text-gray-600">EMAIL</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email kamu"
                required
                class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <!-- Password Input -->
            <div>
              <label for="password" class="text-sm font-semibold text-gray-600">Kata Sandi</label>
              <div class="relative mt-2">
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan kata sandi kamu"
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
            <!-- Forgot Password -->
            <a href="#forgot-password" class="text-sm text-blue-400 hover:underline mt-1">Lupa Password?</a>
            <!-- Submit Button -->
            <button
              type="submit"
              class="bg-blue-400 text-white font-medium py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Masuk
            </button>
          </form>
          <!-- Register Link -->
          <p class="text-sm text-center text-gray-600 mt-4">
            Belum punya akun?
            <a href="#register" class="text-blue-400 hover:underline">Daftar sekarang</a>
          </p>
        </div>
      </div>
    `;
  }
  
  export function addLoginPageEvents() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
  
    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePassword.innerHTML = isPassword
        ? '<i class="fa-solid fa-eye-slash"></i>'
        : '<i class="fa-solid fa-eye"></i>';
    });
  
    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Simulate login process
      if (email && password) {
        localStorage.setItem('accessToken', 'dummy-access-token');
        localStorage.setItem('refreshToken', 'dummy-refresh-token');
        alert('Login berhasil!');
        window.location.hash = '#dashboard'; // Redirect to dashboard
      } else {
        alert('Harap isi email dan kata sandi!');
      }
    });
  }
  