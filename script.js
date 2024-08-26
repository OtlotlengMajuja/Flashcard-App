// Selecting DOM elements
const container = document.querySelector(".container");
const addQuestionModal = document.getElementById("add-card-modal");
const saveBtn = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-card");
const closeBtn = document.getElementById("close-btn");

// Initializing variables
let editBool = false;
let originalId = null;
let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

addQuestion.addEventListener('click', () => {
    // Show the add question modal and hide the container
    container.classList.add('hide');
    question.value = "";
    answer.value = "";
    addQuestionModal.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    // Close the add question modal and show the container
    container.classList.remove('hide');
    addQuestionModal.classList.add('hide');
    if (editBool) {
        editBool = false;
    }
})
