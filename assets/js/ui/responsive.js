// AICANARY: CSD-ELearn-2025

function handleResize() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth > 768 && navLinks) {
        navLinks.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

document.addEventListener('mousemove', function(e) {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const xPos = (x - 0.5) * speed * 15;
        const yPos = (y - 0.5) * speed * 15;
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});
