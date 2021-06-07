const novaTarefa = document.querySelector('[data-form-button]')
const inputTarefa= document.querySelector('[data-form-input]')

//console.log(novaTarefa);//
//console.log(inputTarefa);//

//function criarTarefa(evento){//
   // evento.preventDefault()//
    //console.log(inputTarefa.value)//

   // const valorTarefa = inputTarefa.value//
   // const listaDeTarefas = document.querySelector('[data-task]')//
//} //

function criarTarefa(evento){
    evento.preventDefault()

    const valorTarefa = inputTarefa.value
    const listaDeTarefas = document.querySelector('[data-task]')

    novaLabel = document.createElement('label')
    novaLabel.innerText = valorTarefa
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')
    novoItem.appendChild(novaLabel)

    listaDeTarefas.appendChild(novoItem)

    inputTarefa.value = ""

}
novaTarefa.addEventListener('click', criarTarefa)

