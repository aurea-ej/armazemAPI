import { React } from 'react';
import { useState, useEffect } from 'react';

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

            <h1>Olá, mundo!</h1>

            {
                data.map((item) => {

                    return (

                        <div className="list">

                            <p>Nome: {item.name}</p>
                            <p>Descrição: {item.description}</p>
                            <p>Valor: R${item.value}</p>

                        </div>

                    )

                })
            }

            <Footer />

        </div>

    )

}

export default Home;