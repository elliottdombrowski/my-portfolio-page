const email = document.getElementById('email');
const formName = document.getElementById('user-name').value.trim();
const formText = document.getElementById('form-text').value.trim();

document.getElementById('form-submit-button').addEventListener('click', function () {
    console.log('button click working');
    const options = {
        from: `${email}`,
        to: 'elliottdombrowski@gmail.com',
        subject: `From ${formName} through Portfolio Page`,
        text: `${formText}`,
    }
    
    sendEmail(options);
});

const sendEmail = (options) => {
    fetch('/api/mail/send', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    }).then(data => {
        console.log(data);
    }).catch (err => {
        console.log(err);
    });
};