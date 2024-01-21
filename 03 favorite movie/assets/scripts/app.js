// Elements
const addMovieModal = document.getElementById("add-modal");
const startAddModalBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movieList = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

// Data
const movies = [];
let id = 0;

// Functions
// UI
function updateUI() {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

function renderNewMovieElement(id, title, imageUrl, rating) {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;

    movieList.append(newMovieElement);
    newMovieElement.addEventListener(
        "click",
        startDeleteMovieHandler.bind(null, id)
    );
}

// Modal
function toggleBackdrop() {
    backdrop.classList.toggle("visible");
}

function clearMovieInput() {
    userInputs.forEach((input) => {
        input.value = "";
    });
}

function showMovieModal() {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
}

function closeMovieModal() {
    addMovieModal.classList.remove("visible");
}

function cancelMovieDeletionModal() {
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
}

// Handlers
function addMovieHandler() {
    const titleValue = userInputs[0].value.trim();
    const imageUrlValue = userInputs[1].value.trim();
    const ratingValue = userInputs[2].value.trim();

    if (
        !titleValue ||
        !imageUrlValue ||
        !ratingValue ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("Please enter valid values (rating between 1 and 5).");
        return;
    }

    const movie = {
        id: id++,
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(movie);
    console.log(movies);

    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(movie.id, titleValue, imageUrlValue, ratingValue);
    updateUI();
}

function cancelAddMovieHandler() {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

function deleteMovieHandler(movieId) {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }

    movies.splice(movieIndex, 1);
    movieList.children[movieIndex].remove();
    cancelMovieDeletionModal();
    updateUI();
}

function startDeleteMovieHandler(movieId) {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();

    const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
    const confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

    const tmpFunc = deleteMovieHandler.bind(null, movieId);

    cancelDeletionBtn.addEventListener("click", () => {
        cancelMovieDeletionModal();
        confirmDeletionBtn.removeEventListener("click", tmpFunc);
    });
    confirmDeletionBtn.addEventListener("click", tmpFunc);
}

function backdropClickHandler() {
    closeMovieModal();
    clearMovieInput();
    cancelMovieDeletionModal();
}

function showMovieModalHandler() {
    showMovieModal();
}

// Listeners
startAddModalBtn.addEventListener("click", showMovieModalHandler);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
