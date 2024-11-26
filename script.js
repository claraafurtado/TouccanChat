// Mensagens de exemplo para cada conversa
const conversas = {
    conversa1: [
      { tipo: 'recebida', texto: 'Oi, tudo bem?' },
    ],
    conversa2: [
      { tipo: 'recebida', texto: 'Olá' },
    ],
    conversa3: [
      { tipo: 'recebida', texto: 'Está chegando?' },
    ]
  };
  
  // Função para selecionar conversa
  function selecionarConversa(id) {
    // Ocultar todas as conversas
    const chats = document.querySelectorAll('.chat');
    chats.forEach(chat => chat.style.display = 'none');
  
    // Mostrar a conversa selecionada
    const chat = document.getElementById(`chat1`);
    chat.style.display = 'flex';
  
    // Atualizar nome e mensagens
    const nomePessoa = document.getElementById('nomePessoa1');
    nomePessoa.textContent = document.getElementById(id).querySelector('.nome-conversa').textContent;
  
    const chatConversa = document.getElementById('chatConversa1');
    chatConversa.innerHTML = ''; // Limpa as mensagens
  
    // Adicionar mensagens na conversa
    conversas[id].forEach(msg => {
      const msgElem = document.createElement('div');
      msgElem.classList.add(msg.tipo === 'enviada' ? 'msg-enviada' : 'msg-recebida');
  
      const fotoPerfil = document.createElement('img');
      fotoPerfil.classList.add(msg.tipo === 'enviada' ? 'foto-perfil-enviado' : 'foto-perfil-recebido');
      fotoPerfil.src = msg.tipo === 'enviada' ? 'seu-perfil.png' : './Icon - perfil.png';
      msgElem.appendChild(fotoPerfil);
  
      const texto = document.createElement('div');
      texto.classList.add('mensagem-texto');
      texto.textContent = msg.texto;
      msgElem.appendChild(texto);
  
      chatConversa.appendChild(msgElem);
    });
  }
  
  // Função para voltar para o estado inicial
  function voltarParaInicial() {
    // Ocultar o chat atual
    const chat = document.getElementById('chat1');
    chat.style.display = 'none';
  
    // Mostrar a lista de conversas novamente
    const areaCentral = document.querySelector('.area-central');
    areaCentral.style.display = 'flex';
  
    // Mostrar as conversas
    const conversasSection = document.querySelector('.conversas');
    conversasSection.style.display = 'block';
  }
  
  // Função para enviar a mensagem
  function enviarMensagem() {
    const input = document.getElementById('inputMensagem');
    const mensagem = input.value.trim(); // Pega a mensagem digitada e remove espaços extras
  
    if (mensagem !== "") {
      // Seleciona o chat atual
      const chatConversa = document.getElementById('chatConversa1');
  
      // Criar a mensagem enviada
      const msgEnviada = document.createElement('div');
      msgEnviada.classList.add('msg-enviada');
  
      const fotoPerfilEnviado = document.createElement('img');
      fotoPerfilEnviado.classList.add('foto-perfil-enviado');
      fotoPerfilEnviado.src = 'seu-perfil.png';
      msgEnviada.appendChild(fotoPerfilEnviado);
  
      const textoMensagem = document.createElement('div');
      textoMensagem.classList.add('mensagem-texto');
      textoMensagem.textContent = mensagem; // Adiciona o texto da mensagem
      msgEnviada.appendChild(textoMensagem);
  
      // Adiciona a mensagem ao chat
      chatConversa.appendChild(msgEnviada);
  
      // Rolando para o final do chat
      chatConversa.scrollTop = chatConversa.scrollHeight;
  
      // Limpa o campo de texto
      input.value = '';
    }
  }
  
  // Adicionando o evento de clique no botão "Enviar"
  document.getElementById('btnEnviar').addEventListener('click', enviarMensagem);
  
  // Adicionando a funcionalidade para enviar a mensagem pressionando Enter
  document.getElementById('inputMensagem').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      enviarMensagem();
    }
  });
  
  // Adicionando eventos de clique nas conversas
  document.querySelectorAll('.conversa').forEach(conversa => {
    conversa.addEventListener('click', () => {
      selecionarConversa(conversa.id);
    });
  });
  
  // Adicionando evento de clique na seta de voltar
  document.querySelector('.btn-voltar-chat').addEventListener('click', voltarParaInicial);
  