//Cria Lista de Tarefas
function addTarefa() {
  if (document.querySelector('#texto-tarefa').value !== '') {
    const textTarefa = document.querySelector('#texto-tarefa').value;
    const liTarefa = document.createElement('li');
    liTarefa.innerText = textTarefa;

    document.getElementById('lista-tarefas').appendChild(liTarefa);
  }
  document.querySelector('#texto-tarefa').value = '';
}

//Seleciona item da lista de tarefas
const listaTarefa = document.querySelector('#lista-tarefas');
listaTarefa.addEventListener('click', selectTarefa);

function selectTarefa(event) {
  let item = document.querySelector('.selected');
  event.target.classList.add('selected');

  if (item) {
    item.classList.remove('selected');
  }
}

//defini item como concluído
const dblItem = document.querySelector('#lista-tarefas');
dblItem.addEventListener('dblclick', itemComplet);

function itemComplet(event) {
  let itemdbl = document.querySelector('.completed');
  event.target.classList.add('completed');

  if (itemdbl) {
    itemdbl.classList.remove('completed')
  }
} 