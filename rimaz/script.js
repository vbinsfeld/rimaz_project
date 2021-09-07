'use strict';

let contImagem = 1;
let contArray = 0;
let arrayImagens = [
  'https://redir.task.com.br/images/erro_404_peq.jpg',
  'https://redir.task.com.br/images/erro_404_peq.jpg',
  'https://i.pinimg.com/originals/74/a5/8c/74a58cb6f69d37f6270bd4a237e6fe57.jpg',
  'https://i.pinimg.com/originals/2b/eb/fa/2bebfa430a0d344f6fd2aa521aa64416.jpg',
  'https://i.pinimg.com/originals/af/81/20/af8120acbb6f42c3ff9a3356bf8c7f26.jpg',
  'https://www.reeces.com/sites/default/files/Pictures_Slides/kitchen-02_b.jpg',
  'https://i.pinimg.com/originals/27/9f/9d/279f9dfbcd177108c91e0861d05be1e5.jpg',
  'https://i.pinimg.com/originals/0f/7a/0e/0f7a0e9b1e6b36bf12632b9770d55cff.jpg',
  'https://i.pinimg.com/originals/49/10/cb/4910cb628e0c023694d26af367bc7273.jpg',
  'https://i.pinimg.com/originals/c1/71/9c/c1719c8b615a3ef04c916b25a24fbe59.jpg',
];

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const meuPerfil = {
  nome: '',
  escolhas: [],
};

window.onload = function () {
  var c = document.getElementById('meu-submit');
  c.addEventListener('click', function () {
    console.log('vitoreeee');
  });
};

document.querySelector('.check').addEventListener('click', function () {
  if (contImagem == 4) {
    document.querySelector('.imagecounter').textContent = contImagem;
    document.getElementsByClassName('parent')[0].style.display = 'none';
    document.getElementsByClassName('radios')[0].style.display = 'none';
    document.getElementsByClassName('proxima')[0].style.display = 'none';
    document.getElementsByClassName('contador')[0].style.display = 'none';
    document.getElementsByClassName('textboxclass')[0].style.display = 'none';
    document.getElementsByClassName('tresponto')[0].style.display = 'none';
    document.getElementById('imagefim').src =
      'https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia/wp-content/uploads/2021/05/121.-Obrigado.jpg';
  } else if (
    document.querySelector('#imagem-um').checked == false &&
    document.querySelector('#imagem-dois').checked == false
  ) {
    displayMessage('Status: Escolha pelo menos uma imagem!');
  } else if (document.getElementById('imagem-um').checked) {
    contArray++;
    contArray++;
    displayMessage('Status: Você acabou de escolher a imagem 1!');
    document.querySelector('#imagem-um').checked = false;
    console.log('o contador de imagem comecou na posicao: ' + contImagem);
    contImagem++;
    document.querySelector('.imagecounter').textContent = contImagem;
    meuPerfil.escolhas[contImagem] = 'imagem-um';
    document.getElementById('idimagemum').src = arrayImagens[contArray];
    document.getElementById('idimagemdois').src = arrayImagens[contArray + 1];
    console.log('o array começou  na posicao: ' + contArray);
    console.log('o contador de imagem esta na posicao: ' + contImagem);
    console.log('-------');
    console.log('o array esta na posicao: ' + contArray);
    document.getElementById('textboxid').value = '';
  } else if (document.querySelector('#imagem-dois').checked) {
    contArray++;
    contArray++;
    displayMessage('Status: Você acabou de escolher a imagem 2!');
    document.querySelector('#imagem-dois').checked = false;
    console.log('o contador de imagem comecou na posicao: ' + contImagem);
    contImagem++;
    document.querySelector('.imagecounter').textContent = contImagem;
    meuPerfil.escolhas[contImagem] = 'imagem-dois';
    document.getElementById('idimagemum').src = arrayImagens[contArray];
    document.getElementById('idimagemdois').src = arrayImagens[contArray + 1];
    console.log('o array começou  na posicao: ' + contArray);
    console.log('o contador de imagem esta na posicao: ' + contImagem);
    console.log('-------');
    console.log('o array esta na posicao: ' + contArray);
    document.getElementById('textboxid').value = '';
  }
});

//quando clica em "Recomeçar"...
document.querySelector('.btnagain').addEventListener('click', function () {
  displayMessage('Status: ...');
  document.querySelector('#imagem-um').checked = false;
  document.querySelector('#imagem-dois').checked = false;
  contImagem = 1;
  contArray = 0;
  document.querySelector('.imagecounter').textContent = contImagem;
  document.getElementById('idimagemum').src =
    'https://i.pinimg.com/originals/1f/54/b0/1f54b06b468af6d0cf8b4cf8077b8501.jpg';
  document.getElementById('idimagemdois').src =
    'https://i.pinimg.com/originals/00/90/eb/0090ebae45979be1e34eac445f3aa7c5.jpg';
  // console.log(meuPerfil.escolhas);
  console.log('o contador de imagem esta na posicao: ' + contImagem);
  console.log('-------');
  console.log('o array esta na posicao: ' + contArray);
  document.getElementById('textboxid').value = '';
});

//quando clica em "Anterior"...`
document.querySelector('.btnanterior').addEventListener('click', function () {
  if (contImagem == 1) {
    displayMessage('Status: Essa é a primeira imagem. Não há imagem anterior.');
    console.log('o contador de imagem esta na posicao: ' + contImagem);
    console.log('-------');
    console.log('o array esta na posicao: ' + contArray);
  } else if (contImagem == 2) {
    displayMessage('Status: ...');
    document.querySelector('#imagem-um').checked = false;
    document.querySelector('#imagem-dois').checked = false;
    contImagem = 1;
    contArray = 0;
    document.querySelector('.imagecounter').textContent = contImagem;
    document.getElementById('idimagemum').src =
      'https://i.pinimg.com/originals/1f/54/b0/1f54b06b468af6d0cf8b4cf8077b8501.jpg';
    document.getElementById('idimagemdois').src =
      'https://i.pinimg.com/originals/00/90/eb/0090ebae45979be1e34eac445f3aa7c5.jpg';
    // console.log(meuPerfil.escolhas);
    console.log('o contador de imagem esta na posicao: ' + contImagem);
    console.log('-------');
    console.log('o array esta na posicao: ' + contArray);
    document.getElementById('textboxid').value = '';
  } else if (contImagem > 2) {
    contImagem--;
    document.querySelector('.imagecounter').textContent = contImagem;
    document.querySelector('#imagem-um').checked = false;
    document.querySelector('#imagem-dois').checked = false;
    contArray--;
    contArray--;
    document.getElementById('idimagemum').src = arrayImagens[contArray];
    document.getElementById('idimagemdois').src = arrayImagens[contArray + 1];
    console.log('o contador de imagem esta na posicao: ' + contImagem);
    console.log('-------');
    console.log('o array esta na posicao: ' + contArray);
    document.getElementById('textboxid').value = '';
  }
});
