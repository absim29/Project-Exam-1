var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value.trim();
    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (name.length <= 5) {
        nameError.innerHTML = 'Name should be more than 5 characters long';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #b1dd8c;"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value.trim();
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #b1dd8c;"></i>';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('subject').value.trim();
    if (subject.length === 0) {
        subjectError.innerHTML = 'Subject is required';
        return false;
    }
    if (subject.length <= 15) {
        subjectError.innerHTML = 'Subject should be more than 15 characters long';
        return false;
    }
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #b1dd8c;"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value.trim();
    var required = 26;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #b1dd8c;"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Error! Please check the fields above';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    else {
        window.alert("Success!");
    }

}