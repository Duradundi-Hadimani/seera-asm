console.log("main.js loaded");

// Get the base URL from config.js
const baseURL = window.FRAPPE_BASE_URL;

// Test pinging the Frappe backend
fetch(`${baseURL}/api/method/ping`)
  .then(res => res.json())
  .then(data => {
    // Show API response in the app container
    document.getElementById('app').innerHTML =
      `<h3>✅ Connected to the site</h3><pre>${JSON.stringify(data, null, 2)}</pre>`;
  })
  .catch(err => {
    document.getElementById('app').innerHTML =
      `<h3>❌ API Connection Failed</h3><pre>${err}</pre>`;
  });
