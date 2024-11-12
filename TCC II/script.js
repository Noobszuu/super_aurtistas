var menuItem = document.querySelectorAll('.item')

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
        
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir Menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.sidebar')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})