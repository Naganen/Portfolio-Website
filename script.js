const about = document.getElementById("about").innerHTML;
const skills = document.getElementById("skills").innerHTML;
const projects = document.getElementById("projects").innerHTML;
const contact = document.getElementById("contact").innerHTML;

const content = document.getElementById("content");

SetContent("about");

function SetContent(page) {
    switch (page) {
        case "about":
            content.innerHTML = about;
            break;
        case "skills":
            content.innerHTML = skills;
            break;
        case "projects":
            content.innerHTML = projects;
            break;
        case "contact":
            content.innerHTML = contact;
            break;
    }
}