/**
 * Simple Logon Script
 * This script handles a basic logon form submission.
 */

// Example: Dummy user credentials
const USERNAME = "admin";
const PASSWORD = "password123";

// Function to handle logon
function logon(username, password) {
    if (username === USERNAME && password === PASSWORD) {
        alert("Logon successful!");
        // Redirect or perform post-logon actions here
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}

// Example usage with a form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("logonForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = form.elements["username"].value;
            const password = form.elements["password"].value;
            logon(username, password);
        });
    }
});