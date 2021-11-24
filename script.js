//Cria Lista de Tarefas
function addTarefa(){
  const textTarefa = document.querySelector('#texto-tarefa').value;
  const liTarefa = document.createElement('li');
  
  liTarefa.innerText = textTarefa;

  document.getElementById('lista-tarefas').appendChild(liTarefa);

  document.querySelector('#texto-tarefa').value = '';
}
