import { useState } from 'react'

import ScrollToTop from 'react-scroll-to-top';

import { BsDownload } from 'react-icons/bs'

import './index.css'

function App() {
  const books = [

    { id:'4', nome:'O que eu tô fazendo da minha vida - Daniel Bovolento', imagem:'https://m.media-amazon.com/images/I/81GqszzFqGL._AC_UF894,1000_QL80_.jpg', link:'https://drive.google.com/file/d/1vEX6RHC_4NzNwQ7L0UmVJmCv3vEHiu7K/preview', download:'https://drive.usercontent.google.com/download?id=1vEX6RHC_4NzNwQ7L0UmVJmCv3vEHiu7K&export=download&authuser=4&confirm=t&uuid=01d9f04b-9ba7-44af-b540-6df3be63b045&at=APZUnTXwJJgGApGzjpF78tpHhfRG:1699147469785'},
    { id:'3', nome:'O Meu Pé de Laranja Lima - Jose Mauro de Vasconcelos', imagem:'https://imgv2-2-f.scribdassets.com/img/word_document/405801329/original/e2b7390254/1698122618?v=1', link:'https://drive.google.com/file/d/1jMAmeo_KtFiSrN9Cf2rl6i4j4fOgLptB/preview', download:'https://drive.usercontent.google.com/download?id=1jMAmeo_KtFiSrN9Cf2rl6i4j4fOgLptB&export=download&authuser=4&confirm=t&uuid=2b18d122-973d-46c5-ac97-e534b3095a68&at=APZUnTXJNgUypfZMpMjwg7-awMqU:1699147479100'},
    { id: '2', nome: 'A Úiltima carta de amor', imagem: 'https://m.media-amazon.com/images/I/71ieYxbYt6L._AC_UF350,350_QL50_.jpg', link: 'https://drive.google.com/file/d/1-a5v4ZGLOC6-9qJew-fEAsMcpuklPYqo/preview', download: 'https://drive.usercontent.google.com/download?id=1-a5v4ZGLOC6-9qJew-fEAsMcpuklPYqo&export=download&authuser=4&confirm=t&uuid=d35c5cb4-d954-49a5-97a0-8187947de895&at=APZUnTVpcVAe8heiaAE8XAQb5VFh:1699125870903' },
    { id: '1', nome: 'A Última Festa', imagem: 'https://m.media-amazon.com/images/I/411WhY4AUHL.jpg', link: 'https://drive.google.com/file/d/1HQtpjUyp0e34bxHRrKTZ9fIjOvNzNWr0/preview', download: 'https://drive.usercontent.google.com/download?id=1HQtpjUyp0e34bxHRrKTZ9fIjOvNzNWr0&export=download&authuser=6&confirm=t&uuid=b895e4ca-c1ab-4797-b99b-6c34aed76b97&at=APZUnTUznDp3z2LXcADflePyfoxk:1699126122333' },

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

  const handlwDownload= () => {
    setLoadingbook(false)

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

          <div className="booksSpace" key={book.id}>

            <div className='adjustDownload' onClick={handleClick}>

              <img className='bookimage' src={book.imagem} alt={book.nome} onClick={() => openPopup(book.link)} />

            </div>

            <a href={book.download} >
                <BsDownload color='white' onClick={handlwDownload}/>
              </a>

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
