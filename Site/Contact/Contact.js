function validateForm() {
    var alert = document.getElementById("alert");
    var fields = document.querySelectorAll("input,textarea");
    //call validate all form fields
    var pageIsValid = validateName() && validateEmail() && validatePhone() && validateMessage();
    if (pageIsValid) {
        alert.innerText = "Thank you! I will contact you soon!";
        //disable  input fields
        for (var i = 0; i < fields.length; i++) {
            fields[i].disabled = true;
           fields[i].style.backgroundColor = "mediumpurple";
        }
    }
    else {
        alert.innerText = "Page is not valid";
    }
    alert.className = "contactForm";//make it visible
    


}

//Will return true if name is not empty and letters only. Also updates color of warning text in the lable
function validateName() {
    var name = document.getElementById("name");
    var label = document.getElementById("labelName");
    var regex = /^[A-Za-z\s]+$/;
    if (name.value === "") {
        label.innerText = "Name must be filled out";
        label.className = "warningText";
        return false;
    }
    if (!name.value.match(regex)) {
        label.className = "warningText";
        label.innerText = "Name must be letters only";
        return false;
    } else
    {
       label.className = "";
       label.innerText ="*Name";
       return true;
    }
}

//Will return true if email is not empty and makes sence
function validateEmail() {
    var email = document.getElementById("email");
    var label = document.getElementById("labelEmail");
    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|co.il||com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    if ((email.value === "") || (!regex.test(email.value))) {
        label.className = "warningText";
        label.innerHTML = "Incorrect email";
        return false;
    }
     else {
       label.className = "";
       label.innerText = "*Email";
       return true;
    }
}

//Will return true if email is not empty, number only, 10 digits
function validatePhone() {
    var phone = document.getElementById("phone");
    var label = document.getElementById("labelPhone");
    var regex = /^[0-9]*$/;
    if ((phone.value === "") || (!phone.value.match(regex)) || (phone.value.length!==10)) {
        label.className = "warningText";
        label.innerHTML = "Incorrect phone. Must be 10 digits";
        return false;
    }
    else {
        label.className = "";
        label.innerText = "*Phone";
        return true;
    }
}

//Will return true if message is from 10 till 500 characters

function validateMessage() {
    var label = document.getElementById("labelMessage");
    var message = document.getElementById("message");
    if ((message.value === "") || (message.value.length <= 10)) {
        label.className = "warningText";
        label.innerHTML = "Message too short";
        return false;
    }
    else {
        label.className = "";
        label.innerText = "*Message. Remain " + (message.getAttribute("maxlength") - message.value.length) + " characters";
        return true;
    }
}