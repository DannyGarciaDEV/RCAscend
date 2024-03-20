// Create an html page that displays a list of books with their titles and authors.
// The data is provided in an array of objects.
// Each book should be displayed as a list item in an unordered list.
// The title should be in bold, and the author's name should be in italics.
// Additionally, each list item should have a different background color based on the genre of the book.


const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming-of-Age" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "To the Lighthouse", author: "Virginia Woolf", genre: "Modernist" },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism" }
];

books.forEach(function(book) {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Set the class for the genre-based background color
    listItem.classList.add(book.genre.toLowerCase().replace(' ', '-'));

    // Create a bold element for the title
    const titleElement = document.createElement('span');
    titleElement.textContent = book.title;
    titleElement.classList.add('bold');

    // Create an italic element for the author
    const authorElement = document.createElement('span');
    authorElement.textContent = ' by ' + book.author;
    authorElement.classList.add('italic');

    // Append the title and author elements to the list item
    listItem.appendChild(titleElement);
    listItem.appendChild(authorElement);

    // Append the list item to the unordered list
    document.querySelector('ul').appendChild(listItem);
});