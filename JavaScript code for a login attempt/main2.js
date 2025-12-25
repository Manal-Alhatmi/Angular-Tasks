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






