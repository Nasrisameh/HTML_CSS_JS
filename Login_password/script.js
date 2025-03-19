document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".buttons input[type='button']");
    const usernameInput = document.getElementById("user");
    const passwordInput = document.getElementById("pwd");
    const responseInfo = document.querySelector(".resp-info");

    loginButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            responseInfo.textContent = "Please fill in both fields.";
            responseInfo.style.color = "red";
        } else {
            responseInfo.textContent = "Login successful!";
            responseInfo.style.color = "green";
        }
    });

    usernameInput.addEventListener("input", () => {
        responseInfo.textContent = "";
    });

    passwordInput.addEventListener("input", () => {
        responseInfo.textContent = "";
    });
});
