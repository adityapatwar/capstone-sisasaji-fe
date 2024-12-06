export default function ProfilePage() {
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-400 p-4 flex items-center">
          <a href="#dashboard" class="text-white mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold text-white">Profil</span>
        </div>
  
        <!-- Profile Section -->
        <div class="flex flex-col items-center mt-8">
          <!-- Profile Picture -->
          <div class="bg-blue-400 text-white font-bold text-5xl w-24 h-24 flex items-center justify-center rounded-full">
            U <!-- Dynamically set this based on the first letter of the user's name -->
          </div>
          <!-- User Name -->
          <h1 class="text-2xl font-semibold text-gray-800 mt-4">User Example</h1>
          <!-- User Email -->
          <p class="text-sm text-gray-500 mt-2">user4@example.com</p>
          <!-- User Phone Number -->
          <p class="text-sm text-gray-500">08123456789</p>
        </div>
  
        <!-- Profile Details -->
        <div class="mt-8 p-4">
          <!-- Email -->
          <div class="bg-white shadow p-4 rounded-lg flex items-center">
            <i class="fa-solid fa-envelope text-gray-400 text-xl mr-4"></i>
            <div>
              <p class="text-sm text-gray-500">Email</p>
              <p class="text-lg font-medium text-gray-800">user4@example.com</p>
            </div>
          </div>
  
          <!-- Phone Number -->
          <div class="bg-white shadow p-4 rounded-lg flex items-center mt-4">
            <i class="fa-solid fa-phone text-gray-400 text-xl mr-4"></i>
            <div>
              <p class="text-sm text-gray-500">Nomor Telepon</p>
              <p class="text-lg font-medium text-gray-800">08123456789</p>
            </div>
          </div>
  
          <!-- Name -->
          <div class="bg-white shadow p-4 rounded-lg flex items-center mt-4">
            <i class="fa-solid fa-user text-gray-400 text-xl mr-4"></i>
            <div>
              <p class="text-sm text-gray-500">Nama</p>
              <p class="text-lg font-medium text-gray-800">User Example</p>
            </div>
          </div>
        </div>
      </div>
    `;
}

export function addProfilePageEvents(userData) {
    // Ensure the DOM is fully loaded
    setTimeout(() => {
      const profilePicture = document.querySelector('.bg-blue-400.text-white.font-bold');
      const userNameElement = document.querySelector('h1');
      const emailElement = document.querySelector('.bg-white.shadow:nth-of-type(1) p.text-lg');
      const phoneElement = document.querySelector('.bg-white.shadow:nth-of-type(2) p.text-lg');
  
      // Safeguard for null objects
      if (!profilePicture || !userNameElement || !emailElement || !phoneElement) {
        console.error('Elements not found in DOM. Ensure the structure is correct.');
        return;
      }
  
      // Extract user data
      const { email, name, phone_number } = userData.data.user;
  
      // Set Profile Picture Letter
      profilePicture.textContent = name.charAt(0).toUpperCase();
  
      // Update Profile Info
      userNameElement.textContent = name;
      emailElement.textContent = email;
      phoneElement.textContent = phone_number;
    }, 0);
  }
  