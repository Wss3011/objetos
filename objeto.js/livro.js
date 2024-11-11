const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Pai rico e Pai pobre',
    autor: 'Wagner Silva',
    anoPublicacao: 2010,
    genero: 'economia',
    avaliacao: {nota: 4.5, comentario:'Ótima Leitura!'}

}

const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
    if (livro.avaliacao === null) {
        livro.avaliacao = novaAvaliacao;
    } else {
        console.log("Este livro já possui uma avaliação.");
    }

    livro.genero = 'Aventura';
    livro.anoAtual = 2024;
    livro.idadePublicacao = anoAtual - livro.anoPublicacao;
    delete livro.avaliacao;
    console.log(livro);

    console.log("Detalhes do Livro:");
    console.log("Título: " + livro['titulo']);
    console.log("Autor: " + livro['autor']);
    console.log("Ano de Publicação: " + livro['anoPublicacao']);
    console.log("Gênero: " + livro['genero']);
    console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");
