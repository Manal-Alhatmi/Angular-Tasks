let correctEmail = "admin@gmail.com";
let correctPassword = "12345";
let attempts = 0;

while (attempts < 3) {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    if (email == correctEmail && password == correctPassword) {
        console.log("Login successful!");
        break;
    } else {
        attempts++;
        console.log("Wrong email or password");

        if (attempts == 3) {
            console.log("Too many attempts! Wait 10 seconds..");

            let seconds = 10;

            function countdown() {
                if (seconds > 0) {
                    console.log(seconds + " seconds remaining");
                    seconds--;
                    setTimeout(countdown, 1000); 
                } else {
                    console.log("You can try again now");
                    location.reload();
                }
            }

            countdown(); 
        }
    }
}


let numQuestions = parseInt(prompt("How many questions do you want?"));

if (isNaN(numQuestions) || numQuestions <= 0) {
    alert("Please enter a valid number!");
} else {
    let score = 0;

    for (let i = 0; i < numQuestions; i++) {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;

        let op = Math.random() < 0.5 ? "+" : "-";

        let correctAnswer = op == "+" ? num1 + num2 : num1 - num2;

        let userAnswer = parseInt(prompt(`Question ${i+1}: ${num1} ${op} ${num2} = ?`));

        if (userAnswer == correctAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is ${correctAnswer}`);
        }
    }

    alert(`Quiz finished! Your score: ${score} / ${numQuestions}`);
}
