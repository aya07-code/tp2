import React from 'react';
// import ListeLivres from './components/ex1';
// import TableauLivres from './components/ex1';
// import Header from './components/ex2/header';
// import Footer from './components/ex2/footer';
// import LivreImg from './components/ex2/livre/LivreImg';
// import LivreTitle from './components/ex2/livre/LivreTitle';
// import LivrePrice from './components/ex2/livre/LivrePrice';
// import './components/styles.module.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <ListeLivres /> */}
//        {/* <TableauLivres /> */}  
//     </div>
//   );
// }

// export default App;
// import ListeLivres from './components/ex1';
// import TableauLivres from './components/ex1';
// import Header from './components/ex2/header';
// import Footer from './components/ex2/footer';
// import LivreImg from './components/ex2/livre/LivreImg';
// import LivreTitle from './components/ex2/livre/LivreTitle';
// import LivrePrice from './components/ex2/livre/LivrePrice';
// import './components/styles.module.css';


// import Header from './components/ex2/header';
// import Footer from './components/ex2/footer';
// import ListLivre from './components/ex2/ListLivre';
// import src from './imgg.jpg';

// const livres = [
//   { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8 ,price:41.00, src:src},
//   { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9,price:47.00, src:src },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4,price:41.00, src:src },
//   { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7,price:45.00, src:src },
//   { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1 ,price:44.00, src:src},
//   { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5,price:43.00, src:src },
// ];

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <ListLivre books={livres} />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import BookList from './components/ex3/BookList';
import BookTri from './components/ex3/tri';
import Pagination from './components/ex3/Pagination';
const App = () => {
  return (
    <div>
      {/* <BookTri /> */}
      <BookList />
      {/* <Pagination /> */}
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default App;

