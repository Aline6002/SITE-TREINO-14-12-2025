const allBooks = [
    {
        title: "Saga After (6 Livros)",
        author: "Anna Todd",
        coverUrl: "img/aftersaga.jpg",
        description: "Série completa (6 volumes) que narra o intenso e tumultuado relacionamento 'New Adult' entre a metódica Tessa Young e o misterioso Hardin Scott.",
        genre: "Romance",
        linkPastaPDF: "https://drive.google.com/drive/folders/15J9mjbiDWWe1HpaQvpx9xIgPNqh1DRvk?usp=drive_link"
    },
    {
        title: "Heartstopper (Série de Quadrinhos)",
        author: "Alice Oseman",
        coverUrl: "img/heartstopper.png",
        description: "Série de webcomics e graphic novels (5 volumes) que acompanha o desenvolvimento do doce relacionamento entre Charlie Spring e Nick Nelson.",
        genre: "Romance / LGBTQIA+",
        linkPastaPDF: "https://drive.google.com/drive/folders/1BnsE4Vd3KyGc6RwYmQV5M18oftexKyfA?usp=drive_link"
    },
    {
        title: "Com Amor, Simon",
        author: "Becky Albertalli",
        coverUrl: "img/simon.jpg",
        description: "Simon Spier é um adolescente gay que troca e-mails secretos com um garoto anônimo. Quando é chantageado, precisa lutar para manter seu segredo.",
        genre: "Romance / LGBTQIA+",
        linkPastaPDF: "https://drive.google.com/file/d/1v-7786SZ-kOs6fFe6XcPW2U4A0gutE3B/view?usp=drive_link"
    },
    {
        title: "Dom Quixote",
        author: "Miguel de Cervantes",
        coverUrl: "img/dom-quixote.jpg",
        description: "A aventura de um cavaleiro sonhador que enlouquece lendo romances de cavalaria e parte em uma jornada cômica com seu fiel escudeiro Sancho Pança.",
        genre: "Clássico",
        linkPastaPDF: "https://drive.google.com/file/d/14HpirQr-udKiBeuA4AzUuV2GkgBrwDgt/view?usp=drive_link"
    },
    {
        title: "Vermelho, Branco e Sangue Azul",
        author: "Casey McQuiston",
        coverUrl: "img/vermelho-branco-sangue-azul.jpg",
        description: "A história foca no relacionamento secreto entre Alex, o Primeiro Filho dos EUA, e o Príncipe Henry da Grã-Bretanha.",
        genre: "Romance / LGBTQIA+",
        linkPastaPDF: "https://drive.google.com/file/d/1eWlB7bSFBBokLJih8p1RECPp08_8QGMA/view?usp=drive_link"
    },
    {
        title: "It: A Coisa",
        author: "Stephen King",
        coverUrl: "img/it-a-coisa.jpg",
        description: "Em Derry, o mal assume a forma de Pennywise. Sete amigos enfrentam seus piores pesadelos na infância e retornam adultos para destruir a entidade.",
        genre: "Terror",
        linkPastaPDF: "https://drive.google.com/file/d/1NpXnRW8x6lcwUiAWC7MkMxi8X3MuHG0_/view?usp=drive_link"
    },
    {
        title: "Diário de um Banana: A Saga Completa",
        author: "Jeff Kinney",
        coverUrl: "img/sagaDiarioDeUmBanana.jpg",
        description: "As hilárias aventuras de Greg Heffley em seus 19 livros. A saga aborda a escola, a família e a luta para ser popular.",
        genre: "Infantojuvenil / Comédia",
        linkPastaPDF: "https://drive.google.com/drive/folders/11YsZ5Gun_gh2rt0tEpvP2gmWRRi2NI7w?usp=drive_link"
    },
    {
        title: "Trilogia Culpados",
        author: "Mercedes Ron",
        coverUrl: "img/CULPABLES.jpg",
        description: "Série que narra a intensa e proibida história de amor entre Noah e seu novo meio-irmão Nick em Los Angeles.",
        genre: "Romance",
        linkPastaPDF: "https://drive.google.com/drive/folders/1nbDf1CSsID4jf2d0Y2jsEr23v6RxCDSo?usp=drive_link"
    },
    {
        title: "Saga Bridgerton (9 Livros)",
        author: "Julia Quinn",
        coverUrl: "img/bridgerton9.jpg",
        description: "Coleção de romances focados nos irmãos Bridgerton, explorando o mercado matrimonial da alta sociedade londrina.",
        genre: "Romance / De Época",
        linkPastaPDF: "https://drive.google.com/drive/folders/1SN-A_zuTHgmULwyMliCzKGzYYNr_pKN1?usp=drive_link"
    },
    {
        title: "O Diário de Anne Frank",
        author: "Anne Frank",
        genre: "História",
        description: "O relato íntimo de uma jovem escondida durante a Segunda Guerra Mundial. Um testemunho poderoso sobre esperança e resiliência.",
        coverUrl: "img/anneFrank.jpeg",
        linkPastaPDF: "https://drive.google.com/file/d/1Ucgtw1vIOkDsmgItapG67RthiSvA3ZY8/view?usp=drive_link"
    },
    {
        title: "A Gente se Vê na Madruga",
        author: "Pedro H. Oliveira",
        genre: "Romance / LGBTQIA+",
        description: "Uma obra que mergulha nas reflexões e sentimentos que surgem no silêncio da noite, explorando a fundo as conexões humanas.",
        coverUrl: "img/madruga.jpeg",
        linkPastaPDF: "https://drive.google.com/file/d/1kVcFrUAd1ejNFFU5V1jfXj4HEw7piKDZ/view?usp=drive_link"
    },
    {
        title: "A Gente Mira no Amor e Acerta na Solidão",
        author: "Ana Suy",
        genre: "Psicologia / Não Ficção",
        description: "Um livro que nos convida a pensar sobre as relações amorosas e a solidão de forma acolhedora, mostrando que um não exclui o outro.",
        coverUrl: "img/amorSolidao.jpg",
        linkPastaPDF: "https://drive.google.com/file/d/1Mqi2-133bZ6yxhliXNWcm7kvywkkYKCr/view?usp=drive_link"
    },
    {
        title: "Gente Ansiosa",
        author: "Fredrik Backman",
        genre: "Ficção / Comédia",
        description: "Uma comédia emocionante sobre um assalto a banco que nunca aconteceu e como pessoas estranhas podem ter mais em comum do que imaginam.",
        coverUrl: "img/genteAnsiosa.jpg",
        linkPastaPDF: "https://drive.google.com/file/d/1iAuPwFbWV7FtWEf52onerW-WSzJed-9Z/view?usp=drive_link"
    },
    {
        title: "Enfodere-se!",
        author: "Caio Carneiro",
        genre: "Autoajuda / Desenvolvimento Pessoal",
        description: "Um guia prático e motivacional para quem deseja ter mais confiança e assumir o controle da própria vida, transformando desafios em conquistas.",
        coverUrl: "img/enfodere-se.jpg",
        linkPastaPDF: "https://drive.google.com/file/d/19I1nKMOZUJCvmZFFcl24Tibx-zPriy8N/view?usp=drive_link"
    },
    {
        title: "Trilogia: Através de Minha Janela",
        author: "Ariana Godoy",
        genre: "Romance",
        description: "Acompanhe a história dos três irmãos Hidalgo: Ares, Artemis e Apolo. Uma trilogia intensa sobre desejos, segredos de família e amores que desafiam barreiras.",
        coverUrl: "img/HIDALGOS.jpg",
        linkPastaPDF: "LINK_DA_PASTA_COM_OS_3_LIVROS"
    },
    {
        title: "Trilogia: A Barraca do Beijo e a Versão do Noah",
        author: "Beth Reekles",
        genre: "Romance",
        description: "Elle se vê em uma situação complicada quando se apaixona por Noah, o irmão mais velho e galã do seu melhor amigo. A série acompanha os desafios desse namoro, as escolhas sobre o futuro e os mesmos eventos vistos pelo olhar do Noah.",
        coverUrl: "img/barracaBeijo.jpg",
        linkPastaPDF: "https://drive.google.com/drive/folders/1Ph1wEO8Yc_S1oqGib7kfKemS9tm1kDB5?usp=drive_link"
    },
    {
        title: "Tudo o que meu coração grita",
        author: "Gabriela Freitas",
        genre: "Poesia / Reflexão",
        description: "Uma reunião de textos sensíveis sobre as fases da vida, o processo de cura e o amadurecimento que vem através das experiências do coração.",
        coverUrl: "img/coracaoGRITA.jpg",
        linkPastaPDF: "https://drive.google.com/file/d/165kWJP5X34i_pJ-cAbkzbVaVQbaoVuiO/view?usp=sharing"
    },
    {
        title: "Continência ao Amor",
        author: "Tess Wakefield",
        genre: "Romance",
        description: "Cassie e Luke não poderiam ser mais diferentes, mas um casamento de conveniência por benefícios militares acaba transformando uma farsa em um sentimento real e intenso diante das dificuldades.",
        coverUrl: "img/CONTINENCIA.jpg",
        linkPastaPDF: "https://drive.google.com/file/d/12WBiSnKnANelwEablErNR4Ju4GeViiQB/view?usp=drive_link"
    },
    {
        title: "Série: Amores Improváveis",
        author: "Elle Kennedy",
        genre: "Romance",
        description: "Acompanhe as histórias de amor e amadurecimento dos jogadores de hóquei da Universidade de Briar. Inclui os livros: O Acordo, O Erro, O Jogo, A Conquista e o encerramento da série, O Legado.",
        coverUrl: "img/AmoresImprovaveis.jpg",
        linkPastaPDF: "https://drive.google.com/drive/folders/1ypver3894ZH8SZt8JbDpvrl3dRtmG6N5?usp=drive_link"
    },
{
        title: "O Véu Escarlate",
        author: "Shelby Mahurin",
        genre: "Fantasia / Romance",
        description: "Spin-off da série Pássaro e Serpente, acompanha Célie Tremblay em uma jornada sombria repleta de vampiros, magia de sangue e mistérios em Belterra.",
        coverUrl: "img/veu.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "O Deus e a Raposa",
        author: "Sophie Kim",
        genre: "Fantasia / Mitologia",
        description: "Um deus caído e uma gumiho (raposa de nove caudas) precisam se unir em uma Nova Sinsi moderna para resolver uma série de crimes e enfrentar demônios.",
        coverUrl: "img/deusRaposa.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "Olhos Prateados (FNAF)",
        author: "Scott Cawthon & Kira Breed-Wrisley",
        genre: "Terror / Suspense",
        description: "Dez anos após os crimes na Pizzaria Freddy Fazbear’s, Charlie e seus amigos retornam à cidade e descobrem que os animatrônicos ainda escondem segredos letais.",
        coverUrl: "img/olhosPrateados.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "Phantasma",
        author: "Kaylie Smith",
        genre: "Dark Fantasy Romance / Romance",
        description: "Um romance gótico e sombrio onde uma jovem com habilidades espirituais entra em uma mansão assombrada e se envolve com um espírito perigoso.",
        coverUrl: "img/phantasma.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "A Cidade dos Fantasmas",
        author: "Victoria Schwab",
        genre: "Fantasia / Juvenil / Aventura",
        description: "Cassidy Blake pode ver fantasmas e, em uma viagem para Edimburgo, ela deve aprender a atravessar o véu e enfrentar espíritos que não querem ser esquecidos.",
        coverUrl: "img/cidadeFantasmas.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "Série: Vicious Lost Boys",
        author: "Nikki St. Crowe",
        genre: "Romance / Dark Romance",
        description: "Uma releitura picante e sombria de Peter Pan. Inclui os volumes: A Sombra da Terra do Nunca, A Rainha da Terra do Nunca e Os Príncipes da Terra do Nunca.",
        coverUrl: "img/lostBoys.jpeg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "A Garota Na Neve",
        author: "Danya Kukafka",
        genre: "Thriller / Suspense",
        description: "Após o assassinato de uma jovem popular, a vida de três pessoas se entrelaça em uma investigação que revela as obsessões e segredos de uma pequena cidade.",
        coverUrl: "img/AGarotaNaNeve.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    },
    {
        title: "Mentirosos",
        author: "E. Lockhart",
        genre: "Suspense",
        description: "Acompanhe a rica e aparentemente perfeita família Sinclair em sua ilha particular, onde um segredo terrível está escondido por trás de memórias fragmentadas.",
        coverUrl: "img/Mentirosos.jpg",
        linkPastaPDF: "LINK_DA_SUA_PASTA_AQUI"
    }

];
