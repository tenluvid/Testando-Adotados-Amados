function AbrirModal(nome, idade, status, historia, modo, imagem) {

    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-idade').textContent = idade;
    document.getElementById('modal-status').textContent = status;
    document.getElementById('modal-historia').textContent = historia;
    document.getElementById('modal-modo').textContent = modo;
    document.getElementById('modal-img').src = imagem;
    document.getElementById('modal-img').alt = nome;

    document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

const toggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});