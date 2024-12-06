export default function DaftarPeminatPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50 relative">
        <!-- Header -->
        <div class="bg-white shadow-md flex items-center px-4 py-3">
          <a href="#dashboard" class="text-black mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold">Daftar Peminat</span>
        </div>
  
        <!-- Content -->
        <div class="flex-1 p-4 overflow-auto">
          <!-- November Section -->
          <div>
            <h3 class="text-sm font-semibold text-gray-500 mb-2">November 2024</h3>
            <div class="bg-white p-4 rounded-lg shadow mb-4 flex items-center item" data-name="Kevin" data-status="Memerlukan Konfirmasi" data-date="28 November 2024, 10:00 WIB" data-message="Saya merasa tidak mampu, kondisi saya saat ini sangat sulit.">
              <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <i class="fa-solid fa-user text-gray-400 text-2xl"></i>
              </div>
              <div class="ml-4 flex-1">
                <p class="font-semibold text-gray-800">Kevin</p>
                <p class="text-sm text-gray-500">Memerlukan Konfirmasi</p>
                <p class="text-xs text-gray-400">28 November 2024, 10:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Overlay -->
        <div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>
  
        <!-- Bottom Modal -->
        <div id="modal" class="fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-lg shadow-lg hidden z-50">
          <h3 class="text-lg font-semibold mb-2" id="modal-name">Permintaan dari</h3>
          <p class="text-sm text-gray-500" id="modal-details"></p>
          <p class="text-sm text-gray-500 mt-4" id="modal-message">Pesan Untuk Anda</p>
          <div class="mt-6 flex gap-4">
            <button id="reject-btn" class="flex-1 bg-white border border-blue-400 text-blue-400 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">Tolak</button>
            <button id="accept-btn" class="flex-1 bg-blue-400 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-500">Terima</button>
          </div>
        </div>
      </div>
    `;
  }
  
  export function addDaftarPeminatPageEvents() {
    // Show modal and overlay on item click
    document.querySelectorAll('.item').forEach((item) => {
      item.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('modal');
        const name = item.dataset.name;
        const status = item.dataset.status;
        const date = item.dataset.date;
        const message = item.dataset.message || 'Tidak ada pesan.';
  
        // Update modal content
        document.getElementById('modal-name').innerText = `Permintaan dari ${name}`;
        document.getElementById('modal-details').innerText = `${date} - ${status}`;
        document.getElementById('modal-message').innerText = message;
  
        // Show modal and overlay
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      });
    });
  
    // Hide modal and overlay on reject or accept
    const overlay = document.getElementById('overlay');
    document.getElementById('reject-btn').addEventListener('click', () => {
      document.getElementById('modal').classList.add('hidden');
      overlay.classList.add('hidden');
    });
    document.getElementById('accept-btn').addEventListener('click', () => {
      document.getElementById('modal').classList.add('hidden');
      overlay.classList.add('hidden');
    });
  
    // Close modal if overlay is clicked
    overlay.addEventListener('click', () => {
      document.getElementById('modal').classList.add('hidden');
      overlay.classList.add('hidden');
    });
  }
  