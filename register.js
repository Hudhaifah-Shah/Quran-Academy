const form = [...document.querySelector('#login-form').children]
form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1
    }, i*100)
})

const from = document.getElementById("email").value

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "hudhaifahshah365@gmail.com",
        Password : "password",
        To : 'info.alkhaliqacademy@gmail.com',
        From : from,
        Subject : "New Student Admission",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    )
}