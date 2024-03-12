/* react-router-dom y navBar */
import { useRoutes, BrowserRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar";
/* css */
import './App.css';

/* Páginas */
import Home from '../Home';
import Developers from '../Developers';
import Tutorials from '../Tutorials';
import Contact from '../Contact';


const AppRoutes = () => {
    /* Aca vamos a pasar todos los paths */
    let routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/Developers', element: <Developers />},
        {path: '/Tutorials', element: <Tutorials />},
        {path: '/Contact', element: <Contact />}
    ])
    return routes;
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
            <NavBar/>
        </BrowserRouter>
    )
}

export default App