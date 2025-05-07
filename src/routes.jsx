import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './componentes/Pages/Home'
import Sobre from './componentes/Pages/Sobre'
import Projetos from './componentes/Pages/Projetos'
import Contato from './componentes/Pages/Contato'



function AppRoutes(){

    return(
        <BrowserRouter> 
        <Routes>
            <Route patch="/" element={<Home />}></Route>
            <Route patch="/" element={<Sobre />}></Route>
            <Route patch="/" element={<Projetos />}></Route>
            <Route patch="/" element={<Contato />}></Route>
        </Routes>
        
        </BrowserRouter>
    )
}
export default AppRoutes