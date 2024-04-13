
var userPosts = {};

// Función para crear un nuevo post
function createPost(title, description, image) {
    var postContainer = document.getElementById("posts-container");

    var post = document.createElement("div");
    post.classList.add("post");

    // Título
    var postTitle = document.createElement("h3");
    postTitle.textContent = title;

    // Descripción
    var postDescription = document.createElement("p");
    postDescription.textContent = description;

    // Imagen
    var postImage = document.createElement("img");
    postImage.src = image;
    postImage.alt = "Imagen del post";

    var postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");

    post.appendChild(postTitle);
    post.appendChild(postDescription);
    post.appendChild(postImage);
    post.appendChild(postFooter);

    postContainer.appendChild(post);

    var currentUser = localStorage.getItem("username");
    userPosts[currentUser] = userPosts[currentUser] || [];
    userPosts[currentUser].push({ title: title, description: description, image: image });
}

function loadUserPosts() {
    var currentUser = localStorage.getItem("username");
    var posts = userPosts[currentUser] || [];

    posts.forEach(function(post) {
        createPost(post.title, post.description, post.image);
    });
}

loadUserPosts();

document.getElementById("new-post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var postTitle = document.getElementById("post-title").value;
    var postDescription = document.getElementById("post-description").value;
    var postImageInput = document.getElementById("post-image");
    var postImage = postImageInput.files[0];

    if (postTitle.trim() === "") {
        alert("Por favor, introduce un título para tu publicación.");
        return;
    }

    if (!postImage) {
        alert("Por favor, selecciona una imagen para tu publicación.");
        return;
    }

    var imageURL = URL.createObjectURL(postImage);

    createPost(postTitle, postDescription, imageURL);

    document.getElementById("post-title").value = "";
    document.getElementById("post-description").value = "";
    postImageInput.value = "";
});

// Manejador de evento para cerrar sesión
document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault();

    // Limpiar el localStorage al cerrar sesión
    localStorage.removeItem("username");

    // Redirigir a la página de inicio de sesión
    window.location.href = "index.html";
});
