import React, { useState, useEffect, createRef } from 'react'
import { Link, useHistory } from "react-router-dom";
import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../FirebaseConfig.js'

function SideBar() {

    const [dataAccount, setDataAccount] = useState([]);

    const menuMobile = createRef()
    let history = useHistory();

    // function showMenuMobile() {

    //     if (isChecked)
    //         menuMobile.current.style.display = 'none'
    //     else
    //         menuMobile.current.style.display = 'flex'

    // }

    useEffect(() => {

        window.scrollTo(0, 0);

        const userEmail = localStorage.getItem('userEmail')

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig)

        firebase.database().ref('users/').get('/users')
            .then(function (snapshot) {

                if (snapshot.exists()) {

                    var data = snapshot.val()
                    var temp = Object.keys(data).map((key) => data[key])

                    temp.map((item) => {

                        if (item.email == userEmail)
                            setDataAccount(item)

                    })

                } else {
                    console.log("No data available");
                }
            })

    }, []);

    function signOut() {

        firebase.auth().signOut()
        localStorage.setItem('userEmail', '')
        history.push('/')

    }

    return (

        <div className="barElement">

                <div className="sideMenu">

                    <ul>

                        <Link to='/Perfil'><i class="fa fa-user-circle-o" aria-hidden="true"></i> Perfil</Link>
                        <Link to='/MeusPedidos'><i class="fas fa-shopping-basket"></i>Meus Pedidos</Link>
                        <Link to='/AlterarDados'><i class="fas fa-pencil-alt"></i>Alterar Dados</Link>
                        <Link to='/Contato'><i class="fas fa-comment-dots"></i>Entre em contato</Link>

                        <span

                            onClick={() => signOut()}>
                            <i class="fas fa-door-open"></i>
                            Sair da conta

                        </span>

                    </ul>

                </div>

        </div>

    )
}

export default SideBar