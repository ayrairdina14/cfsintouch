function showMessage() {
    alert("Hello! You clicked the button.");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}