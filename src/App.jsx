import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Match from './pages/Match';
import { Busqueda } from './pages/Busqueda';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/index" element={ <Index /> } />
                <Route path="/Match" element={ <Match /> } />
                <Route path="/Bus" element={ <Busqueda /> } />
            </Routes>
        </Router>
    );
}

export default App