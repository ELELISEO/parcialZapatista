import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import PageInitial from './pages/PageInitial';
import Match from './pages/Match';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/index" element={ <Index /> } />
                <Route path="/PageInitial" element={ <PageInitial /> } />
                <Route path="/Match" element={ <Match /> } />
            </Routes>
        </Router>
    );
}

export default App