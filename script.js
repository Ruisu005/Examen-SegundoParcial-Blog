
function login(username, password) {

    if (username.trim() !== "") {

        localStorage.setItem("username", username);

        window.location.href = "blog.html";
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    login(username, password);
});

function getUsername() {
    return localStorage.getItem("username");
}

showUsername();

function showUsername() {
    var username = getUsername();
    if (username) {
        document.getElementById("username-display").textContent = username;
    }
}


