console.log('mostrar o document', document);

console.log(document.querySelector('.botao-trailer'));

const link = video.src;

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const fecharModal = document.querySelector('.fechar-modal');

const botaoTrailer = document.querySelector('.botao-trailer');

function bunda (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    bunda();
    video.setAttribute("src", link);
});

fecharModal.addEventListener("click", () => {
bunda();
video.setAttribute("src", "");
});