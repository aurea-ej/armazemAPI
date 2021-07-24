import React  from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Register from './pages/signIn'
import Admin from './pages/admin'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={About} path='/quemsomos' />
            <Route component={Contact} path='/contato'/>
            <Route component={Register} path='/entrar'/>
            <Route component={Admin} path='/admin'/>

        </BrowserRouter>

    )

}
export default Routes;