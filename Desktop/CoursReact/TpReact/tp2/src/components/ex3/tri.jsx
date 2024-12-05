import React, { useState } from 'react';
import src from './imgg.png';

const books = [
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, price: 41.00, src: src },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, price: 47.00, src: src },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, price: 41.00, src: src },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, price: 45.00, src: src },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, price: 44.00, src: src },
];
const BookTri = () => {
  const [sortField, setSortField] = useState('');
  const handleSortChange = (e) => { setSortField(e.target.value) };
  const sortedBooks = books.sort((a, b) => {
    if (sortField === 'annee') return a.publicationYear - b.publicationYear; 
    if (sortField === 'note') return b.rating - a.rating;
    return 0; 
  });
  return (
    <div style={{ padding: '20px' }}>
    <select onChange={handleSortChange} value={sortField} style={{ marginBottom: '20px', padding: '5px' }}>
      <option value="">Trier par...</option>
      <option value="annee">Année de publication</option>
      <option value="note">Note</option>
    </select>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {sortedBooks.map((book) => (
        <div key={book.title} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center'}}>
          <img src={book.src} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}}/>
          <h3>{book.title}</h3>
          <p><strong>Auteur :</strong> {book.author}</p>
          <p><strong>Genre :</strong> {book.genre}</p>
          <p><strong>Année :</strong> {book.publicationYear}</p>
          <p><strong>Note :</strong> {book.rating} </p>
          <p><strong>Prix :</strong> {book.price} €</p>
        </div>
      ))}
    </div>
    </div>
  )
};
export default BookTri;