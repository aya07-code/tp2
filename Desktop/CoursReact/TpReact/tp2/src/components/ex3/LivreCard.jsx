import React from 'react';
const LivreCard = ({ book }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width: '200px' }}>
      <img src={book.src} style={{ width: '100%', borderRadius: '5px' }}/>
      <h3>{book.title}</h3>
      <p>Genre: {book.genre}</p>
      <p>Année: {book.publicationYear}</p>
      <p>Note: {book.rating}</p>
    </div>
  );
};

export default LivreCard;
