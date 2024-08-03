//Created the empty array library
let library = [];
console.log(library);

// Added all the book objects to the library array using the push method
library.push({Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", YearPublished: 1925, Availability: true});
library.push({Title: "To Kill a Mockingbird", Author: "Harper Lee", YearPublished: 1960, Availability: true});
library.push({Title: "1984", Author: "George Orwell", YearPublished: 1949, Availability: false});
library.push({Title: "Pride and Prejudice", Author: "Jane Austine", YearPublished: 1813, Availability: true});
console.log(library);

// Updated the availability of 1949 book to true
library[2].Availability = true;
console.log(library[2]);

// Removed the "Pride and Prejudice" book from the library using the splice method
library.splice(3, 1);
console.log(library);

// Checked if "The Great Gatsby" is in the library
let Book = library.some(book => book.Title === "The Great Gatsby");
console.log(Book);

//Changed the 1st book Availability status to false
library[0].Availability = false;
console.log(library[0]);

// Removed the first book from the library array
library.shift();
console.log(library);

// Added a new book to the library
library.unshift({Title: "The Catcher in the Rye", Author: "J.D. Salinger", YearPublished: 1951, Availability: true});
console.log(library);

// Listed all the books titles in the array
let bookTitles = library.map(book => book.Title).join(', ');
console.log(bookTitles);

//Created a new library section called newArrivals
let newArrrivals = library.slice(1);
console.log(newArrrivals);