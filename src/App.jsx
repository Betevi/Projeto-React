import './App.css'
import Header from './componentes/Header' 
import Footer from './componentes/Footer'
import AppRoutes from './routes'

function App() {
  return (
    <>
  
      <section className='container'>
        <div className='apresentacao'>

        <h1>Seja bem vindo!</h1>
         
        </div>
        <AppRoutes />
      </section>

    </>
  )
}

export default App