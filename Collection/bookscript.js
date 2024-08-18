document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { title: "Zero to ONE", category: "Biography", image: "../Media/zerotoone.jpg" },
        { title: "How Innovation Works", category: "Arts", image: "../Media/howinnovationworks.jpg" },
        { title: "Stupore", category: "Design", image: "../Media/stupore.jpg" },
        { title: "Cook Like a Chef", category: "Cookery", image: "../Media/cooklikeachef.jpg" },
        { title: "Healthy Living", category: "Health", image: "../Media/Healthyliving.jpg" }
    ];

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search');

    function displayBooks(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h4>${book.title}</h4>
            `;
            bookList.appendChild(bookCard);
        });
    }

    // Initial display of books
    if (bookList) { 
        displayBooks(books);

        // Search books
        searchInput?.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
            displayBooks(filteredBooks);
        });
    }
});
