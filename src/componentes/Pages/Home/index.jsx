import '../../Header'
import '../../Footer'

function Home() {
    return (
        <>
        <div>    
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

        <figure>
          <img className='img-home' src="/img2.svg" alt="Imagem da Home" />
        </figure>
        </>
    )
}
export default Home