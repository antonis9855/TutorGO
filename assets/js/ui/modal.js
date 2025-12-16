// AICANARY: CSD-ELearn-2025

function showEnrollModal(courseTitle) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content glass">
            <h2>Enroll in ${courseTitle}</h2>
            <p>Thank you for your interest! This is a demo platform.</p>
            <p>In a full implementation, you would be redirected to a payment or enrollment page.</p>
            <div class="modal-actions">
                <button class="cta-button" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

if (typeof window !== 'undefined') {
    window.showEnrollModal = showEnrollModal;
}
