export default function DashboardPage() {
    return `
      <div class="flex flex-col h-screen">
        <!-- Header -->
        <div class="bg-blue-400 p-4 flex justify-between items-center">
          <h2 class="text-white text-2xl font-bold">SisaBagi</h2>
          <div class="flex gap-4">
            <!-- Notifications -->
            <a href="#inbox" class="text-white">
              <i class="fa-solid fa-bell text-white text-2xl"></i>
            </a>
            <!-- Profile -->
            <a href="#profil" class="text-white">
              <i class="fa-solid fa-user text-white text-2xl"></i>
            </a>
          </div>
        </div>
  
        <!-- Welcome Section -->
        <div class="bg-blue-100 p-4">
          <p class="text-lg font-medium">Hai, <strong>Budi</strong></p>
        </div>
  
        <!-- Notification Box -->
        <div class="bg-blue-300 text-white p-4 rounded-md mx-4 mt-4 flex items-center shadow-md">
          <i class="fa-solid fa-location-dot text-3xl mr-4"></i>
          <div>
            <p class="font-bold text-lg">Mencari Rezeki Terdekat?</p>
            <p class="text-sm">Lakukan pelacak yang membutuhkan pahala.</p>
          </div>
        </div>
  
        <!-- Menu -->
        <div class="grid grid-cols-2 gap-4 px-4 mt-6">
          <!-- Jemput Rezeki -->
          <a href="#jemput-rezeki" class="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200">
            <i class="fa-solid fa-map-marker-alt text-gray-400 text-4xl"></i>
            <p class="text-gray-500 mt-2 font-medium">Jemput Rezeki</p>
          </a>
          <!-- Berbagi Rezeki -->
          <a href="#berbagi-rezeki" class="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200">
            <i class="fa-solid fa-hand-holding-heart text-gray-400 text-4xl"></i>
            <p class="text-gray-500 mt-2 font-medium">Berbagi Rezeki</p>
          </a>
        </div>
  
        <!-- Footer -->
        <div class="bg-white border-t border-gray-200 flex justify-between items-center py-2 px-4 fixed bottom-0 w-full">
          <!-- Dashboard -->
          <a href="#dashboard" class="flex flex-col items-center text-blue-400">
            <i class="fa-solid fa-home text-2xl"></i>
            <p class="text-xs">Beranda</p>
          </a>
          <!-- Inbox -->
          <a href="#inbox" class="flex flex-col items-center text-gray-400">
            <i class="fa-solid fa-envelope text-2xl"></i>
            <p class="text-xs">Inbox</p>
          </a>
          <!-- Profile -->
          <a href="#profil" class="flex flex-col items-center text-gray-400">
            <i class="fa-solid fa-user text-2xl"></i>
            <p class="text-xs">Profil</p>
          </a>
        </div>
      </div>
    `;
}

export function addDashboardPageEvents() {
    // Add click listeners to navigate to the profile and inbox
    document.querySelectorAll('.bg-white a').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = link.getAttribute('href');
            window.location.hash = target; // Update the URL hash
            console.log(`Navigasi ke ${target}`);
        });
    });
}
