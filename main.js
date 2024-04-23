const box = document.querySelector('.box')
const card = document.querySelector('.card')

box.onclick = function(){
 card.classList.toggle('cardActive')
}