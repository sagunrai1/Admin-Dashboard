// JavaScript code for Modern Admin Dashboard

// Toggle sidebar functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    sidebar.classList.add('open');
  } else {
    sidebar.classList.remove('open');
  }
});

// Search functionality (mock-up)
const searchInput = document.querySelector('.record-search');
const tableRows = document.querySelectorAll('tbody tr');

searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();

  tableRows.forEach(row => {
    const clientName = row.querySelector('.client-info h4').textContent.toLowerCase();
    if (clientName.includes(searchText)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// Add record functionality (mock-up)
const addRecordBtn = document.querySelector('.add button');

addRecordBtn.addEventListener('click', () => {
  alert('Add record functionality is not implemented yet.');
});

// Logout button functionality (mock-up)
const logoutBtn = document.querySelector('.user span.la-power-off');

logoutBtn.addEventListener('click', () => {
  alert('Logging out...');
  // Add actual logout logic here
});
