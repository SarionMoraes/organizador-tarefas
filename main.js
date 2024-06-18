$(document).ready(function() {
    // Evento para adição de tarefas
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário
        var adicionarTarefa = $('#adicionar-tarefa').val(); // Pega o valor do campo de texto
        if (adicionarTarefa.trim()) {
            var novaTarefa = $('<li>').text(adicionarTarefa); // Cria um novo item de lista <li> com a nova tarefa
            $('#lista-tarefas').append(novaTarefa); // Adiciona a nova tarefa à lista de tarefas
            $('#adicionar-tarefa').val(''); // Limpa o campo de texto depois de adicionar a tarefa
        }
    });

    // Evento para aplicar/remover o efeito de tachado quando uma tarefa é clicada
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('done'); // Adiciona ou remove a classe 'done' ao item clicado
    });
});
