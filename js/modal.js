// Modal functionality
export function setupModal() {
  const modal = document.querySelector('.film-modal');
  const modalClose = modal.querySelector('.modal-close');
  
  // Close modal when clicking the close button
  modalClose.addEventListener('click', () => {
    closeModal();
  });
  
  // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal when pressing ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Close modal function
function closeModal() {
  const modal = document.querySelector('.film-modal');
  modal.classList.remove('active');
}