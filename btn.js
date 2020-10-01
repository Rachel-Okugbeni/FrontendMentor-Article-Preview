document.getElementById("share-btn").onclick = function() {showLinks()};
document.getElementById("share-btn-active").onclick = function() {hideLinks()};

function showLinks() {
    const socialLinks = document.querySelector(".social-links");
    const avatarBox =  document.querySelector(".avatar-share-container");

    if (innerWidth < 1024) {
        socialLinks.style.display = "flex";
        avatarBox.style.display = "none";
    } else {
        socialLinks.style.display = socialLinks.style.display === "none" ? "flex" : "none";
    }
};

function hideLinks() {
    if (innerWidth < 1024) {
    document.querySelector(".social-links").style.display = "none";
    document.querySelector(".avatar-share-container").style.display = "flex";
    }
};