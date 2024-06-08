document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');
    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = '👁️‍🗨️';
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = '👁️';
    }
});