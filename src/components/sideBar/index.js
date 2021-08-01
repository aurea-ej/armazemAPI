import React, { useState, createRef } from 'react'
import { Link } from "react-router-dom";
import './style.scss'

function SideBar() {

    const menuMobile = createRef()

    // function showMenuMobile() {

    //     if (isChecked)
    //         menuMobile.current.style.display = 'none'
    //     else
    //         menuMobile.current.style.display = 'flex'

    // }

    return (

        <div className="barElement">

                <div className="sideMenu">

                    <ul>

                        <Link to='/Perfil'><i class="fa fa-user-circle-o" aria-hidden="true"></i> Pefil</Link>
                        <Link to='/MeusPedidos'><i class="fas fa-shopping-basket"></i>Meus Pedidos</Link>
                        <Link to='/AlterarDados'><i class="fas fa-pencil-alt"></i>Alterar Dados</Link>
                        <Link to='/Contato'><i class="fas fa-comment-dots"></i>Entre em contato</Link>
                        <span><i class="fas fa-door-open"></i>Sair</span>

                    </ul>

                </div>

        </div>


    )
}

export default SideBar