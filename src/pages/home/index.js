import { React } from 'react';
import { useState, useEffect } from 'react';

import shoppingBag from '../../img/close-shopping-bag.svg'

import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../../FirebaseConfig.js'

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        var firebaseRef = firebase.database().ref('items/');

        firebaseRef.on('value', (snapshot) => {

            if (snapshot.exists()) {

                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setData(temp)

            }
            else {
                console.log("No data available");
            }

        });

    }, [])

    return (

        <div className="App">

            <Header />

            <section id="heroSection">

                <div className="heroWrapper">

                    <div className="leftSide">

                        <h1>Isso é um teste</h1>

                    </div>

                    <div className="rightSide">

                        <div className="textRight">

                            <h2>E isso aqui também</h2>

                            <h1>Compre vinho</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                        </div>

                            <div className="buttonBuy">
                                
                                <a

                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    Adicionar ao carrinho
                                    <img src={shoppingBag}
                                    alt="sacola" />
                                    
                                </a>

                            </div>

                    </div>

                </div>

            </section>

            <section id="sectionHome">
                <p>teste</p>
            </section>

        </div>

    )

}

export default Home;