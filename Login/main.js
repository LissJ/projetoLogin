// seleciona o formulario de login
const form = document.querySelector('.login-form');

// seleciona os campos de entrada de usuário e senha
const usernameInput = form.querySelector('input[type="text"]');
    // dessa forma, identificamos a tag pelo tipo de input dela, usamos o form ao invés de document para indicar em qual classe, ou dentro de onde eu vou achar esse input
const senhaInput = form.querySelector('input[type="password"]');

// adiciona um ouvinte de eventos ao formulário para detectar quando o usuário clicar no botão
form.addEventListener('submit', (event) =>{
    // event.preventDefault() evita que a página seja recarregada quando o formulário for enviado
    event.preventDefault();

    // obtém os valores dos campos de entrada do usuário e senha, e o trim() remove os espaços em branco que podem ter antes ou depois de cada campo
    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    // verifica se os campos de entrada e saída estão vazios
    if(usuario === '' || senha === ''){
        alert('Por favor, preencha os campos.');
    // verifica se as informações de login e senha estão corretos
    } else if(usuario === 'usuario' && senha === 'senha'){
        alert('Bem-vindo!');
        // redireciona o usuário para uma outra página após o login
        location.replace("C:/Users/DEV2A-1/Desktop/Projeto/Tarefa/index.html", "_self");
    } else{
        // exibe uma mensagem de erro se as informações estiverem erradas
        alert('Usuário ou senha incorreto, tente novamente')
    }
})