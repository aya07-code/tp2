import React from 'react';
import Livre from './livre/Livre';

const ListLivre = ({ books }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {books.map(book => (
        <Livre
          src={book.src}
          title={book.title}
          price={book.price }
        />
      ))}
    </div>
  );
};

export default ListLivre;
