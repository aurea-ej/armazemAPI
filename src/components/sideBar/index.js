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

                        <Link to='/Perfil'>Pefil</Link>
                        <Link to='/MeusPedidos'>Meus Pedidos</Link>
                        <Link to='/AlterarDados'>Alterar Dados</Link>
                        <Link to='/Contato'>Entre em contato</Link>
                        <span>Sair</span>

                    </ul>

                </div>

        </div>


    )
}

export default SideBar