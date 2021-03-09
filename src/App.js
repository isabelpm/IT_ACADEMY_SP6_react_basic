import React from 'react'
import Book from './components/Book'

// Importamos los .json creado
import Library from './library.json'

//Creamos la función App con el método .map
function App() {
    const libraryComponents = Library.map(book => <Book key={book.id} title={book.title} author={book.author}/>)
    return (
        <div>
            {libraryComponents}
        </div>     
    )
}

export default App
