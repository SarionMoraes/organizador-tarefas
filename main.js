$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const adicionarTarefa = $('#adicionar-tarefa').val()
        const tarefaNova = $('<li></li>')
        $(adicionarTarefa).appendTo(tarefaNova)
    })
})