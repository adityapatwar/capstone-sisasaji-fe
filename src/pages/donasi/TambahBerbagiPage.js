export default function TambahBerbagiPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white shadow-md flex items-center px-4 py-3">
          <a href="#berbagi-rezeki" class="text-black mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold">Tambah Donasi</span>
        </div>

        <!-- Form Section -->
        <div class="flex-1 p-4 overflow-auto">
          <!-- Image Upload -->
          <div class="mb-6">
            <label class="text-sm font-semibold text-gray-600 block mb-2">Gambar Donasi</label>
            <div class="bg-gray-100 h-32 flex justify-center items-center rounded-md border border-gray-300">
              <i class="fa-solid fa-image text-gray-400 text-5xl"></i>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <label for="file-upload" class="bg-blue-400 text-white px-4 py-2 text-sm font-medium rounded cursor-pointer">
                Choose File
              </label>
              <input id="file-upload" type="file" class="hidden" />
              <span id="file-name" class="text-sm text-gray-600"></span>
              <button id="remove-file" class="text-gray-400 hidden">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
          </div>

          <!-- Nama Donasi -->
          <div class="mb-6">
            <label class="text-sm font-semibold text-gray-600 block mb-2">Nama Donasi</label>
            <input id="nama-donasi" type="text" placeholder="Masukan Judul Donasi"
              class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <p id="nama-error" class="text-sm text-red-500 mt-1 hidden">Nama donasi tidak boleh kosong!</p>
          </div>

          <!-- Jenis Donasi -->
          <div class="mb-6">
            <label class="text-sm font-semibold text-gray-600 block mb-2">Jenis Donasi</label>
            <div class="relative">
              <select id="jenis-donasi"
                class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Pilih Jenis Donasi</option>
                <option value="Bahan Pokok">Bahan Pokok</option>
                <option value="Makanan">Makanan</option>
                <option value="Pakaian">Pakaian</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-3 top-3 text-gray-400"></i>
            </div>
            <p id="jenis-error" class="text-sm text-red-500 mt-1 hidden">Jenis donasi harus dipilih!</p>
          </div>

          <!-- Deskripsi Donasi -->
          <div class="mb-6">
            <label class="text-sm font-semibold text-gray-600 block mb-2">Deskripsi Donasi</label>
            <textarea id="deskripsi-donasi" placeholder="Masukan Deskripsi Donasi"
              class="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <p id="deskripsi-error" class="text-sm text-red-500 mt-1 hidden">Deskripsi tidak boleh kosong!</p>
          </div>

          <!-- Submit Button -->
          <button id="submit-donasi" class="w-full bg-blue-400 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Posting Donasi
          </button>
        </div>
      </div>
    `;
}

export function addTambahBerbagiPageEvents() {
  const fileInput = document.getElementById('file-upload');
  const fileName = document.getElementById('file-name');
  const removeFileBtn = document.getElementById('remove-file');
  const namaDonasi = document.getElementById('nama-donasi');
  const jenisDonasi = document.getElementById('jenis-donasi');
  const deskripsiDonasi = document.getElementById('deskripsi-donasi');
  const submitBtn = document.getElementById('submit-donasi');

  // File upload logic
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      fileName.textContent = file.name;
      removeFileBtn.classList.remove('hidden');
    }
  });

  removeFileBtn.addEventListener('click', () => {
    fileInput.value = '';
    fileName.textContent = '';
    removeFileBtn.classList.add('hidden');
  });

  // Form validation
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!namaDonasi.value.trim()) {
      document.getElementById('nama-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('nama-error').classList.add('hidden');
    }

    if (!jenisDonasi.value) {
      document.getElementById('jenis-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('jenis-error').classList.add('hidden');
    }

    if (!deskripsiDonasi.value.trim()) {
      document.getElementById('deskripsi-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('deskripsi-error').classList.add('hidden');
    }

    if (isValid) {
      alert('Donasi berhasil ditambahkan!');
      window.location.hash = '#berbagi-rezeki';
    }
  });
}
