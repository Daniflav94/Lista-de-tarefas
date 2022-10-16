//DOM representa o html dentro do javascript

let todos = []
let tarefaMaisIcone = {}
let importanciaIcones = []

const form = document.getElementById('todo-form')

let importante = document.querySelector(".importante")
let moderado = document.querySelector(".moderado")
let semUrgencia = document.querySelector(".semUrgencia")
let icone
let bolinhaVermelha = '<img src="./img/circulo-verm.png" width="12px">'
let bolinhaAmarela = '<img src="./img/circulo-amar.png" width="12px">'
let bolinhaVerde = '<img src="./img/circulo-verde.png" width="12px">'

form.addEventListener('submit', function(evento){ //função anonima

    evento.preventDefault() //cancela o comportamento padrão de um formulario que seria o recarregamento da página 
    evento.stopPropagation() //evita que a emissão do evento se propague para outros elementos
    const tarefa = document.querySelector('#todo')
   

    if(importante.checked) {
        icone = importante.value
        icone = document.createElement('span')
        icone.innerHTML = bolinhaVermelha
        importanciaIcones.push(icone)
        console.log(icone)
           
    
    } else if (moderado.checked){
        icone = moderado.value
        icone = document.createElement('span')
        icone.innerHTML = bolinhaAmarela
        importanciaIcones.push(icone)
        
       
    } else if (semUrgencia.checked){
        icone = semUrgencia.value
        icone = document.createElement('span')
        icone.innerHTML = bolinhaVerde 
        importanciaIcones.push(icone)     
    }
    
    todos.push(tarefa.value)
    tarefa.value = ''

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