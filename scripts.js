let currentQuestion = 1;
const totalQuestions = 8;

function showQuestion() {
    document.getElementById('popup1').style.display = 'flex';
}

function answer(response, popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('popup-reason').style.display = 'flex';
}

function next() {
    var reason = document.getElementById('reason').value;
    document.getElementById('popup-reason').style.display = 'none';

    // Reset the reason text area
    document.getElementById('reason').value = '';

    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        document.getElementById(`popup${currentQuestion}`).style.display = 'flex';
    } else {
        document.getElementById('popup-thankyou').style.display = 'flex';
    }
}

function backToStart() {
    document.getElementById('popup-thankyou').style.display = 'none';
    currentQuestion = 1;
    // Optionally, you can reset other elements or states if needed
}
