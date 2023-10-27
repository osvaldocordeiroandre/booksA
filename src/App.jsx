import { useState } from 'react'

import ScrollToTop from 'react-scroll-to-top';

import './index.css'

function App() {
  const books =[
    {id:'1', nome:'Nuvens de Ketchup Annabel Pitcher', imagem:'https://meupdf.com/livro/capa/imglivro30174.jpg', link:'https://drive.google.com/file/d/1k7qO-ypOWuNh3pr0sCQrN6r8X4V4kiYE/preview'},
    {id:'2', nome:'Não se iluda, não', imagem:'https://meupdf.com/livro/capa/imglivro26046.jpg', link:'https://drive.google.com/file/d/19pjJRHFf2BrebDsWS0NUxO0hNpIxplzj/preview'},
    {id:'3', nome:'Acontece a cada primavera', imagem:'https://meupdf.com/livro/capa/imglivro19645.jpg', link:'https://drive.google.com/file/d/1260TWgiQxNrPJ7wHLv4Qzra7Gub_h9s7/preview'},
    {id:'4', nome:'Debora Lee Brown', imagem:'https://meupdf.com/livro/capa/imglivro3954.jpg', link:'https://drive.google.com/file/d/1oFYpHPre1rF6A-4gTSLlPcclI33YZN3e/preview'},
    {id:'5', nome:'A Cor da Vida', imagem:'https://meupdf.com/livro/capa/imglivro30564.jpg', link:'https://drive.google.com/file/d/1rxzlx-uaXG_Hiq-l_aPkKy_B_gDn6epP/preview'},
    {id:'6', nome:'Ladrão de casaca', imagem:'https://meupdf.com/livro/capa/imglivro21207.jpg', link:'https://drive.google.com/file/d/1QILkFOSflVYgHnLighNmmmWT5qhNZMB9/preview'},
    {id:'7', nome:'Os mortos nos falam', imagem:'https://meupdf.com/livro/capa/imglivro17825.jpg', link:'https://drive.google.com/file/d/1gI3P773hzppWJjVHtmKUzANMIUxP692M/preview'},
    {id:'8', nome:'A Última Festa', imagem:'https://m.media-amazon.com/images/I/411WhY4AUHL.jpg', link:'https://ia601800.us.archive.org/23/items/a-ultima-festa/A%20Ultima%20Festa.pdf'},
    
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [iframeLink, setIframeLink] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const openPopup = (src) => {
    setIframeLink(src);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIframeLink('');
    setIsOpen(false);
  }

  const handleSearch = (e) =>{
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

        {filteredbook.map((book) => (
          
          <div className="booksSpace" key={book.id}>

            <img className='bookimage' src={book.imagem} alt={book.nome} onClick={() => openPopup(book.link)} />

          </div>
        ))}

        {isOpen && (

          <div className="popup">

              <button className='close' onClick={closePopup}> X </button>

              <iframe src={iframeLink} width="640" height="480" allow="autoplay"></iframe>

          </div>

        )}

      </div>

    </div>

  )
}

export default App
