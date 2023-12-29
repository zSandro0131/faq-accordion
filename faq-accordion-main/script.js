const question1 = document.querySelector('.first-question')
const question2 = document.querySelector('.second-question')
const question3 = document.querySelector('.third-question')
const question4 = document.querySelector('.fourth-question')

const answer1 = document.querySelector('.first-answer')
const answer2 = document.querySelector('.second-answer')
const answer3 = document.querySelector('.third-answer')
const answer4 = document.querySelector('.fourth-answer')

const plusIcon = document.getElementById('plus')
const minusIcon = document.getElementById('minus')

question1.addEventListener('click' , ()=> {
    answer1.classList.toggle('active')
    if(answer1.classList.contains('active')) {
        plusIcon.style.display = 'none'
        minusIcon.style.display = 'block'
    } else {
        minusIcon.style.display = 'none'
        plusIcon.style.display = 'block'
    }
})

question2.addEventListener('click' , ()=> {
    answer2.classList.toggle('active')
    if(answer2.classList.contains('active')) {
        plusIcon.style.display = 'none'
        minusIcon.style.display = 'block'
    } else {
        minusIcon.style.display = 'none'
        plusIcon.style.display = 'block'
    }
})

question3.addEventListener('click' , ()=> {
    answer3.classList.toggle('active')
})

question4.addEventListener('click' , ()=> {
    answer4.classList.toggle('active')
})
