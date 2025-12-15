const allBooks = [
    {
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        coverUrl: "img/orgulhoPreconceito.jpg",
        description: "Um romance de costumes e classes que narra a complexa relação entre Elizabeth Bennet e o reservado Sr. Darcy. O livro explora temas como reputação, casamento, distinção de classes e a superação de julgamentos apressados e falhas de comunicação.",
        genre: "Clássico"
    },
    {
        title: "Saga After (6 Livros)",
        author: "Anna Todd",
        coverUrl: "img/aftersaga.jpg",
        description: "Série completa (6 volumes) que narra o intenso e tumultuado relacionamento 'New Adult' entre a metódica Tessa Young e o misterioso Hardin Scott. A saga explora paixão, segredos e amadurecimento, abrangendo os volumes: 'After', 'Depois da Verdade', 'Depois do Desencontro', 'Depois da Esperança', 'Depois Para Sempre' e a prequela 'Before'.",
        genre: "New Adult / Romance",
        linkPastaPDF: "https://drive.google.com/drive/folders/1t_wd3cwH1P_nvxkq3agzz1qB9QUBfskn?usp=drive_link"
    },
    {
        title: "Dom Quixote",
        author: "Miguel de Cervantes",
        coverUrl: "img/dom-quixote.jpg",
        description: "A aventura de um cavaleiro sonhador. Alonso Quijano, um fidalgo espanhol de meia-idade, enlouquece lendo romances de cavalaria e decide se tornar o cavaleiro andante Dom Quixote de La Mancha. Ao lado de seu fiel escudeiro, Sancho Pança, ele parte em uma jornada cômica e melancólica, misturando realidade e fantasia.",
        genre: "Clássico",
        linkPastaPDF: "https://drive.google.com/file/d/16X7bWR3EO__aTLz4w5O_gfhI3MFXB-yi/view?usp=drive_link" // LINK DO ARQUIVO SOLTO
    },
    {
        title: "Vermelho, Branco e Sangue Azul",
        author: "Casey McQuiston",
        coverUrl: "img/vermelho-branco-sangue-azul.jpg",
        description: "A história foca no relacionamento secreto entre Alex Claremont-Diaz, o Primeiro Filho dos EUA, e o Príncipe Henry da Grã-Bretanha. O que começa como uma rivalidade pública e forçada transforma-se em um romance de alto risco político e pessoal.",
        genre: "New Adult / Romance / LGBTQIA+",
        linkPastaPDF: "https://drive.google.com/file/d/1_kV8QxdL-yu-otnJ10HKlLGxLqecSAYl/view?usp=drive_link"
    },
    {
        title: "Diário de um Banana: A Saga Completa",
        author: "Jeff Kinney",
        coverUrl: "img/sagaDiarioDeUmBanana.jpg",
        description: "Acompanhe as hilárias e desastrosas aventuras de Greg Heffley, um garoto na transição para a adolescência, em seus 19 livros publicados. A saga aborda a escola, a família e a luta para ser popular, tudo contado através de seus cadernos rabiscados.",
        genre: "Infantojuvenil",
        linkPastaPDF: "https://drive.google.com/drive/folders/1JncDgVMR1FcR22hE2L5jdgiO_dfslD8T?usp=drive_link"
    },
    {
        title: "Saga Bridgerton (9 Livros/Volumes)",
        author: "Julia Quinn",
        coverUrl: "img/bridgerton9.webp",
        description: "Coleção de 8 romances principais focados nos irmãos Bridgerton, mais o volume extra com os segundos epílogos. Subtítulos principais: O Duque e Eu, O Visconde Que Me Amava, Um Perfeito Cavalheiro, Sedução ao Amanhecer, Para Sir Phillip, Com Amor, O Conde Enfeitiçado, Um Beijo Inesperado e A Caminho do Altar. O nono volume é 'E Viveram Felizes Para Sempre'.",
        genre: "Romance de Época",
        linkPastaPDF: "https://drive.google.com/drive/folders/1fhZOfZfRLvzZ8lqq5TwyhTydOol9tQPE?usp=drive_link"
    }
];

// Elementos DOM
const bookDisplay = document.getElementById('book-display');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');
const genreSelect = document.getElementById('genre-select');

let currentBooks = [...allBooks];
let currentPage = 0;
const booksPerPage = 4;

/**
 * Função para criar o HTML de um único item de livro.
 * @param {Object} book - O objeto do livro.
 */
function createBookItem(book) {
    const item = document.createElement('div');
    item.className = 'book-item';

    const coverImg = document.createElement('img');
    coverImg.src = book.coverUrl;
    coverImg.alt = `Capa do Livro: ${book.title}`;

    const infoDiv = document.createElement('div');
    infoDiv.className = 'book-info-compact';

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('span');
    author.className = 'author';
    author.textContent = book.author;

    const genre = document.createElement('p');
    genre.className = 'genre-tag';
    genre.textContent = `Gênero: ${book.genre} `;

    const description = document.createElement('p');
    description.className = 'book-description-short';
    description.textContent = book.description;

    // LÓGICA DE LINK: Adiciona o link da pasta/arquivo PDF se ele existir
    if (book.linkPastaPDF) {
        const link = document.createElement('a');
        link.href = book.linkPastaPDF;
        link.target = '_blank'; // Abre em nova aba
        link.className = 'pdf-link';

        // Determina o texto do link com base se é uma pasta ou um arquivo
        const isFolder = book.linkPastaPDF.includes('/folders/');

        if (isFolder) {
            link.textContent = 'Acessar PDFs da Saga (Google Drive)';
        } else {
            link.textContent = 'Acessar PDF (Google Drive)';
        }

        infoDiv.appendChild(title);
        infoDiv.appendChild(author);
        infoDiv.appendChild(genre);
        infoDiv.appendChild(description);
        infoDiv.appendChild(link); // Adiciona o link abaixo da descrição
    } else {
        infoDiv.appendChild(title);
        infoDiv.appendChild(author);
        infoDiv.appendChild(genre);
        infoDiv.appendChild(description);
    }

    item.appendChild(coverImg);
    item.appendChild(infoDiv);
    return item;
}

/**
 * Exibe 4 livros horizontalmente (a "página" atual).
 */
function displayBooksPage(books) {
    bookDisplay.innerHTML = '';

    const start = currentPage * booksPerPage;
    const end = start + booksPerPage;
    const booksToShow = books.slice(start, end);
    const totalPages = Math.ceil(books.length / booksPerPage);

    if (booksToShow.length === 0) {
        bookDisplay.innerHTML = '<p class="message">Nenhum livro encontrado para este filtro.</p>';
        prevPageBtn.disabled = true;
        nextPageBtn.disabled = true;
        return;
    }

    booksToShow.forEach(book => {
        bookDisplay.appendChild(createBookItem(book));
    });

    // LÓGICA DE HABILITAR/DESABILITAR BOTÕES
    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = (currentPage + 1) >= totalPages;

    if (nextPageBtn.disabled && currentPage !== 0) {
        nextPageBtn.textContent = "Voltar ao Início";
        nextPageBtn.disabled = false;
    } else if (nextPageBtn.disabled && totalPages <= 1) {
        nextPageBtn.disabled = true;
        nextPageBtn.textContent = "Próxima Página";
    } else {
        nextPageBtn.textContent = "Próxima Página";
    }
}

/**
 * Move para a página anterior de livros.
 */
function loadPrevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayBooksPage(currentBooks);
    }
}

/**
 * Move para a próxima página de livros (ou reinicia).
 */
function loadNextPage() {
    const totalPages = Math.ceil(currentBooks.length / booksPerPage);

    // Se estiver na última página, volta para a primeira
    if ((currentPage + 1) * booksPerPage >= currentBooks.length) {
        currentPage = 0;
    } else {
        currentPage++;
    }

    displayBooksPage(currentBooks);
}

/**
 * Função de busca.
 */
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();

    if (!searchTerm.trim()) {
        filterBooksByGenre();
        return;
    }

    // Esconde a área de 4 livros/botões e mostra os resultados em lista
    bookDisplay.classList.add('hidden');
    prevPageBtn.classList.add('hidden');
    nextPageBtn.classList.add('hidden');
    resultsContainer.innerHTML = '';

    // Filtra pelo título, autor OU descrição
    const filtered = currentBooks.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const authorMatch = book.author.toLowerCase().includes(searchTerm);
        const descriptionMatch = book.description.toLowerCase().includes(searchTerm);
        return titleMatch || authorMatch || descriptionMatch;
    });

    if (filtered.length > 0) {
        displaySearchResults(filtered);
    } else {
        resultsContainer.innerHTML = '<p>Nenhum livro encontrado com o termo de busca.</p>';
    }
}

/**
 * Exibe os resultados da busca em formato de lista.
 * @param {Array} results - Array de objetos de livro encontrados.
 */
function displaySearchResults(results) {
    results.forEach(book => {
        const item = document.createElement('div');
        item.className = 'result-item';

        const img = document.createElement('img');
        img.src = book.coverUrl;
        img.alt = `Capa de ${book.title} `;

        const details = document.createElement('div');
        details.className = 'result-details';

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Por: ${book.author} `;

        // Exibe a descrição na lista de busca (com limite de 120 caracteres para a lista)
        const description = document.createElement('p');
        description.textContent = book.description.substring(0, 120) + '...';
        description.style.fontSize = '0.85em';
        description.style.color = '#777';


        details.appendChild(title);
        details.appendChild(author);
        details.appendChild(description);
        item.appendChild(img);
        item.appendChild(details);

        resultsContainer.appendChild(item);
    });
}

/**
 * Filtra os livros pelo gênero selecionado no dropdown (LÓGICA AJUSTADA).
 */
function filterBooksByGenre() {
    const selectedGenre = genreSelect.value;

    if (selectedGenre === 'Todos') {
        currentBooks = [...allBooks];
    } else {
        // Filtra para ver se a string do gênero do livro CONTÉM o gênero selecionado
        currentBooks = allBooks.filter(book =>
            book.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );
    }

    // Reabilita a visualização de 4 livros e botões
    bookDisplay.classList.remove('hidden');
    prevPageBtn.classList.remove('hidden');
    nextPageBtn.classList.remove('hidden');
    resultsContainer.innerHTML = '';

    // Reseta a paginação e mostra a primeira página do novo filtro
    currentPage = 0;
    searchInput.value = '';

    displayBooksPage(currentBooks);
}

// Event Listeners
prevPageBtn.addEventListener('click', loadPrevPage);
nextPageBtn.addEventListener('click', loadNextPage);
searchBtn.addEventListener('click', searchBooks);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBooks();
    }
});
genreSelect.addEventListener('change', filterBooksByGenre);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // LÓGICA DE POPULAÇÃO DE GÊNEROS CORRIGIDA E MELHORADA
    // ----------------------------------------------------

    // 1. Coleta todos os gêneros, separando aqueles com "/"
    let allUniqueGenres = [];
    allBooks.forEach(book => {
        // Divide o gênero por "/" e remove espaços em branco extras
        const genresArray = book.genre.split('/').map(g => g.trim());
        allUniqueGenres.push(...genresArray);
    });

    // 2. Cria um Set para garantir que cada gênero apareça apenas uma vez
    const genres = ['Todos', ...new Set(allUniqueGenres)];

    // 3. Popula o dropdown
    genres.forEach(genre => {
        // Ignora strings vazias que podem surgir de separações
        if (genre) {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreSelect.appendChild(option);
        }
    });

    // ----------------------------------------------------

    filterBooksByGenre();
});