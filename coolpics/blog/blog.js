// Book data
const books = [
    {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    published: "1998",
    reviewDate: "September 1, 1998",
    cover: "images/Harry_Potter.jpg",
    altText: "Book cover of Harry Potter and the Sorcerer's Stone",
    description: "Join Harry Potter as he discovers the magical world and his destiny as a wizard. A story filled with adventure, friendship, and courage.",
    genre: "fantasy",
    age: "8-12",
    rating: 5
    },
    {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    published: "1937",
    reviewDate: "September 21, 1937",
    cover: "images/Hobbit.webp",
    altText: "Book cover of The Hobbit by J. R. R. Tolkien",
    description: "Bilbo Baggins embarks on an unexpected journey to help reclaim a stolen treasure from a dragon.",
    genre: "fantasy",
    age: "13-18",
    rating: 4
    },
];

// Function to display books dynamically
function displayBooks(bookArray) {
    const articlesSection = document.querySelector(".articles");
  articlesSection.innerHTML = ""; // Clear previous content

    bookArray.forEach(book => {
    const article = document.createElement("article");
    article.innerHTML = `
    <div class="article-details">
        <p class="date">${book.published}</p>
        <p class="author">${book.author}</p>
    </div>
    <div class="article-content">
        <h2>${book.title}</h2>
        <img src="${book.cover}" alt="${book.altText}">
        <p>${book.description}</p>
    </div>
    `;
    articlesSection.appendChild(article);
    });
}

// Display all books initially
displayBooks(books);

// Filter form functionality
const filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const sortValue = document.getElementById("sort").value;
    const ageValue = document.getElementById("age").value;
    const genreValue = document.getElementById("genre").value;
    const ratingValue = document.getElementById("rating").value;

    let filteredBooks = [...books];

  // Filter by age
    if (ageValue) filteredBooks = filteredBooks.filter(book => book.age === ageValue);

  // Filter by genre
    if (genreValue) filteredBooks = filteredBooks.filter(book => book.genre === genreValue);

  // Filter by rating
    if (ratingValue) filteredBooks = filteredBooks.filter(book => book.rating === parseInt(ratingValue));

  // Sort books
    if (sortValue === "newest") {
    filteredBooks.sort((a, b) => parseInt(b.published) - parseInt(a.published));
    } else if (sortValue === "oldest") {
    filteredBooks.sort((a, b) => parseInt(a.published) - parseInt(b.published));
    } else if (sortValue === "rating") {
    filteredBooks.sort((a, b) => b.rating - a.rating);
    }

    displayBooks(filteredBooks);
});

// Accessibility-friendly theme toggle
const toggleBtn = document.getElementById('toggle-theme');
const themeStatus = document.getElementById('theme-status');

if (toggleBtn && themeStatus) {
    toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'Dark' : 'Light';
    themeStatus.textContent = `Current theme: ${theme}`;
    });
}
