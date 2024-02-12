document.getElementById('passwordForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the password value
    const password = document.getElementById('password').value;

    // Send password to the main process
    window.electron.sendPassword(password);

    // Clear the password field after sending the password
    document.getElementById('password').value = '';
});