
const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur)


function onInputBlur() {
       if (Number(input.value.length) === Number(input.dataset.length)) {
        input.classList.remove('invalid')
           input.classList.add('valid')
           console.log('это иф');
       } else {
            input.classList.remove('valid')
    input.classList.add('invalid')
    console.log(Number(input.value.length))
    console.log(input.dataset.length);   
    }
    

  }
 
  


 