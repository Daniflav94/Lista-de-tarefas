//DOM representa o html dentro do javascript

const form = document.getElementById('todo-form')

const todos = []
const bolinhas = []

let importante //query selector para pegar todos os inputs do tipo "radio".
let medio
let facil
let selectedSize
let icone

form.addEventListener('submit', function(evento){ //função anonima

    importante = document.querySelector(".importante")
    medio = document.querySelector(".medio")
    facil = document.querySelector(".facil")

    evento.preventDefault() //cancela o comportamento padrão de um formulario que seria o recarregamento da página 
    evento.stopPropagation() //evita que a emissão do evento se propague para outros elementos
    const input = document.querySelector('#todo')

    

    if(importante.checked) {
        selectedSize = importante.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeVermelho')
        icone.innerText = 'circle'
        bolinhas.push(icone)
           
    
    } else if (medio.checked){
        selectedSize = medio.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeAmarelo')
        icone.innerText = 'circle'
        bolinhas.push(icone)
        
       
    } else if (facil.checked){
        selectedSize = facil.value
        icone = document.createElement('span')
        icone.classList.add('material-symbols-outlined', 'iconeVerde')
        icone.innerText = 'circle' 
        bolinhas.push(icone)
        
    }
    
    todos.push(input.value)
    

    renderizarTodos()
}) 



function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')

    todosListSection.innerHTML = ''


    for (let i = 0; i < todos.length; i++) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

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
            const index = todos.indexOf(tarefa)
            todos.splice(index, 1) //remove o elemento
            renderizarTodos()
        }) 

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'


        btnDelete.appendChild(spanIcon) //coloca novos elementos HTML dentro de outros
        divCardBody.append(pTodosText, bolinhas[i], btnDelete) //append coloca mais de um
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)  


    }
    
   
}