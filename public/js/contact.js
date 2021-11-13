const alertMsg = document.getElementById('response-msg'); 

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
        console.log('no name');
        alertMsg.innerHTML = 'please enter your name.'

        //REFACTOR EMAIL VALIDATION LATER
    } else if (!valEmail || !valEmail.includes('@') && ".com") {
        alertMsg.innerHTML = 'please enter a valid email.'
    } else if (!valMsg) {
        alertMsg.innerHTML = 'please leave a message.'
    } else {
        alertMsg.innerHTML = 'thanks.'
    };
};

document
    .querySelector('#form-submit-button')
    .addEventListener('click', validateContactForm)