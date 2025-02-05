$(document).ready(function () {
  const flashcardsData = JSON.parse(localStorage.getItem("flashcards")) || flashcards;

  // Save data to local storage
  function saveData() {
    localStorage.setItem("flashcards", JSON.stringify(flashcardsData));
  }

  // Render categories on home page
  function renderCategories() {
    const categoryList = $("#category-list");
    categoryList.empty();
    flashcardsData.categories.forEach((category) => {
      const cardHtml = `
        <div class="col-md-4">
          <div class="card bg-light p-3" data-category-id="${category.categoryId}">
            <h5>${category.categoryName}</h5>
            <p>${category.cards.length} cards</p>
          </div>
        </div>
      `;
      categoryList.append(cardHtml);
    });

    // Add click event to category cards
    $(".card").on("click", function () {
      const categoryId = $(this).data("category-id");
      const category = flashcardsData.categories.find((cat) => cat.categoryId === categoryId);
      showFlashcards(category);
    });
  }

  // Show flashcards for a category
  function showFlashcards(category) {
    const modal = new bootstrap.Modal(document.getElementById("flashcard-modal"));
    let currentIndex = 0;

    function showCard(index) {
      const card = category.cards[index];
      if (!card) return;

      $("#word").text(card.word);
      $("#bangla-meaning").text(card.banglaMeaning.join(", "));
      $("#english-meaning").text(card.englishMeaning);
      $("#examples").empty();
      card.examples.forEach((example) => {
        $("#examples").append(`<li>${example}</li>`);
      });
      $("#similar-words").text(card.similarWords.join(", "));
      $("#progress-bar").css("width", `${((index + 1) / category.cards.length) * 100}%`);
    }

    $("#mark-known").on("click", function () {
      // Move card to "I know" category
      moveCardToCategory(category, flashcardsData.categories[1], currentIndex);
      currentIndex++;
      if (currentIndex < category.cards.length) {
        showCard(currentIndex);
      } else {
        modal.hide();
        renderCategories();
      }
    });

    $("#mark-unknown").on("click", function () {
      // Move card to "I don't know" category
      moveCardToCategory(category, flashcardsData.categories[2], currentIndex);
      currentIndex++;
      if (currentIndex < category.cards.length) {
        showCard(currentIndex);
      } else {
        modal.hide();
        renderCategories();
      }
    });

    showCard(currentIndex);
    modal.show();
  }

  // Move card to another category
  function moveCardToCategory(fromCategory, toCategory, index) {
    const card = fromCategory.cards.splice(index, 1)[0];
    toCategory.cards.push(card);
    saveData();
  }

  // Add new category
  $("#add-category-btn").on("click", function () {
    const addCategoryModal = new bootstrap.Modal(document.getElementById("add-category-modal"));
    addCategoryModal.show();
  });

  $("#save-category").on("click", function () {
    try {
      const newCategory = JSON.parse($("#category-input").val());
      flashcardsData.categories.push(newCategory);
      saveData();
      renderCategories();
      $("#add-category-modal").modal("hide");
    } catch (error) {
      alert("Invalid category object!");
    }
  });

  // Initial render
  renderCategories();
});

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

// ... (rest of the code remains the same)