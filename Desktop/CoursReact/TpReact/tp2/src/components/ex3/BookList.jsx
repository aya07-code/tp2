
import React, { useState } from 'react';
import src from './imgg.png';

const books = [
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, price: 41.00, src: src },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, price: 47.00, src: src },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, price: 41.00, src: src },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, price: 45.00, src: src },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, price: 44.00, src: src },
  {title: "War and Peace",author: "Leo Tolstoy",publicationYear:1869,genre: "Historical Fiction",rating: 4.5, price: 50.00,src: src},
  {title: "The Alchemist",author: "Paulo Coelho",publicationYear:1988,genre: "Philosophical Fiction",rating: 4.7, price: 75.00,src: src},
  {title: "2004",author: "Ziad Bilal",publicationYear:2000,genre: "Philosophical Fiction",rating: 5.1, price: 40.00,src: src}
];

const BookList = () => {
  const [genreFilter, setGenreFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [searchTitre, setSearchTitre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const nbrBooks = 5;

  const handleFilterChange = (e) => { setGenreFilter(e.target.value); setSortField('');setCurrentPage(1); };
  const handleSortChange = (e) => { setSortField(e.target.value); setGenreFilter('');setCurrentPage(1);};
  const handleSearchtitre = (e) => {setSearchTitre(e.target.value);setCurrentPage(1);};

  let displayedBooks = books;

  if (genreFilter) {
    displayedBooks = books.filter((book) => book.genre === genreFilter);
  } else if (sortField) {
    displayedBooks = books.sort((a, b) => {
      if (sortField === 'annee') return a.publicationYear - b.publicationYear;
      if (sortField === 'note') return b.rating - a.rating; 
      return 0;
    });
  }
  if (searchTitre) {
    displayedBooks = displayedBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTitre.toLowerCase())
    );
  }
  return (
    <div style={{ padding: '20px' }}>
      <input type="text" placeholder="Rechercher par titre..." value={searchTitre} onChange={handleSearchtitre} style={{ marginBottom: '20px', padding: '5px', width: '100%' }}/>
      <select onChange={handleFilterChange} value={genreFilter} style={{ marginBottom: '20px', padding: '5px' }}>
        <option value="">Tous les genres</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Historical Fiction">Historical Fiction</option>
      </select>

      <select onChange={handleSortChange} value={sortField} style={{ marginBottom: '20px', padding: '5px', marginLeft: '10px' }}>
        <option value="">Trier par...</option>
        <option value="annee">Année de publication</option>
        <option value="note">Note</option>
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
       {displayedBooks.map(book => (
         <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center'}}>
           <img src={book.src} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}/>
           <h3>{book.title}</h3>
           <p><strong>Auteur :</strong> {book.author}</p>
           <p><strong>Genre :</strong> {book.genre}</p>
           <p><strong>Année :</strong> {book.publicationYear}</p>
           <p><strong>Note :</strong> {book.rating} </p>
           <p><strong>Prix :</strong> {book.price} €</p>
         </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button style={{ padding: '10px 20px', marginRight: '10px'}}>
          Précédent
        </button>
        <span>
           / 
        </span>
        <button style={{ padding: '10px 20px', marginLeft: '10px'}}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default BookList;








// import LivreCard from './LivreCard';
// import Pagination from './Pagination';
// import BookTri from './tri';
// import React, { useState } from 'react';
// import src from './imgg.png';

// const books = [
//   { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, price: 41.00, src: src },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, price: 47.00, src: src },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, price: 41.00, src: src },
//   { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, price: 45.00, src: src },
//   { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, price: 44.00, src: src },
// ];

// const BookList = () => {
//     const [genreFilter, setGenreFilter] = useState('');
//     const handleFilterChange = (e) => {
//         setGenreFilter(e.target.value);
//     };
//     const filteredBooks = genreFilter ? books.filter((book) => book.genre === genreFilter) : books;

//     const [sortField, setSortField] = useState('');
//     const handleSortChange = (e) => { setSortField(e.target.value) };
//     const sortedBooks = books.sort((a, b) => {
//       if (sortField === 'annee') return a.publicationYear - b.publicationYear; 
//       if (sortField === 'note') return b.rating - a.rating;
//       return 0; 
//     });

//     if (genreFilter='') {
//         return(
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//           {sortedBooks.map((book) => (
//             <div key={book.title} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center'}}>
//               <img src={book.src} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}}/>
//               <h3>{book.title}</h3>
//               <p><strong>Auteur :</strong> {book.author}</p>
//               <p><strong>Genre :</strong> {book.genre}</p>
//               <p><strong>Année :</strong> {book.publicationYear}</p>
//               <p><strong>Note :</strong> {book.rating} </p>
//               <p><strong>Prix :</strong> {book.price} €</p>
//             </div>
//           ))}
//         </div>
//         )
//     }
//     else if(sortField=''){
//       return(
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//         {filteredBooks.map(book => (
//           <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center'}}>
//             <img src={book.src} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}/>
//             <h3>{book.title}</h3>
//             <p><strong>Auteur :</strong> {book.author}</p>
//             <p><strong>Genre :</strong> {book.genre}</p>
//             <p><strong>Année :</strong> {book.publicationYear}</p>
//             <p><strong>Note :</strong> {book.rating} </p>
//             <p><strong>Prix :</strong> {book.price} €</p>
//           </div>
//         ))}
//       </div>
//       )
//     }
  
//       <div style={{ padding: '20px' }}>
//         <select onChange={handleFilterChange} value={genreFilter}>
//           <option value="">Tous les genres</option>
//           <option value="Dystopian">Dystopian</option>
//           <option value="Classic">Classic</option>
//           <option value="Romance">Romance</option>
//           <option value="Adventure">Adventure</option>
//           <option value="Historical Fiction">Historical Fiction</option>
//           <option value="Philosophical Fiction">Philosophical Fiction</option>
//         </select>
//       </div>

//     {<div style={{ padding: '20px' }} id='sort'>
//         <select onChange={handleSortChange} value={sortField} style={{ marginBottom: '20px', padding: '5px' }}>
//           <option value="">Trier par...</option>
//           <option value="annee">Année de publication</option>
//           <option value="note">Note</option>
//         </select>
//     </div>}

// };
// export default BookList;





// const books =  [
//       { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8 ,price:41.00, src:src},
//       { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9,price:47.00, src:src },
//       { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4,price:41.00, src:src },
//       { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7,price:45.00, src:src },
//       { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1 ,price:44.00, src:src},
//       { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5,price:43.00, src:src },
//     ];
// const BookList = () => {
//   const [filteredBooks, setFilteredBooks] = useState(books);
//   const [genreFilter, setGenreFilter] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const booksPerPage = 5;

//   // Handle filtering by genre
//   const handleFilterChange = (e) => {
//     setGenreFilter(e.target.value);
//     setCurrentPage(1);
//   };

//   // Handle sorting
//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   // Handle searching by title
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//     setCurrentPage(1);
//   };

//   // Filter and sort books
//   const displayedBooks = filteredBooks
//     .filter((book) =>
//       book.title.toLowerCase().includes(searchTerm) &&
//       (genreFilter === '' || book.genre === genreFilter)
//     )
//     .sort((a, b) => {
//       if (sortOrder === 'asc') return a.publicationYear - b.publicationYear;
//       return b.publicationYear - a.publicationYear;
//     });

//   // Pagination logic
//   const totalPages = Math.ceil(displayedBooks.length / booksPerPage);
//   const paginatedBooks = displayedBooks.slice(
//     (currentPage - 1) * booksPerPage,
//     currentPage * booksPerPage
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Filter by genre */}
//       <select onChange={handleFilterChange} value={genreFilter}>
//         <option value="">Tous les genres</option>
//         <option value="Dystopian">Dystopian</option>
//         <option value="Classic">Classic</option>
//         <option value="Romance">Romance</option>
//         <option value="Adventure">Adventure</option>
//         <option value="Historical Fiction">Historical Fiction</option>
//         <option value="Philosophical Fiction">Philosophical Fiction</option>
//       </select>

//       {/* Sort by year */}
//       <select onChange={handleSortChange} value={sortOrder}>
//         <option value="asc">Année (croissant)</option>
//         <option value="desc">Année (décroissant)</option>
//       </select>

//       {/* Search by title */}
//       <input
//         type="text"
//         placeholder="Rechercher par titre"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         style={{ marginLeft: '10px' }}
//       />

//       {/* Display books */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
//         {paginatedBooks.map((book, index) => (
//           <LivreCard key={index} book={book} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default BookList;