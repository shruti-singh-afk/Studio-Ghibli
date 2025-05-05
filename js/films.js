
const filmsData = [
  {
    id: 1,
    title: "My Neighbor Totoro",
    year: 1988,
    director: "Hayao Miyazaki",
    description: "Two sisters move to the country with their father to be near their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.",
    poster: "https://i.pinimg.com/1200x/88/d8/3a/88d83a0f7c4f5467efde77ecb033085d.jpg",
    runtime: "86 min",
    genre: "Animation, Family, Fantasy",
    awards: "Animage Anime Grand Prix (1988), Blue Ribbon Award for Best Film (1988)",
    rating: "8.1/10"
  },
  {
    id: 2,
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster: "https://i.pinimg.com/1200x/8e/cc/e9/8ecce9d5c9949dc46630e9d5f9d4bb1b.jpg",
    runtime: "125 min",
    genre: "Animation, Adventure, Family",
    awards: "Academy Award for Best Animated Feature (2003), Golden Bear (2002)",
    rating: "8.6/10"
  },
  {
    id: 3,
    title: "Princess Mononoke",
    year: 1997,
    director: "Hayao Miyazaki",
    description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    poster: "https://i.pinimg.com/1200x/a2/a3/24/a2a324050b8f1211d82b3d11a9ff5a78.jpg",
    runtime: "134 min",
    genre: "Animation, Adventure, Fantasy",
    awards: "Japan Academy Prize for Picture of the Year (1998), Mainichi Film Award for Best Film (1998)",
    rating: "8.4/10"
  },
  {
    id: 4,
    title: "Howl's Moving Castle",
    year: 2004,
    director: "Hayao Miyazaki",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    poster: "https://i.pinimg.com/1200x/c6/b0/0b/c6b00b7e6f5500272339a7fdc59254e7.jpg",
    runtime: "119 min",
    genre: "Animation, Adventure, Family",
    awards: "Mainichi Film Award for Best Animation Film (2004), Tokyo Anime Award (2005)",
    rating: "8.2/10"
  },
  {
    id: 5,
    title: "Kiki's Delivery Service",
    year: 1989,
    director: "Hayao Miyazaki",
    description: "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    poster: "https://i.pinimg.com/1200x/7b/a4/b5/7ba4b50b29893c057a971c4f6442da1b.jpg",
    runtime: "103 min",
    genre: "Animation, Adventure, Drama",
    awards: "Mainichi Film Award for Best Film (1990), Kinema Junpo Award for Best Film (1990)",
    rating: "7.8/10"
  },
  {
    id: 6,
    title: "Castle in the Sky",
    year: 1986,
    director: "Hayao Miyazaki",
    description: "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    poster: "https://i.pinimg.com/1200x/21/50/1e/21501ef51b37addb9862ff0375096d17.jpg",
    runtime: "125 min",
    genre: "Animation, Adventure, Family",
    awards: "Mainichi Film Award for Best Animated Film (1987)",
    rating: "8.0/10"
  },
  {
    id: 7,
    title: "Ponyo",
    year: 2008,
    director: "Hayao Miyazaki",
    description: "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
    poster: "https://i.pinimg.com/1200x/87/1d/b9/871db93efae61081de718c716438b970.jpg",
    runtime: "101 min",
    genre: "Animation, Adventure, Comedy",
    awards: "Japan Academy Prize for Animation of the Year (2009), Asia Pacific Screen Award (2009)",
    rating: "7.7/10"
  },
  {
    id: 8,
    title: "The Wind Rises",
    year: 2013,
    director: "Hayao Miyazaki",
    description: "A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.",
    poster: "https://i.pinimg.com/1200x/47/c4/0a/47c40a8f4b609927419fcad6a144b45a.jpg",
    runtime: "126 min",
    genre: "Animation, Biography, Drama",
    awards: "Japan Academy Prize for Animation of the Year (2014), Blue Ribbon Award for Best Film (2014)",
    rating: "7.8/10"
  }
];

export function loadFilms() {
  const filmsGrid = document.querySelector('.films-grid');
  
  
  filmsData.forEach(film => {
    const filmCard = createFilmCard(film);
    filmsGrid.appendChild(filmCard);
  });
}


function createFilmCard(film) {
  const filmCard = document.createElement('div');
  filmCard.className = 'film-card';
  filmCard.setAttribute('data-film-id', film.id);
  
  filmCard.innerHTML = `
    <div class="film-poster">
      <img src="${film.poster}" alt="${film.title}">
    </div>
    <div class="film-info">
      <h3 class="film-title">${film.title}</h3>
      <p class="film-year">${film.year}</p>
      <p class="film-description">${film.description}</p>
      <p class="film-director">Director: ${film.director}</p>
    </div>
  `;
  
  filmCard.addEventListener('click', () => {
    openFilmModal(film);
  });
  
  return filmCard;
}


function openFilmModal(film) {
  const modal = document.querySelector('.film-modal');
  const modalDetails = modal.querySelector('.modal-details');
  
 modalDetails.innerHTML = `
  <button class="modal-close-btn" aria-label="Close modal">&times;</button>
  <div class="modal-film-header">
    <div class="modal-film-poster">
      <img src="${film.poster}" alt="${film.title}">
    </div>
    <div class="modal-film-info">
      <h2 class="modal-film-title">${film.title}</h2>
      <div class="modal-film-meta">
        <span>${film.year}</span>
        <span>•</span>
        <span>${film.runtime}</span>
        <span>•</span>
        <span>${film.genre}</span>
      </div>
      <p class="modal-film-description">${film.description}</p>
    </div>
  </div>
  <div class="modal-film-details">
    <div class="modal-detail-group">
      <h4>Director</h4>
      <p>${film.director}</p>
    </div>
    <div class="modal-detail-group">
      <h4>Rating</h4>
      <p>${film.rating}</p>
    </div>
    <div class="modal-detail-group">
      <h4>Awards</h4>
      <p>${film.awards}</p>
    </div>
  </div>
`;

  
  // Show modal
  modal.classList.add('active');
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

const closeBtn = modal.querySelector('.modal-close-btn');
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
