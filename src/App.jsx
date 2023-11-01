import { useState } from 'react'

import ScrollToTop from 'react-scroll-to-top';

import './index.css'

function App() {
  const books = [

    { id: '1', nome: 'A Última Festa', imagem: 'https://m.media-amazon.com/images/I/411WhY4AUHL.jpg', link: 'https://drive.google.com/file/d/1HQtpjUyp0e34bxHRrKTZ9fIjOvNzNWr0/preview' },

  ]

  const [isOpen, setIsOpen] = useState(false);
  const [iframeLink, setIframeLink] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [loadingbook, setLoadingbook] = useState(false);
  const [bookOnload, setBookOnload] = useState(false);

  const handleOnload = () => {
    setBookOnload(true)
    setLoadingbook(false)
  }

  const handleClick = () => {
    setLoadingbook(true);
  }

  const openPopup = (src) => {
    setIframeLink(src);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIframeLink('');
    setIsOpen(false);
    setBookOnload(false)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredbook = books.filter((bookSe) => bookSe.nome.toLocaleLowerCase().includes(searchTerm.toLowerCase()))

  return (

    <div className="containerMain">

      <div className="searchContent">

        <input className='searchPart' type="text" placeholder='Nome do livro meu amorzin' name="" id="" onChange={handleSearch} />

      </div>

      <ScrollToTop />

      <div className="container">

        {loadingbook && (

          <div className='loadinArea'>

            <span class="loader"></span>

          </div>

        )}

        {filteredbook.map((book) => (

          <div className="booksSpace" onClick={handleClick} key={book.id}>

            <img className='bookimage' src={book.imagem} alt={book.nome} onClick={() => openPopup(book.link)} />

          </div>
        ))}

        {isOpen && (

          <div className="popup" onLoad={handleOnload} style={{ display: bookOnload ? 'flex' : 'none' }}>

            <button className='close' onClick={closePopup}> X </button>

            <iframe src={iframeLink} width="640" height="480" allow="autoplay"></iframe>

          </div>

        )}

      </div>

    </div>

  )
}

export default App
