import React  from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={About} path='/quemsomos' />
            <Route component={Contact} path='/contato'/>

        </BrowserRouter>

    )

}
export default Routes;