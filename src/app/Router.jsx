import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Alta from '../pages/Alta'
import Baja from '../pages/Baja'
import Consulta from '../pages/Consulta'

const Router = () => (
    <BrowserRouter basename='/pruebaFront'>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/Alta" element={<Alta/>} />  
            <Route path="/Baja" element={<Baja/>} />
            <Route path="/Consulta" element={<Consulta/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;