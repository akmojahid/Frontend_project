// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    initializeApp();

    // Event Listeners
    document.getElementById('addCategoryBtn').addEventListener('click', showAddCategoryModal);
    document.getElementById('closeCardBtn').addEventListener('click', hideFlashcard);
    document.getElementById('knowBtn').addEventListener('click', () => markCard('known'));
    document.getElementById('dontKnowBtn').addEventListener('click', () => markCard('unknown'));
    document.getElementById('confirmAddCategory').addEventListener('click', handleAddCategory);
    document.getElementById('cancelAddCategory').addEventListener('click', hideAddCategoryModal);
});

// Initialize the application
function initializeApp() {
    loadFromLocalStorage();
    renderCategories();
    updateProgressTracking();
}

// Local Storage Functions
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('flashcardsData');
    if (savedData) {
        Object.assign(flashcards, JSON.parse(savedData));
    }
}

function saveToLocalStorage() {
    localStorage.setItem('flashcardsData', JSON.stringify(flashcards));
}

// Render Functions
function renderCategories() {
    const categoriesList = document.getElementById('categoriesList');
    categoriesList.innerHTML = '';

    flashcards.categories.forEach(category => {
        const categoryElement = createCategoryElement(category);
        categoriesList.appendChild(categoryElement);
    });
}

function createCategoryElement(category) {
    const div = document.createElement('div');
    div.className = 'card bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer';
    div.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800">${category.categoryName}</h3>
        <p class="text-gray-600 mt-2">${category.cards.length} cards</p>
        <div class="progress-bar mt-4">
            <div class="progress-bar-fill" style="width: ${calculateProgress(category)}%"></div>
        </div>
    `;
    div.addEventListener('click', () => showFlashcard(category));
    return div;
}

// Flashcard Functions
function showFlashcard(category) {
    const modal = document.getElementById('flashcardModal');
    const cardCategory = document.getElementById('cardCategory');
    const cardContent = document.getElementById('cardContent');
    
    const randomCard = category.cards[Math.floor(Math.random() * category.cards.length)];
    
    cardCategory.textContent = category.categoryName;
    cardContent.innerHTML = `
        <div class="flashcard-animate">
            <h3 class="word-title">${randomCard.word}</h3>
            <div class="meaning-section">
                <p class="font-bold text-gray-700">Bengali Meaning:</p>
                <p>${randomCard.banglaMeaning.join(', ')}</p>
            </div>
            <div class="meaning-section">
                <p class="font-bold text-gray-700">English Meaning:</p>
                <p>${randomCard.englishMeaning}</p>
            </div>
            <div class="examples">
                ${randomCard.examples.map(example => `
                    <p class="example">${example}</p>
                `).join('')}
            </div>
            <div class="meaning-section">
                <p class="font-bold text-gray-700">Similar Words:</p>
                <p>${randomCard.similarWords.join(', ')}</p>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    currentCard = randomCard;
    currentCategory = category;
}

function hideFlashcard() {
    document.getElementById('flashcardModal').classList.add('hidden');
}

// Category Management
function showAddCategoryModal() {
    document.getElementById('addCategoryModal').classList.remove('hidden');
}

function hideAddCategoryModal() {
    document.getElementById('addCategoryModal').classList.add('hidden');
}

function handleAddCategory() {
    const input = document.getElementById('categoryInput');
    try {
        const newCategory = JSON.parse(input.value);
        flashcards.categories.push(newCategory);
        saveToLocalStorage();
        renderCategories();
        hideAddCategoryModal();
        input.value = '';
    } catch (error) {
        alert('Invalid category format. Please check your JSON syntax.');
    }
}

// Progress Tracking
function calculateProgress(category) {
    if (!category.cards.length) return 0;
    const reviewed = category.cards.filter(card => card.lastReviewed).length;
    return (reviewed / category.cards.length) * 100;
}

function updateProgressTracking() {
    flashcards.progressTracking.totalReviewed = flashcards.categories.reduce((total, category) => {
        return total + category.cards.filter(card => card.lastReviewed).length;
    }, 0);
    saveToLocalStorage();
}

function markCard(status) {
    if (!currentCard || !currentCategory) return;
    
    currentCard.lastReviewed = new Date().toISOString().split('T')[0];
    
    if (status === 'known') {
        moveCardToCategory(currentCard, 'I know');
    } else {
        moveCardToCategory(currentCard, "I don't know");
    }
    
    updateProgressTracking();
    hideFlashcard();
    renderCategories();
}

function moveCardToCategory(card, targetCategoryName) {
    const targetCategory = flashcards.categories.find(cat => cat.categoryName === targetCategoryName);
    if (!targetCategory) return;
    
    // Remove card from current category
    const sourceCategory = flashcards.categories.find(cat => 
        cat.cards.some(c => c.cardId === card.cardId)
    );
    if (sourceCategory) {
        sourceCategory.cards = sourceCategory.cards.filter(c => c.cardId !== card.cardId);
    }
    
    // Add to target category if not already present
    if (!targetCategory.cards.some(c => c.cardId === card.cardId)) {
        targetCategory.cards.push(card);
    }
    
    saveToLocalStorage();
}