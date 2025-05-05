// JavaScript Documentdocument.addEventListener('DOMContentLoaded', () => {
  // Get modal and close button elements
  const modal = document.querySelector('.film-modal');
  const closeModalButton = document.querySelector('.modal-close-btn');
  const modalDetails = modal.querySelector('.modal-details');

  // Get all film cards and add event listeners to open modal
  const filmCards = document.querySelectorAll('.film-card');
  filmCards.forEach(card => {
    card.addEventListener('click', () => {
      // Show modal and update content
      modal.classList.add('active');

      const filmTitle = card.querySelector('.film-title').textContent;
      const filmYear = card.querySelector('.film-year').textContent;
      const filmPoster = card.querySelector('.film-poster').src;

      // Update modal content with selected film details
      modalDetails.innerHTML = `
        <h2>${filmTitle}</h2>
        <p>${filmYear}</p>
        <img src="${filmPoster}" alt="${filmTitle}" class="modal-poster">
      `;
    });
  });

  // Close modal when close button is clicked
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
