/* Estructura*/
function App(){
    return(
        /* Router: Este es un componente de alto nivel  proporcionado por React Router DOM  que mantiene sincronizado el estado de la ruta con la interfaz de usuario de la aplicación*/
        <Router>
            {/*Switch: Componente que se utiliza para renderizar solo la palabra Route o Redirect que coincide con la ubicaciónb actual. */}
            <Switch>
                {/* Route: Define la ruta. Cuando la URL de la aplicación es "/Home", el componente Home se renderiza */}
                <Route path = "/Pages/App/index">

                </Route>
            </Switch>
        </Router>
    )
}