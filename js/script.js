
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        if (icon.querySelector('p').innerText === 'Mobile') {
            alert('Calling mobile...');
        }
        // Add other actions as needed
    });
});
document.getElementById('save-contact').addEventListener('click', () => {
    alert('Contact information saved successfully!');
});

