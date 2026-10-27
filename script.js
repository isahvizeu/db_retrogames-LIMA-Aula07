const btnCadastrar = document.getElementById("btnCadastrar");
const btnCancelar = document.getElementById("btnCancelar");
const modalCadastro = document.getElementById("modalCadastro");
const formJogo = document.getElementById("formJogo");
const listarJogos = document.getElementById("listarJogos");
const mensagemVazia = document.getElementById("mensagemVazia");

let jogos = [];

btnCadastrar.addEventListener("click", () => {
    modalCadastro.showModal();
});

btnCancelar.addEventListener("click", () => {
    modalCadastro.close();
    formJogo.reset();
});

formJogo.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const plataforma = document.getElementById("plataforma").value;
    const desenvolvedora = document.getElementById("desenvolvedora").value;
    const imagem_url = document.getElementById("imagem_url").value;
    const preco = Number(document.getElementById("preco").value);

    const jogo = {
        titulo,
        plataforma,
        desenvolvedora,
        imagem_url,
        preco
    };

    jogos.push(jogo);
    mostrarJogos();

    formJogo.reset();
    modalCadastro.close();
});

function mostrarJogos() {
    listarJogos.innerHTML = "";

    if (jogos.length === 0) {
        listarJogos.appendChild(mensagemVazia);
        return;
    }

    jogos.forEach((jogo) => {
        const card = document.createElement("article");
        card.className = "card-jogo";

        const imagem = document.createElement("img");
        imagem.src = jogo.imagem_url;
        imagem.alt = "Capa do jogo " + jogo.titulo;

        const info = document.createElement("div");
        info.className = "info-jogo";

        const titulo = document.createElement("h3");
        titulo.textContent = jogo.titulo;

        const plataforma = document.createElement("p");
        plataforma.textContent = "Plataforma: " + jogo.plataforma;

        const desenvolvedora = document.createElement("p");
        desenvolvedora.textContent = "Desenvolvedora: " + jogo.desenvolvedora;

        const preco = document.createElement("p");
        preco.className = "preco";
        preco.textContent = jogo.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        info.append(titulo, plataforma, desenvolvedora, preco);
        card.append(imagem, info);
        listarJogos.appendChild(card);
    });
}