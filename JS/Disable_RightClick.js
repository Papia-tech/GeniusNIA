// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.addEventListener('keydown', (e) => {
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});