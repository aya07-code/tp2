import React from 'react';
import LivreImg from './LivreImg';
import LivreTitle from './LivreTitle';
import LivrePrice from './LivrePrice';

const Livre = ( props ) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center', borderRadius: '10px' }}>
      <LivreImg data={props.src} />
      <LivreTitle title={props.title} />
      <LivrePrice price={props.price} />
      <button style={{ padding: '5px 10px', backgroundColor: '#e8bb7d', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Lire plus
      </button>
    </div>
  );
};

export default Livre;
