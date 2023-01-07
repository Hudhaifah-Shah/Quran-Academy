const form = [...document.querySelector('#login-form').children]
form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1
    }, i*100)
})
