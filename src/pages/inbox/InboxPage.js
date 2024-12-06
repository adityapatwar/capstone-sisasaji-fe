export default function InboxPage(data) {
    const { notifications } = data.data;
  
    return `
      <div class="flex flex-col h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-400 p-4 flex items-center">
          <a href="#dashboard" class="text-white mr-4 flex items-center">
            <i class="fa-solid fa-arrow-left text-xl"></i>
          </a>
          <span class="text-lg font-semibold text-white">Inbox</span>
        </div>
  
        <!-- Notifications -->
        <div class="flex-1 p-4 overflow-auto">
          ${notifications
            .map(
              (notification) => `
                <div class="bg-white shadow-md rounded-lg p-4 mb-4">
                  <!-- Date -->
                  <p class="text-xs text-gray-400 mb-2">${new Date(
                    notification.created_at
                  ).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}</p>
                  <!-- Message -->
                  <p class="text-sm text-gray-700">${notification.message}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  
  export function addInboxPageEvents() {
    console.log("Inbox Page Loaded");
  }
  