const profileImage = document.getElementById("profile-picture");
profileImage.addEventListener('click', imageChanger);
const footerMsg = document.getElementById("footer-msg");
footerMsg.addEventListener('click',personalWelcomeMessage )
const mainHeading = document.getElementsByTagName('h1')[0];
mainHeading.addEventListener('click', function() {
    alert("Dexter the Dog says Woof Woof!")
})
function imageChanger() {
    
    const imgSrc = profileImage.getAttribute("src");
    if (imgSrc === "./asset/profile.jpeg") {
        profileImage.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/001/200/028/original/dog-png.png");
    } else {
        profileImage.setAttribute("src", "./asset/profile.jpeg");
    }

}

function personalWelcomeMessage() {
    const myName = prompt("Please enter your name.");
    alert(`Dexter the Dog welcomes ${myName}`);
}