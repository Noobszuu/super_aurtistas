var menuItem = document.querySelectorAll('.item')

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
        
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir Menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.sidebar')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

const player = document.getElementById('player');
const popupMusica = document.getElementById('popup-musica');

const musicas = [
  { nome: 'Sonic', caminho: 'musicas/Sonic.mp3' },
  { nome: 'Voa, vamos, vem comigo', caminho: 'musicas/Dragonball.mp3' },
  { nome: 'Hakuna Matata', caminho: 'musicas/Hakunamatata.mp3' },
  { nome: 'Vamos Viajar', caminho: 'musicas/Mundobita.mp3' },
  { nome: 'Uni Duni Te', caminho: 'musicas/Unidunite.mp3' },
  { nome: 'Aquarela', caminho: 'musicas/Aquarela.mp3' },
  { nome: 'Chuva, chuvisco, chuvarada', caminho: 'musicas/Chuva.mp3' },
];

// Inicialize o índice da música atual
let musicaAtual = 0;

function tocarMusica() {
  const musica = musicas[musicaAtual];
  player.src = musica.caminho;
  popupMusica.textContent = `Tocando: ${musica.nome}`;
  player.volume = 0.2; // Volume baixo para todas as músicas
  exibirPopup();
  player.play().catch(error => {
    console.warn("Erro ao tentar reproduzir a música:", error);
  });
}

// Evento para tocar a próxima música ao fim da atual
player.addEventListener('ended', () => {
  musicaAtual = (musicaAtual + 1) % musicas.length; // Avança e reinicia no início
  tocarMusica();
});

// Função para pausar ou tocar a música ao clicar no botão
document.getElementById('playPauseBtn').addEventListener('click', () => {
  if (player.paused) {
    player.play();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa fa-pause"></i>'; // Muda o ícone para pausa
  } else {
    player.pause();
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa fa-play"></i>'; // Muda o ícone para play
  }
});

// Função para ir para a próxima música
document.getElementById('nextBtn').addEventListener('click', () => {
  musicaAtual = (musicaAtual + 1) % musicas.length; // Avança para a próxima música
  tocarMusica();
});

// Função para ir para a música anterior
document.getElementById('prevBtn').addEventListener('click', () => {
  musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length; // Volta para a música anterior
  tocarMusica();
});

// Exibir o popup de música
function exibirPopup() {
  popupMusica.classList.add('mostrar');
  setTimeout(() => {
    popupMusica.classList.remove('mostrar');
  }, 5000); // O popup desaparece após 5 segundos
}

// Função para iniciar a música ao clicar no botão
document.getElementById('startMusicBtn').addEventListener('click', () => {
  tocarMusica();
});