import React  from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import SignIn from './pages/signIn'
import Admin from './pages/admin'
import Register from './pages/register'
import Request from './pages/admin/requests'


const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={About} path='/quemsomos' />
            <Route component={Contact} path='/contato'/>
            <Route component={SignIn} path='/entrar'/>
            <Route component={Admin} path='/admin'/>
            <Route component={Register} path='/cadastrar'/>
            <Route component={Request} path='/Pedidos' />


        </BrowserRouter>

    )

}
export default Routes;