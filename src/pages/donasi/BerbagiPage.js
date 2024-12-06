export default function BerbagiPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white shadow-md flex items-center px-4 py-3">
          <a href="#dashboard" class="text-black mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-2xl"></i>
          </a>
          <span class="text-lg font-semibold">Postingan Donasi Anda</span>
        </div>
  
        <!-- Container -->
        <div class="flex flex-col flex-1 p-4 gap-4 overflow-auto">
          <!-- Item 1 -->
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <div class="relative flex items-center justify-center bg-gray-100 w-12 h-12 rounded-full">
              <i class="fa-solid fa-gift text-2xl text-gray-500"></i>
              <span class="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <div class="ml-4 flex-1">
              <p class="font-semibold text-gray-800">Beras 2Kg</p>
              <p class="text-sm text-gray-500">Bahan Pokok</p>
            </div>
            <i class="fa-solid fa-chevron-right text-gray-600 text-xl"></i>
          </div>
  
          <!-- Item 2 -->
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <div class="relative flex items-center justify-center bg-gray-100 w-12 h-12 rounded-full">
              <i class="fa-solid fa-gift text-2xl text-gray-500"></i>
              <span class="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                5
              </span>
            </div>
            <div class="ml-4 flex-1">
              <p class="font-semibold text-gray-800">Nasi Box</p>
              <p class="text-sm text-gray-500">Makanan Siap Saji</p>
            </div>
            <i class="fa-solid fa-chevron-right text-gray-600 text-xl"></i>
          </div>
  
          <!-- Item 3 -->
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <div class="flex items-center justify-center bg-gray-100 w-12 h-12 rounded-full">
              <i class="fa-solid fa-gift text-2xl text-gray-500"></i>
            </div>
            <div class="ml-4 flex-1">
              <p class="font-semibold text-gray-800">Pakaian Bekas SD</p>
              <p class="text-sm text-gray-500">Barang</p>
            </div>
            <i class="fa-solid fa-chevron-right text-gray-600 text-xl"></i>
          </div>
        </div>
  
        <!-- Floating Action Button -->
        <a href="#tambah-berbagi" class="fixed bottom-6 right-6 bg-blue-400 w-14 h-14 rounded-full shadow-lg flex items-center justify-center">
          <i class="fa-solid fa-plus text-white text-3xl"></i>
        </a>
      </div>
    `;
  }
  
  
  // Fungsi tambahan untuk mengelola event di halaman Berbagi Rezeki
  export function addBerbagiPageEvents() {
    setTimeout(() => {
      const items = document.querySelectorAll('.flex.items-center.bg-white.p-4.rounded-lg.shadow');
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          window.location.hash = '#detail-berbagi';
        });
      });
  
      const addButton = document.querySelector('.fixed.bottom-6.right-6');
      if (addButton) {
        addButton.addEventListener('click', () => {
          window.location.hash = '#tambah-berbagi';
        });
      }
    }, 0);
  }
  
  