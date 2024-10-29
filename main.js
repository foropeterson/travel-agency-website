
document.addEventListener("DOMContentLoaded", function() {
    // Page 1: Navigate to the sign-up page
    let goToSignUpPage = document.getElementById("signUpBtn");
    if (goToSignUpPage) {
        goToSignUpPage.addEventListener("click", function() {
            window.location.href = "sign-up.html"; // Redirects to sign-up page
        });
    }

    // Page 2: Navigate back to index page from sign-up page
    let signUpBtn = document.getElementById("sign-up-button");
    if (signUpBtn) {
        signUpBtn.addEventListener("click", function() {
            window.location.href = "index.html"; // Redirects to index page
        });
    }
});
