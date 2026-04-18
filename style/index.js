function showPage(pageId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
}

function showMessage() {
    alert("Cats are great companions and help reduce stress!");
}

let facts = [
    "Cats sleep for 12-16 hours a day.",
    "A group of cats is called a clowder.",
    "Cats can rotate their ears 180 degrees.",
    "Cats have five toes on their front paws.",
    "A cat’s nose print is unique like a fingerprint."
];

function newFact() {
    let randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("factText").innerText = facts[randomIndex];
}