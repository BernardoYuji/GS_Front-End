document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    iniciarSlideshow(slides);
  }
});

function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}


function iniciarSlideshow(slides) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3000);
}


const usuariosDeficientes = [];
const usuariosPreferenciais = [];
const usuarios = [];

// Validação

//alert("Bem vindo à página de cadastro da Hidroguard!\nVamos começar o seu cadastro.");

// Função para verificar se é preferencial ou não
function idadePreferencial() {
  const anoAtual = 2025;
  const anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
  const jaFezAniversario = prompt("Você já fez aniversário esse ano? (sim/não)").toLowerCase();
  let idade = anoAtual - anoNascimento;

  if (jaFezAniversario === "não" || jaFezAniversario === "nao") {
    idade -= 1;
  }

  return idade > 60 || idade < 12;
}

 //Função que verifia se possui ou não algum tipo de deficiência
function verificacaoDeDeficiencia() {
  const resposta = prompt("Possui alguma deficiência física? (sim/não)").toLowerCase();
  return resposta === "sim";
}

// Função que verifica se o cpf é valido
function validarCpf() {
  while (true) {
    const cpf = prompt("Digite o seu CPF (ex: 000.000.000-00):");

    if (cpf.length < 14 || cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-") {
      alert("CPF inválido, digite novamente.");
      continue;
    }
    return cpf;
  }
}

// Função que verifica se o endereço é valido
function endereco() {
  while (true) {
    const cep = prompt("Digite o seu CEP (ex: 00000-000):");
    const numero = parseInt(prompt("Digite o número da sua residência:"));

    if (cep.length < 9 || cep[5] !== "-") {
      alert("CEP inválido, digite novamente.");
      continue;
    }
    return { cep, numero };
  }
}

// Função principal de cadastro
function cadastroUsuario() {
  const nome = prompt("Digite o seu nome completo:");
  const cpf = validarCpf();
  const end = endereco();

  if (verificacaoDeDeficiencia()) {
    usuariosDeficientes.push({ nome, cpf, endereco: end });
    alert(`Usuário ${nome} cadastrado como **Deficiente**!`);
  } else if (idadePreferencial()) {
    usuariosPreferenciais.push({ nome, cpf, endereco: end });
    alert(`Usuário ${nome} cadastrado como **Preferencial**!`);
  } else {
    usuarios.push({ nome, cpf, endereco: end });
    alert(`Usuário ${nome} cadastrado como **Comum**!`);
  }
}

// Chama o cadastro
cadastroUsuario();
