import axios from 'axios'
import { useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'

const yourAPIKey = 'AIzaSyCqIzJNjwqJ9iGgw0Ujhfm0A7bB42Lg9S8'
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

function App() {
  const [search, setSearch] = useState('')
  const [book, setBook] = useState([])

  const searchBook = (bk) => {
    if (bk.key === 'Enter') {
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
        <input
          className="appearance-none border 
        rounded w-1/3 py-2 px-3 text-gray-700 
        leading-tight"
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
    </div>
  )
}

export default App
