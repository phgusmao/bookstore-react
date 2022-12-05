import { useEffect, useState } from 'react';
import './App.css';
import Book from './components/Book';


function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/books/')
    .then(response => response.json())
    .then(dados => {
      setBooks(dados)
    })
  })

  return (
    <div className="App">
      <div className='banner-container'>
        <img src='/images/library-logo.png' alt='Banner da livraria' />
      </div>
      <h1>Library</h1>
      <section className='book-section'>
        {books.map(books => 
          <Book 
            key={books.id} 
            image={books.image} 
            title={books.title} 
            author={books.author} 
            price={books.price} 
            gender={books.gender} 
            isbn={books.isbn} />
        )}
      </section>
    </div>
  );
}

export default App;
