const form = document.querySelector('.login-form')


form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if (evt.currentTarget.elements.email.value === '' || 
        evt.currentTarget.elements.password.value === '') {
        alert('Все поля формы должны быть заполнены')
    }
    const userObj = {
        email: evt.currentTarget.elements.email.value,
       password: evt.currentTarget.elements.password.value 
    }
    console.log(userObj);
    evt.currentTarget.reset()
})
