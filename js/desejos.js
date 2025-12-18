document.getElementById('wishlist-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const book = document.getElementById('book-name').value;
    const author = document.getElementById('author-name').value || "Não informado";
    const status = document.getElementById('status-msg');

    // Formata a mensagem para o Telegram
    const message = `Olá! Gostaria de pedir um livro para o site:%0A📚 *Livro:* ${book}%0A✍️ *Autor:* ${author}`;
    
    // Substitua 'Reeh200' pelo seu username do Telegram
    const telegramUrl = `https://t.me/Reeh200?text=${message}`;

    status.innerHTML = "<p style='color: green;'>Redirecionando para o Telegram...</p>";

    // Abre o Telegram do usuário com a mensagem pronta
    setTimeout(() => {
        window.open(telegramUrl, '_blank');
        status.innerHTML = "";
        this.reset();
    }, 1000);
});

// Lógica de Modo Escuro simples
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') body.classList.add('dark-mode');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});