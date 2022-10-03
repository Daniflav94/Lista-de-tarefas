//DOM representa o html dentro do javascript

const form = document.getElementById('todo-form')

const todos = []

form.addEventListener('submit', function(evento){ //função anonima
    evento.preventDefault() //cancela o comportamento padrão de um formulario que seria o recarregamento da página 
    evento.stopPropagation() //evita que a emissão do evento se propague para outros elementos
    const input = document.querySelector('#todo')

    todos.push(input.value)
    input.value = ''
    renderizarTodos()
}) 

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''

    for (let tarefa  of todos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodosText = document.createElement('p')
        pTodosText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodosText.innerText = tarefa

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
        divCardBody.append(pTodosText, btnDelete) //append coloca mais de um
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)

    }
}