import './App.css'
import Header from './componentes/Header' 
import Footer from './componentes/Footer'

function App() {
  return (
    <>
      <h1>Seja bem vindo!</h1>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, somos <br />
            <span>Seus Amiguinhos, Elizabete e Maria Clara</span> <br />
            Devs Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre nós!
          </button>
        </div>
        <figure>
          <img className='img-home' src="/img2.svg" alt="Imagem da Home" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App