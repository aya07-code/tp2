// import React from 'react';

// const Pagination = ({ totalPages, currentPage, onPageChange }) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => onPageChange(index + 1)}
//           style={{
//             margin: '0 5px',
//             padding: '5px 10px',
//             backgroundColor: currentPage === index + 1 ? '#007bff' : '#f8f9fa',
//             color: currentPage === index + 1 ? '#fff' : '#000',
//             border: '1px solid #ccc',
//           }}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;


import React, { useState } from 'react';
import src from './imgg.png';

const books = [
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, price: 41.00, src: src },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, price: 47.00, src: src },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, price: 41.00, src: src },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, price: 45.00, src: src },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, price: 44.00, src: src },
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5, price: 50.00, src: src },
  { title: "Meditations", author: "Marcus Aurelius", publicationYear: 180, genre: "Philosophical Fiction", rating: 4.6, price: 38.00, src: src },
];

const BookList = () => {
  const [genreFilter, setGenreFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const nbrBooks = 5;

  // Gestion du filtre par genre
  const handleFilterChange = (e) => {
    setGenreFilter(e.target.value);
    setSortField('');
    setCurrentPage(1); // Réinitialiser à la première page après un changement
  };

  // Gestion du tri
  const handleSortChange = (e) => {
    setSortField(e.target.value);
    setGenreFilter('');
    setCurrentPage(1); // Réinitialiser à la première page après un changement
  };

  // Gestion de la recherche par titre
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Réinitialiser à la première page après une recherche
  };

  // Appliquer les filtres, le tri et la recherche
  let displayedBooks = books;

  if (genreFilter) {
    displayedBooks = displayedBooks.filter((book) => book.genre === genreFilter);
  } else if (sortField) {
    displayedBooks = [...displayedBooks].sort((a, b) => {
      if (sortField === 'annee') return a.publicationYear - b.publicationYear;
      if (sortField === 'note') return b.rating - a.rating;
      return 0;
    });
  }

  if (searchTerm) {
    displayedBooks = displayedBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  const totalPages = Math.ceil(displayedBooks.length / nbrBooks);
  const startIndex = (currentPage - 1) * nbrBooks;
  const paginatedBooks = displayedBooks.slice(startIndex, startIndex + nbrBooks);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '5px', width: '100%' }}
      />

      {/* Sélecteur pour le filtre par genre */}
      <select onChange={handleFilterChange} value={genreFilter} style={{ marginBottom: '20px', padding: '5px' }}>
        <option value="">Tous les genres</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Philosophical Fiction">Philosophical Fiction</option>
      </select>

      {/* Sélecteur pour le tri */}
      <select onChange={handleSortChange} value={sortField} style={{ marginBottom: '20px', padding: '5px', marginLeft: '10px' }}>
        <option value="">Trier par...</option>
        <option value="annee">Année de publication</option>
        <option value="note">Note</option>
      </select>

      {/* Affichage des livres avec pagination */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {paginatedBooks.map((book) => (
          <div
            key={book.title}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img
              src={book.src}
              alt={book.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <h3>{book.title}</h3>
            <p>
              <strong>Auteur :</strong> {book.author}
            </p>
            <p>
              <strong>Genre :</strong> {book.genre}
            </p>
            <p>
              <strong>Année :</strong> {book.publicationYear}
            </p>
            <p>
              <strong>Note :</strong> {book.rating}
            </p>
            <p>
              <strong>Prix :</strong> {book.price} €
            </p>
          </div>
        ))}
      </div>

      {/* Contrôles de pagination */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          style={{ padding: '10px 20px', marginRight: '10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          Précédent
        </button>
        <span>
          {currentPage}/ {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          style={{ padding: '10px 20px', marginLeft: '10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default BookList;
