export default function DetailBerbagiPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-white shadow-md flex items-center px-4 py-3">
          <a href="#berbagi-rezeki" class="text-black mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold">Detail Donasi</span>
          <div class="ml-auto relative">
            <button class="dropdown-toggle">
              <i class="fa-solid fa-ellipsis-vertical text-gray-600 text-2xl"></i>
            </button>
            <div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow hidden dropdown-menu">
              <button class="w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
              <button class="w-full text-left px-4 py-2 hover:bg-gray-100">Nonaktif</button>
            </div>
          </div>
        </div>
  
        <!-- Image Section -->
        <div class="h-56 bg-gray-200 flex justify-center items-center">
          <i class="fa-solid fa-bowl-rice text-gray-500 text-8xl"></i>
        </div>
  
        <!-- Details Section -->
        <div class="flex-1 p-4">
          <!-- Title -->
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">Beras 2Kg</h2>
            <button id="peminat-button" class="bg-blue-400 text-white px-4 py-1 rounded-full text-sm flex items-center">
              Peminat
              <span class="ml-2 bg-yellow-400 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
  
          <!-- Description -->
          <div class="mt-6">
            <h3 class="text-sm font-semibold text-gray-600">Deskripsi</h3>
            <p class="text-sm text-gray-500 mt-1">Berbagi itu Indah.</p>
          </div>
  
          <!-- Additional Info -->
          <div class="mt-6 flex justify-between">
            <div>
              <h3 class="text-sm font-semibold text-gray-600">Dibuat oleh</h3>
              <p class="text-sm text-gray-500 mt-1">Budi</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-600">Tanggal</h3>
              <p class="text-sm text-gray-500 mt-1">28 April 2020, 16:00</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  export function addDetailBerbagiPageEvents() {
    // Dropdown toggle
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdownToggle.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });
  
    // Navigate to Daftar Peminat
    const peminatButton = document.querySelector("#peminat-button");
    peminatButton.addEventListener("click", () => {
      window.location.hash = "#daftar-peminat"; // Redirect to the Daftar Peminat page
    });
  }
  