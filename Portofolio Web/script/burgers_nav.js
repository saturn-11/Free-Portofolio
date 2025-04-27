function toggleMenu() {
   const navLinks = document.querySelector('.nav-links');
   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
document.addEventListener("DOMContentLoaded", function() {
   const highlight = document.querySelector('.highlight');
   highlight.classList.add('typing-animation');
});