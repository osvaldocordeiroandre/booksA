import { useState } from 'react'

import ScrollToTop from 'react-scroll-to-top';

import { BsDownload } from 'react-icons/bs'

import './home.css'

function Home() {
  const books = [

    { id: '6', nome: 'Amanha, amanha, e ainda outro amanha - Gabrielle Zevin', imagem: 'https://m.media-amazon.com/images/I/519DDh-e1QL.jpg', link: 'https://drive.google.com/file/d/1q9uqD9uf51xssXhkD2Fr_X0IujBQ1ub7/preview?usp=drive_link', download: 'https://drive.usercontent.google.com/download?id=1q9uqD9uf51xssXhkD2Fr_X0IujBQ1ub7&export=download&authuser=4&confirm=t&uuid=fbec6101-f4a2-4ddd-bc1d-65371c6735e1&at=APZUnTW6cV23tTvxk0dHRq3MI536:1699487248558', Genero: 'amadurecimento' },
    { id: '5', nome: 'Lugar Feliz - Emily Henry', imagem: 'https://m.media-amazon.com/images/I/41GXiZ6XggL.jpg', link: 'https://drive.google.com/file/d/1KUALvsFIpO82430zIZAghTZEOYri1mzf/preview?usp=drive_link', download: 'https://drive.usercontent.google.com/download?id=1KUALvsFIpO82430zIZAghTZEOYri1mzf&export=download&authuser=4&confirm=t&uuid=9d8831c8-5e99-4d67-8a94-b77031cadb8b&at=APZUnTXtDfyHXQmHdMZ8tBp-ijsa:1699487265524', Genero: 'romance' },
    { id: '4', nome: 'O que eu tô fazendo da minha vida - Daniel Bovolento', imagem: 'https://m.media-amazon.com/images/I/81GqszzFqGL._AC_UF894,1000_QL80_.jpg', link: 'https://drive.google.com/file/d/1vEX6RHC_4NzNwQ7L0UmVJmCv3vEHiu7K/preview', download: 'https://drive.usercontent.google.com/download?id=1vEX6RHC_4NzNwQ7L0UmVJmCv3vEHiu7K&export=download&authuser=4&confirm=t&uuid=01d9f04b-9ba7-44af-b540-6df3be63b045&at=APZUnTXwJJgGApGzjpF78tpHhfRG:1699147469785', Genero: 'ficcao' },
    { id: '3', nome: 'O Meu Pé de Laranja Lima - Jose Mauro de Vasconcelos', imagem: 'https://imgv2-2-f.scribdassets.com/img/word_document/405801329/original/e2b7390254/1698122618?v=1', link: 'https://drive.google.com/file/d/1jMAmeo_KtFiSrN9Cf2rl6i4j4fOgLptB/preview', download: 'https://drive.usercontent.google.com/download?id=1jMAmeo_KtFiSrN9Cf2rl6i4j4fOgLptB&export=download&authuser=4&confirm=t&uuid=2b18d122-973d-46c5-ac97-e534b3095a68&at=APZUnTXJNgUypfZMpMjwg7-awMqU:1699147479100', Genero: 'romance' },
    { id: '2', nome: 'A Úiltima carta de amor', imagem: 'https://m.media-amazon.com/images/I/71ieYxbYt6L._AC_UF350,350_QL50_.jpg', link: 'https://drive.google.com/file/d/1-a5v4ZGLOC6-9qJew-fEAsMcpuklPYqo/preview', download: 'https://drive.usercontent.google.com/download?id=1-a5v4ZGLOC6-9qJew-fEAsMcpuklPYqo&export=download&authuser=4&confirm=t&uuid=d35c5cb4-d954-49a5-97a0-8187947de895&at=APZUnTVpcVAe8heiaAE8XAQb5VFh:1699125870903', Genero: 'romance' },
    { id: '1', nome: 'A Última Festa', imagem: 'https://m.media-amazon.com/images/I/411WhY4AUHL.jpg', link: 'https://drive.google.com/file/d/1HQtpjUyp0e34bxHRrKTZ9fIjOvNzNWr0/preview', download: 'https://drive.usercontent.google.com/download?id=1HQtpjUyp0e34bxHRrKTZ9fIjOvNzNWr0&export=download&authuser=6&confirm=t&uuid=b895e4ca-c1ab-4797-b99b-6c34aed76b97&at=APZUnTUznDp3z2LXcADflePyfoxk:1699126122333', Genero: 'mistério' },

  ]

  const [isOpen, setIsOpen] = useState(false);
  const [iframeLink, setIframeLink] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [loadingbook, setLoadingbook] = useState(true);
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

  const handlwDownload = () => {
    setLoadingbook(false)

  }

  const [onloadPage, setOnloadPage] = useState(false)

  const PageOnload = () => {
    setOnloadPage(true)
    setLoadingbook(false)
  }

  const [SelectGenero, setSelectGenero] = useState(null);

  const filteredBooks = books
    .filter((book) => book.nome.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((book) => SelectGenero ? book.Genero === SelectGenero : true);

  return (

    <div className="containerMain">

      <div className="searchContent">

        <input className='searchPart' type="text" placeholder='Nome do livro meu amorzin' name="" id="" onChange={handleSearch} />

        <div className="GeneroButtons">

          <button onClick={() => window.location.reload()}> Todos </button>
          <button onClick={() => setSelectGenero('romance')}>Romance</button>
          <button onClick={() => setSelectGenero('mistério')}>Mistério</button>
          <button onClick={() => setSelectGenero('ficcao')}>Ficção Literária</button>
          <button onClick={() => setSelectGenero('amadurecimento')}> Amadurecimento </button>
          <button onClick={() => setSelectGenero('reflexão')}>Reflexão</button>

        </div>

      </div>

      <ScrollToTop />

      <div className="container">

        {loadingbook && (

          <div className='loadinArea'>

            <span className="loader"></span>

          </div>

        )}

        {filteredBooks.map((book) => (

          <div className="booksSpace" key={book.id}>

            <div className='adjustDownload' style={{ display: onloadPage ? 'flex' : 'none' }} onClick={handleClick}>

              <img className='bookimage' onLoad={PageOnload} src={book.imagem} alt={book.nome} onClick={() => openPopup(book.link)} />

            </div>

            <a href={book.download} >
              <BsDownload color='white' onClick={handlwDownload} />
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

export default Home
