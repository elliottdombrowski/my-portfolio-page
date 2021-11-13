const alertMsg = document.getElementById('response-msg');

//VALIDATE EMAIL W/ REGEX
function validateEmail(valEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(valEmail);
}

//PROB CAN REFACTOR THIS TO USE FOR LOOP LATER
const validateContactForm = async (event) => {
    //PREVENT FORMS FROM CLEARING ON SUBMIT
    event.preventDefault();

    //GET VALUES FROM CONTACT FORM
    const valName = document.getElementById('user-name').value.trim();
    const valEmail = document.getElementById('email').value.trim();
    const valMsg = document.getElementById('form-text').value.trim();
    
    alertMsg.innerHTML = '';
    if (!valName) {
        alertMsg.fadeIn(2000);
        alertMsg.innerHTML = 'please enter your name.'

        //REFACTOR EMAIL VALIDATION LATER
    } else if (!validateEmail(valEmail)) {
        alertMsg.fadeIn(2000);
        alertMsg.innerHTML = 'please enter a valid email.'
    } else if (!valMsg) {
        alertMsg.fadeIn(2000);
        alertMsg.innerHTML = 'please leave a message.'
    } else {
        alertMsg.fadeIn(2000);
        alertMsg.innerHTML = 'thanks.'
    };
};

document
    .querySelector('#form-submit-button')
    .addEventListener('click', validateContactForm)