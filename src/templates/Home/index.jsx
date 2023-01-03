import axios from 'axios'
import { useState } from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const yourAPIKey = 'AIzaSyCRl9UnQ0c5e-gQfmO3AmL7j6dZ4jpn16Y'
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

function App() {
  const [search, setSearch] = useState('')
  const [book, setBook] = useState([])

  const searchBook = (searchBook) => {
    if (searchBook.key === 'Enter') {
      axios
        .get(`${baseURL}q=${search}&key=${yourAPIKey}`)
        .then((r) => setBook(r.data.items))
        .catch((err) => console.log(err))
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="m-10">
        {search ? (
          <h1 className="text-3xl font-bold dark:text-white">
            Mostrando resultados para: {search}.
          </h1>
        ) : (
          <h1 className="text-3xl font-bold dark:text-white">
            Procure aqui o seu livro favorito!
          </h1>
        )}
        <input
          className="appearance-none border mt-6 rounded w-full py-2 px-3 text-gray-700 leading-tight lg:w-2/3"
          placeholder="Pesquise Aqui Um Título"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />

        <div className="mt-12 place-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <Card book={book} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
