const aboutMeParagraphs = document.getElementById("about-me-info")

const arrow = document.getElementById("arrow")

function rotateArrow() {
    if (arrow.style.transform == "rotate(45deg)") {
        return arrow.style.transform = "rotate(-135deg)"
    } else {
        return arrow.style.transform = "rotate(45deg)"
    }
}

function displayAboutMe(){
    if (aboutMeParagraphs.style.display == "none") {
        return aboutMeParagraphs.style.display = "block"
    } else {
        return aboutMeParagraphs.style.display = "none"
    }
}

function onClickDisplay (){
    displayAboutMe()
    rotateArrow()
}