function checkAnswer() {
    // Step 1: Set the correct answer
    let correctAnswer = "4";

    // Step 2: Get the user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer first!";
        return;
    }

    let userAnswer = selectedOption.value;

    // Step 3: Compare and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

