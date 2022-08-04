const span = document.querySelector('#value')
const btnPrev = document.querySelector('button[data-action="decrement"]')
const btnNext = document.querySelector('button[data-action = "increment"]')

 
btnPrev.addEventListener('click', () => {
    span.textContent -= 1
    
})

btnNext.addEventListener('click', () => {
    
    span.textContent -= -1
    

})

