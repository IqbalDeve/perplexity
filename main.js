const scriptURL = 'https://script.google.com/macros/s/AKfycbzFNDBFOxpRrr0BjnO5oFsY0aOKZg_9qTiKxK6kiR5qea221QMqhzJLmyR2-igx3SlN/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Form is submitted"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})