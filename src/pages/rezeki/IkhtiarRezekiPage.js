export default function IkhtiarRezekiPage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-400 p-4 flex items-center">
          <a href="#dashboard" class="text-white mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold text-white">Jemput Rezeki</span>
        </div>
  
        <!-- Content -->
        <div class="p-4 flex flex-col">
          <!-- Title -->
          <h3 class="text-sm font-semibold text-gray-700 mb-2">DESKRIPSI PERMINTAAN</h3>
          
          <!-- Textarea -->
          <textarea
            placeholder="Ceritakan pada donatur kendala atau keperluan yang ingin kamu sampaikan"
            class="w-full h-32 bg-gray-100 border border-gray-300 rounded-md p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          ></textarea>
          
          <!-- Info Text -->
          <p class="text-sm text-gray-500 mb-6">
            Fitur ini digunakan untuk mengajukan permintaan donasi makanan atau barang yang sedang tersedia di platform. Isi deskripsi dengan kebutuhan Anda, seperti jenis makanan atau barang yang diperlukan, jumlah, dan alasan permintaan.
          </p>
          
          <!-- Submit Button -->
          <button
            class="w-full bg-blue-400 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="submit-request"
          >
            Kirim Permintaan
          </button>
        </div>
      </div>
    `;
  }
  
  export function addIkhtiarRezekiPageEvents() {
    const submitButton = document.getElementById("submit-request");
    submitButton.addEventListener("click", () => {
      alert("Permintaan berhasil dikirim!");
    });
  }
  