import '../styles/tailwind.css';
import '../styles/main.scss'; // Pastikan path menuju file SCSS Anda benar
// Import halaman
import LoginPage, { addLoginPageEvents } from '../pages/auth/loginPage';
import RegisterPage, { addRegisterPageEvents } from '../pages/auth/RegisterPage';
import DashboardPage, { addDashboardPageEvents } from '../pages/dashboard/DashboardPage';
import BerbagiRezekiPage, { addBerbagiPageEvents } from '../pages/donasi/BerbagiPage';
import JemputRezekiPage, { addJemputRezekiPageEvents } from '../pages/rezeki/JemputRezekiPage';
import DetailBerbagiPage, { addDetailBerbagiPageEvents } from '../pages/donasi/DetailBerbagiPage';
import TambahBerbagiPage, { addTambahBerbagiPageEvents } from '../pages/donasi/TambahBerbagiPage';
import DaftarPeminatPage, { addDaftarPeminatPageEvents }  from '../pages/donasi/DaftarPeminatPage';
import IkhtiarRezekiPage, { addIkhtiarRezekiPageEvents } from '../pages/rezeki/IkhtiarRezekiPage';
import ProfilePage, { addProfilePageEvents } from '../pages/profil/ProfilPage';
import InboxPage, { addInboxPageEvents } from '../pages/inbox/InboxPage';


// Fungsi untuk memeriksa autentikasi
function isAuthenticated() {
  const token = localStorage.getItem('accessToken');
  return !!token; // True jika token ada, false jika tidak
}

// Halaman yang diizinkan tanpa autentikasi
const publicRoutes = ['#login', '#register'];


function renderPage() {
  const app = document.getElementById('app');
  const hash = window.location.hash || '#login';

  if (!isAuthenticated() && !publicRoutes.includes(hash)) {
    window.location.hash = '#login';
    return renderPage();
  }

  if (isAuthenticated() && publicRoutes.includes(hash)) {
    window.location.hash = '#dashboard';
    return renderPage();
  }

  switch (hash) {
    case '#login':
      app.innerHTML = LoginPage();
      addLoginPageEvents();
      break;
    case '#register':
      app.innerHTML = RegisterPage();
      addRegisterPageEvents();
      break;
    case '#dashboard':
      app.innerHTML = DashboardPage();
      addDashboardPageEvents();
      break;
    case '#berbagi-rezeki':
      app.innerHTML = BerbagiRezekiPage();
      addBerbagiPageEvents();
      break;
    case '#jemput-rezeki':
      app.innerHTML = JemputRezekiPage();
      addJemputRezekiPageEvents();
      break;
    case '#detail-berbagi':
      app.innerHTML = DetailBerbagiPage();
      addDetailBerbagiPageEvents();
      break;
    case '#daftar-peminat':
      app.innerHTML = DaftarPeminatPage();
      addDaftarPeminatPageEvents();
      break;
    case '#ikhtiar-rezeki':
      app.innerHTML = IkhtiarRezekiPage();
      addIkhtiarRezekiPageEvents();
      break;
    case '#profil':
      const userData = {
        status: 'success',
        data: {
          user: {
            email: 'user4@example.com',
            name: 'User Example',
            phone_number: '08123456789',
          },
        },
      };
      app.innerHTML = ProfilePage(); // Render the ProfilePage
      addProfilePageEvents(userData); // Add events with the user data
      break;
    case '#inbox':
      const inboxData = {
        status: "success",
        data: {
          notifications: [
            {
              id: 2,
              user_id: 1,
              message: 'Permohonan Anda untuk donasi "Donasi Buku" telah diterima.',
              is_read: false,
              related_donation_request_id: 1,
              created_at: '2024-12-06T09:42:38.015Z',
            },
          ],
        },
      };
      app.innerHTML = InboxPage(inboxData);
      addInboxPageEvents();
    break;
    default:
      app.innerHTML = '<h1>404 Page Not Found</h1>';
      break;
  }
}


// Listener untuk perubahan hash
window.addEventListener('hashchange', renderPage);

// Render halaman pertama kali
renderPage();



// Listener untuk perubahan hash
window.addEventListener('hashchange', renderPage);

// Render halaman pertama kali
renderPage();
