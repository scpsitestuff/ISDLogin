let wrongCount = 0;

function loginButton() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    if (user.value != "" && pass.value != "") {
        location.href = "https://sites.google.com/view/isddatabase/home";
    }
    else {
        location.href = "https://awesomeness3301.github.io/accessdenied.github.io/"
    }
}