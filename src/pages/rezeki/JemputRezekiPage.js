export default function JemputRezekiPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-400 p-4 flex items-center">
          <a href="#dashboard" class="text-white mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold text-white">Daftar Rezeki</span>
        </div>
  
        <!-- Content -->
        <div class="p-4">
          <!-- Info Text -->
          <p class="text-sm text-gray-500 mb-4">Menampilkan 100 Rezeki</p>
  
          <!-- Grid of Items -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Item 1 -->
            <div class="item bg-white shadow rounded-lg overflow-hidden relative cursor-pointer">
              <div class="relative h-32 bg-gray-200 flex items-center justify-center">
                <i class="fa-solid fa-bowl-rice text-gray-400 text-5xl"></i>
                <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Stok Habis</span>
              </div>
              <div class="p-2">
                <h3 class="text-sm font-semibold text-gray-800">Sembako Beras Premium 2 Kg</h3>
                <p class="text-xs text-gray-500">Sembako</p>
              </div>
            </div>
  
            <!-- Item 2 -->
            <div class="item bg-white shadow rounded-lg overflow-hidden relative cursor-pointer">
              <div class="relative h-32 bg-gray-200 flex items-center justify-center">
                <i class="fa-solid fa-bowl-rice text-gray-400 text-5xl"></i>
              </div>
              <div class="p-2">
                <h3 class="text-sm font-semibold text-gray-800">Sembako Beras Premium 2 Kg</h3>
                <p class="text-xs text-gray-500">Sembako</p>
              </div>
            </div>
  
            <!-- Additional Items -->
            <div class="item bg-white shadow rounded-lg overflow-hidden relative cursor-pointer">
              <div class="relative h-32 bg-gray-200 flex items-center justify-center">
                <i class="fa-solid fa-bowl-rice text-gray-400 text-5xl"></i>
              </div>
              <div class="p-2">
                <h3 class="text-sm font-semibold text-gray-800">Sembako Beras Premium 2 Kg</h3>
                <p class="text-xs text-gray-500">Sembako</p>
              </div>
            </div>
  
            <div class="item bg-white shadow rounded-lg overflow-hidden relative cursor-pointer">
              <div class="relative h-32 bg-gray-200 flex items-center justify-center">
                <i class="fa-solid fa-bowl-rice text-gray-400 text-5xl"></i>
              </div>
              <div class="p-2">
                <h3 class="text-sm font-semibold text-gray-800">Sembako Beras Premium 2 Kg</h3>
                <p class="text-xs text-gray-500">Sembako</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  export function addJemputRezekiPageEvents() {
    // Add click event to each item
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        window.location.hash = '#ikhtiar-rezeki';
      });
    });
  
    console.log('Jemput Rezeki Page loaded!');
  }
  