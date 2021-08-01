import { React, createRef } from 'react'
import { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../FirebaseConfig.js'

import { Link, useHistory } from "react-router-dom";
import SideBar from '../../components/sideBar'

function ChangeInfos() {

    const [dataAccount, setDataAccount] = useState([]);
    const [displayDivAlterInfos, setDisplayDivAlterInfos] = useState("none");
    const [displayDivPedidos, setDisplayDivPedidos] = useState("none");
    const [requestData, setRequestData] = useState([{}]);
    const [registerData, setRegisterData] = useState({

        name: '',
        phoneNumber: '',
        street: '',
        houseNumber: '',
        complement: '',
        district: '',
        cepNumber: '',

    })

    let history = useHistory();

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

    useEffect(() => {

        const userEmail = localStorage.getItem('userEmail')

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig)

        firebase.database().ref('requests/').get('/requests')
            .then(function (snapshot) {

                if (snapshot.exists()) {

                    var data = snapshot.val()
                    var temp = Object.keys(data).map((key) => data[key])
                    var requestDataTemp = []

                    temp.map((item) => {

                        if (item.userEmail == userEmail)
                            requestDataTemp.push(item)

                    })
                    setRequestData(requestDataTemp)

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

    function handleDisplayDivAlterInfos() {

        if (displayDivAlterInfos == "none")
            setDisplayDivAlterInfos("flex")
        else
            setDisplayDivAlterInfos("none")

    }

    function handleDisplayDivPedidos() {

        if (displayDivPedidos == "none")
            setDisplayDivPedidos("flex")
        else
            setDisplayDivPedidos("none")

    }

    function handleInputRegisterChange(event) {

        const { name, value } = event.target

        setRegisterData({

            ...registerData, [name]: value

        })

    }

    function updateRegister() {

        firebase.database().ref('users/' + dataAccount.id).update({

            name: registerData.name != '' ? registerData.name : dataAccount.name,
            phoneNumber: registerData.phoneNumber != '' ? registerData.phoneNumber : dataAccount.phoneNumber,
            personWhoIndicated: dataAccount.personWhoIndicated,
            whoIndicated: dataAccount.whoIndicated,
            street: registerData.street != '' ? registerData.street : dataAccount.street,
            houseNumber: registerData.houseNumber != '' ? registerData.houseNumber : dataAccount.houseNumber,
            complement: registerData.complement != '' ? registerData.complement : dataAccount.complement,
            district: registerData.district != '' ? registerData.district : dataAccount.district,
            cepNumber: registerData.cepNumber != '' ? registerData.cepNumber : dataAccount.cepNumber,
            email: dataAccount.email,
            id: dataAccount.id

        })
            .then(() => alert("Cadastro atualizado com sucesso!"))
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    return (

        <div className="changeDataPage">

            <Header />

            <SideBar />

            <section className="changeSection">

                <div className="userDataChange">

                    <h3>Clique nos campos de texto abaixo e preencha <strong>apenas</strong> o que deseja alterar</h3>

                    <div className="cardDataChange">

                        <h4>Dados da conta</h4>

                        <div className="profileDataChange">

                            <span>
                                <strong>Usuário:
                                    <input
                                    name='name' 
                                    placeholder='Nome completo' 
                                    /> 
                                </strong>
                            </span>
                            
                            <span>
                                <strong>E-mail:
                                    <input
                                    name='email' 
                                    placeholder='E-mail' 
                                    /> 
                                </strong>
                            </span>

                        </div>

                        <h4 id="personalData">Dados pessoais</h4>

                        <div className="profileDataChange">

                            <span>
                                <strong>Endereço:
                                    <input
                                    name='address' 
                                    placeholder='Alterar endereço' 
                                    /> 
                                </strong>
                            </span>

                            <span>
                                <strong>Complemento:
                                    <input
                                    name='complement' 
                                    placeholder='Alterar complemento' 
                                    /> 
                                </strong>
                            </span>

                            <span>
                                <strong>Cidade:
                                    <input
                                    name='city' 
                                    placeholder='Alterar cidade' 
                                    /> 
                                </strong>
                            </span>

                            <span>
                                <strong>CEP:
                                    <input
                                    name='cepNumber' 
                                    placeholder='Alterar CEP' 
                                    /> 
                                </strong>
                            </span>

                            <span>
                                <strong>Telefone:
                                    <input
                                    name='phoneNumber' 
                                    placeholder='Alterar telefone' 
                                    /> 
                                </strong>
                            </span>

                            <span>
                                <strong>Data de nascimento:
                                    <input
                                    name='birthDate' 
                                    placeholder='Alterar data de nascimento' 
                                    /> 
                                </strong>
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>


    )

}

export default ChangeInfos;