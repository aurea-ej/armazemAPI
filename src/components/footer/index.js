import React from 'react'
import { Link } from "react-router-dom";

import './style.scss'

export default function Footer (props) {

    return (

        <footer>

            <div className='address' >

                <img src='' alt='' />

                <ul>
                    <li> <Link to='/' > Início </Link> </li>
                    <li> <Link to='/Quem-somos-nos'> Quem Somos </Link> </li>
                    <li> <Link to='/Carrinho'> Carrinho </Link> </li>
                    <li> <Link to='/Entrar'> Login/Perfil </Link> </li>
                </ul>

                <p> Rua tal</p>

                <p>Whatsapp: </p>
                
            </div>

            <div className='copyright' >
                
                <p>Desenvolvido por :</p>

                <a href='https://aureaej.com/' ><img src='' alt='' /></a>

            </div>

            {/* <div className='socialMedias' >

                <a href='https://www.instagram.com/aureaej/'  > <img src={instagramIcon} alt='logoInstagram' /> </a>
                <a href='https://www.facebook.com/aureaej'  > <img src={facebookIcon} alt='logoFacebook' /> </a>
                <a href='https://www.linkedin.com/company/aureaej/'  > <img src={linkedinIcon} alt='logoLinkedin' /> </a>

            </div> */}


        </footer>

    )
}