document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can implement your own authentication logic here.
        // For this example, we'll check if the username is "user" and the password is "password".

        if (username === "user" && password === "password") {
            errorMessage.textContent = "Login successful!";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.style.color = "red";
        }
    });
});
