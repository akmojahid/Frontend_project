// Initialize Bootstrap components
let flashcardModal;
let carousel;
let currentWordList;
let currentCardIndex;

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  flashcardModal = new bootstrap.Modal(document.getElementById('flashcardModal'));
  carousel = new bootstrap.Carousel(document.getElementById('flashcardCarousel'), {
    interval: false,
    wrap: false
  });

  loadFromLocalStorage();
  renderWordLists();
}

function setupEventListeners() {
  // Search functionality
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  // Add new word list
  document.getElementById('saveNewCard').addEventListener('click', handleNewWordList);

  // Known/Unknown buttons
  document.getElementById('knownBtn').addEventListener('click', () => markCard('Known'));
  document.getElementById('unknownBtn').addEventListener('click', () => markCard('Unknown'));

  // Carousel slide event
  document.getElementById('flashcardCarousel').addEventListener('slide.bs.carousel', handleSlide);
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('wordListData');
  if (savedData) {
    wordList.length = 0;
    wordList.push(...JSON.parse(savedData));
  }
}

function saveToLocalStorage() {
  localStorage.setItem('wordListData', JSON.stringify(wordList));
}

function renderWordLists() {
  const container = document.getElementById('wordLists');
  container.innerHTML = '';

  wordList.forEach(list => {
    const card = createWordListCard(list);
    container.appendChild(card);
  });
}

function createWordListCard(list) {
  const col = document.createElement('div');
  col.className = 'col';
  col.innerHTML = `
        <div class="card word-list-card h-100">
            <div class="card-body">
                <h5 class="card-title">${list.listName}</h5>
                <p class="card-text">Cards: ${list.cards.length}</p>
                <button class="btn btn-primary start-btn">Start Learning</button>
            </div>
        </div>
    `;
    
  col.querySelector('.card').addEventListener('click', () => showPrev(list.cards));

  col.querySelector('.start-btn').addEventListener('click', () => showFlashcards(list));
  return col;
}

function showFlashcards(list) {
  currentWordList = list;
  currentCardIndex = 0;

  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.innerHTML = '';

  list.cards.forEach((card, index) => {
    const carouselItem = createCarouselItem(card, index === 0);
    carouselInner.appendChild(carouselItem);
  });

  document.getElementById('flashcardTitle').textContent = list.listName;
  flashcardModal.show();
}

function createCarouselItem(card, isActive) {
  const div = document.createElement('div');
  div.className = `carousel-item ${isActive ? 'active' : ''}`;
  div.innerHTML = `
        <div class="word-title text-center">${card.word}</div>
        <div class="meaning-section">
            <h6>Bengali Meaning:</h6>
            <p>${card.banglaMeaning.join(', ')}</p>
        </div>
        <div class="meaning-section">
            <h6>English Meaning:</h6>
            <p>${card.englishMeaning}</p>
        </div>
        <div class="meaning-section">
            <h6>Examples:</h6>
            <ul class="example-list">
                ${card.examples.map(example => `
                    <li class="example-item">${example}</li>
                `).join('')}
            </ul>
        </div>
        <div class="meaning-section">
            <h6>Similar Words:</h6>
            <div class="similar-words-container">
                ${card.similarWords.map(word => `
                    <span class="similar-word-tag">${word}</span>
                `).join('')}
            </div>
        </div>
    `;
  return div;
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.word-list-card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    card.closest('.col').style.display =
      title.includes(searchTerm) ? 'block' : 'none';
  });
}

function handleNewWordList() {
  const input = document.getElementById('newCardInput');
  const title = document.getElementById('title');

  try {
    let newObj = {
      wordId: wordList.length + 1,
      listName: title.value,
    }
    let data = JSON.parse(input.value)
    newObj.cards = data
    
    wordList.push(newObj)
    saveToLocalStorage();
    renderWordLists();

    console.log('list added')

    showToast('New List aded 🎉', 'success')
    input.value = '';
    title.value = ''
    bootstrap.Modal.getInstance(document.getElementById('addCardModal')).hide();
    
  } catch (error) {
    console.log(error)
    alert('Invalid word list format. Please check your JSON syntax.');
  }
}

function markCard(status) {
  const currentCard = currentWordList.cards[currentCardIndex];
  const targetList = wordList.find(list => list.listName === status);

  // Remove from current list
  currentWordList.cards = currentWordList.cards.filter(card =>
    card.cardId !== currentCard.cardId
  );

  // Add to target list if not already present
  if (!targetList.cards.some(card => card.cardId === currentCard.cardId)) {
    currentCard.lastReviewed = new Date().toISOString().split('T')[0];
    targetList.cards.push(currentCard);
  }

  saveToLocalStorage();
  renderWordLists();

  // Move to next card or close if last card
  if (currentCardIndex < currentWordList.cards.length - 1) {
    carousel.next();
  } else {
    flashcardModal.hide();
  }
}

function handleSlide(event) {
  currentCardIndex = event.to;
}

// ... (previous code remains the same until setupEventListeners)

function setupEventListeners() {
  // Search functionality
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  // Add new word list
  document.getElementById('saveNewCard').addEventListener('click', handleNewWordList);

  // Known/Unknown buttons
  document.getElementById('knownBtn').addEventListener('click', () => {
    markCard('Known');
    showToast('Card marked as Known!', 'success');
  });
  document.getElementById('unknownBtn').addEventListener('click', () => {
    markCard('Unknown');
    showToast('Card marked as Unknown!', 'danger');
  });

  // Carousel slide event
  document.getElementById('flashcardCarousel').addEventListener('slide.bs.carousel', handleSlide);
}

// Add this function to create and show toast notifications
function showToast(message, type = 'success') {
  // Remove existing toast container if any
  const existingToast = document.querySelector('.toast-container');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast container
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';

  // Create toast element
  const toastEl = document.createElement('div');
  toastEl.className = `toast align-items-center text-white bg-${type} border-0`;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');

  // Create toast content
  toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

  // Add toast to container
  toastContainer.appendChild(toastEl);

  // Add container to document
  document.body.appendChild(toastContainer);

  // Initialize and show toast
  const toast = new bootstrap.Toast(toastEl, {
    animation: true,
    autohide: true,
    delay: 2000
  });
  toast.show();

  // Remove toast container after it's hidden
  toastEl.addEventListener('hidden.bs.toast', () => {
    toastContainer.remove();
  });
}

function showPrev(cards) {
      const modalBody = document.querySelector('#previewModal .modal-body');
      modalBody.innerHTML = ''; // Clear previous content

      cards.forEach(card => {
        const cardPreview = document.createElement('div');
        cardPreview.classList.add('card-preview');

        const wordTitle = document.createElement('h4');
        wordTitle.textContent = card.word;

        const banglaMeaning = document.createElement('p');
        banglaMeaning.innerHTML = `<strong>Bangla Meaning:</strong> ${card.banglaMeaning.join(", ")}`;

        const englishMeaning = document.createElement('p');
        englishMeaning.innerHTML = `<strong>English Meaning:</strong> ${card.englishMeaning}`;

        const similarWordsContainer = document.createElement('p');
        similarWordsContainer.innerHTML = `<strong>Similar Words:</strong>`;
        card.similarWords.forEach(word => {
          const tag = document.createElement('span');
          tag.classList.add('similar-word');
          tag.textContent = word;
          similarWordsContainer.appendChild(tag);
        });

        cardPreview.appendChild(wordTitle);
        cardPreview.appendChild(banglaMeaning);
        cardPreview.appendChild(englishMeaning);
        cardPreview.appendChild(similarWordsContainer);

        modalBody.appendChild(cardPreview);
      });

      // Show the modal
      const previewModal = new bootstrap.Modal(document.getElementById('previewModal'));
      previewModal.show();
      
    }
   