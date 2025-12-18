

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
    genre.textContent = book.genre;

    const description = document.createElement('p');
    description.className = 'book-description-short';
    description.textContent = book.description;

    infoDiv.appendChild(title);
    infoDiv.appendChild(author);
    infoDiv.appendChild(genre);
    infoDiv.appendChild(description);

    if (book.linkPastaPDF) {
        const link = document.createElement('a');
        link.href = book.linkPastaPDF;
        link.target = '_blank';
        link.className = 'pdf-link';
        link.textContent = book.linkPastaPDF.includes('/folders/') ? 'Acessar PDFs da Saga' : 'Acessar PDF';
        infoDiv.appendChild(link);
    }

    item.appendChild(coverImg);
    item.appendChild(infoDiv);
    return item;
}

function displayBooksPage(books) {
    bookDisplay.innerHTML = '';
    const start = currentPage * booksPerPage;
    const end = start + booksPerPage;
    const booksToShow = books.slice(start, end);
    const totalPages = Math.ceil(books.length / booksPerPage);

    if (booksToShow.length === 0) {
        bookDisplay.innerHTML = '<p>Nenhum livro encontrado.</p>';
        return;
    }

    booksToShow.forEach(book => bookDisplay.appendChild(createBookItem(book)));

    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = (currentPage + 1) >= totalPages;
    
    // Lógica para o botão "Voltar ao início"
    if (nextPageBtn.disabled && totalPages > 1) {
        nextPageBtn.textContent = "Voltar ao Início";
        nextPageBtn.disabled = false;
    } else {
        nextPageBtn.textContent = "Próxima Página";
    }
}

function loadPrevPage() { if (currentPage > 0) { currentPage--; displayBooksPage(currentBooks); } }
function loadNextPage() {
    if ((currentPage + 1) * booksPerPage >= currentBooks.length) { currentPage = 0; } 
    else { currentPage++; }
    displayBooksPage(currentBooks);
}

function searchBooks() {
    const term = searchInput.value.toLowerCase();
    if (!term.trim()) { filterBooksByGenre(); return; }

    bookDisplay.classList.add('hidden');
    prevPageBtn.classList.add('hidden');
    nextPageBtn.classList.add('hidden');
    resultsContainer.innerHTML = '';

    const filtered = allBooks.filter(b => 
        b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
    );

    if (filtered.length > 0) {
        filtered.forEach(book => {
            const item = document.createElement('div');
            item.className = 'result-item';
            item.innerHTML = `<img src="${book.coverUrl}"><div><h3>${book.title}</h3><p>${book.author}</p></div>`;
            resultsContainer.appendChild(item);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nada encontrado.</p>';
    }
}

function filterBooksByGenre() {
    const selected = genreSelect.value;
    currentBooks = selected === 'Todos' ? [...allBooks] : allBooks.filter(b => b.genre.includes(selected));
    
    bookDisplay.classList.remove('hidden');
    prevPageBtn.classList.remove('hidden');
    nextPageBtn.classList.remove('hidden');
    resultsContainer.innerHTML = '';
    currentPage = 0;
    displayBooksPage(currentBooks);
}

prevPageBtn.addEventListener('click', loadPrevPage);
nextPageBtn.addEventListener('click', loadNextPage);
searchBtn.addEventListener('click', searchBooks);
genreSelect.addEventListener('change', filterBooksByGenre);

document.addEventListener('DOMContentLoaded', () => {
    let allUniqueGenres = [];
    allBooks.forEach(book => {
        const genresArray = book.genre.split('/').map(g => g.trim());
        allUniqueGenres.push(...genresArray);
    });

    const genres = ['Todos', ...new Set(allUniqueGenres)];
    genres.forEach(genre => {
        if (genre) {
            const opt = document.createElement('option');
            opt.value = genre; opt.textContent = genre;
            genreSelect.appendChild(opt);
        }
    });

    filterBooksByGenre();
});