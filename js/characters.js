// Characters data and functionality
const charactersData = [
  {
    id: 1,
    name: "Totoro",
    from: "My Neighbor Totoro",
    image: "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg"
  },
  {
    id: 2,
    name: "No-Face",
    from: "Spirited Away",
    image: "https://images.pexels.com/photos/17897567/pexels-photo-17897567/free-photo-of-a-figurine-of-no-face-on-a-green-background.jpeg"
  },
  {
    id: 3,
    name: "Princess Mononoke",
    from: "Princess Mononoke",
    image: "https://images.pexels.com/photos/12733076/pexels-photo-12733076.jpeg"
  },
  {
    id: 4,
    name: "Howl",
    from: "Howl's Moving Castle",
    image: "https://images.pexels.com/photos/7607474/pexels-photo-7607474.jpeg"
  },
  {
    id: 5,
    name: "Kiki",
    from: "Kiki's Delivery Service",
    image: "https://images.pexels.com/photos/5227861/pexels-photo-5227861.jpeg"
  },
  {
    id: 6,
    name: "Ponyo",
    from: "Ponyo",
    image: "https://images.pexels.com/photos/2344572/pexels-photo-2344572.jpeg"
  },
  {
    id: 7,
    name: "Jiji",
    from: "Kiki's Delivery Service",
    image: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg"
  },
  {
    id: 8,
    name: "Calcifer",
    from: "Howl's Moving Castle",
    image: "https://images.pexels.com/photos/2748134/pexels-photo-2748134.jpeg"
  }
];

export function loadCharacters() {
  const carouselContainer = document.querySelector('.carousel-container');
  
  // Create and append character cards
  charactersData.forEach(character => {
    const characterCard = createCharacterCard(character);
    carouselContainer.appendChild(characterCard);
  });
  
  // Set up carousel navigation
  setupCarouselNavigation();
}

// Create an individual character card
function createCharacterCard(character) {
  const characterCard = document.createElement('div');
  characterCard.className = 'character-card';
  
  characterCard.innerHTML = `
    <div class="character-image">
      <img src="${character.image}" alt="${character.name}">
    </div>
    <div class="character-info">
      <h3 class="character-name">${character.name}</h3>
      <p class="character-from">${character.from}</p>
    </div>
  `;
  
  return characterCard;
}

// Set up carousel navigation
function setupCarouselNavigation() {
  const container = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const cards = document.querySelectorAll('.character-card');
  
  let currentIndex = 0;
  const cardWidth = 250; // Width + gap
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, cards.length - visibleCards);
  
  // Update visible cards count on window resize
  window.addEventListener('resize', () => {
    const newVisibleCards = getVisibleCardsCount();
    if (newVisibleCards !== visibleCards) {
      const maxIndex = Math.max(0, cards.length - newVisibleCards);
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
        updateCarouselPosition();
      }
    }
  });
  
  // Previous button click
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
    }
  });
  
  // Next button click
  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarouselPosition();
    }
  });
  
  // Update carousel position
  function updateCarouselPosition() {
    const position = -currentIndex * cardWidth;
    container.style.transform = `translateX(${position}px)`;
  }
  
  // Get number of visible cards based on viewport width
  function getVisibleCardsCount() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 480) return 1;
    if (viewportWidth < 768) return 2;
    if (viewportWidth < 992) return 3;
    return 4;
  }
}