//DOM representa o html dentro do javascript

const todos = []
const importanciaIcones = []
if(localStorage.length > 0) {
    JSON.parse(localStorage.getItem('todosArray'));
    JSON.parse(localStorage.getItem('iconeImportancia')); 
    renderizarTodos() 
}

const form = document.getElementById('todo-form')

let importante
let moderado
let semUrgencia
let selectedSize
let icone

form.addEventListener('submit', function(evento){ //função anonima

    importante = document.querySelector(".importante")
    moderado = document.querySelector(".moderado")
    semUrgencia = document.querySelector(".semUrgencia")

    evento.preventDefault() //cancela o comportamento padrão de um formulario que seria o recarregamento da página 
    evento.stopPropagation() //evita que a emissão do evento se propague para outros elementos
    const input = document.querySelector('#todo')
   

    if(importante.checked) {
        selectedSize = importante.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeVermelho')
        icone.innerText = 'circle'
        importanciaIcones.push(icone)
           
    
    } else if (moderado.checked){
        selectedSize = moderado.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeAmarelo')
        icone.innerText = 'circle'
        importanciaIcones.push(icone)
        
       
    } else if (semUrgencia.checked){
        selectedSize = semUrgencia.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeVerde')
        icone.innerText = 'circle' 
        importanciaIcones.push(icone)     
    }
    
    todos.push(input.value)
    input.value = ''

    localStorage.setItem('todosArray', JSON.stringify(todos))
    localStorage.setItem('iconeImportancia', JSON.stringify(importanciaIcones))

    renderizarTodos()
}) 



function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')

    todosListSection.innerHTML = ''


    for (let i = 0; i < todos.length; i++) {
        const divCard = document.createElement('div')
        divCard.classList.add('card')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodosText = document.createElement('p')
        pTodosText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodosText.innerText = todos[i]

        const marcador = document.createElement('span')

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        
        //arrow function, sempre são anonimas
        btnDelete.addEventListener('click', () => {
            
            todos.splice(i, 1) //remove o elemento
            importanciaIcones.splice(i,1)

            localStorage.setItem('todosArray', JSON.stringify(todos))
            localStorage.setItem('iconeImportancia', JSON.stringify(importanciaIcones))

            renderizarTodos()
            
        }) 

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon) //coloca novos elementos HTML dentro de outros
        divCardBody.append(pTodosText, importanciaIcones[i], btnDelete) //append coloca mais de um
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)  
    }

    importanciaIcones.innerHTML  = ''   
}