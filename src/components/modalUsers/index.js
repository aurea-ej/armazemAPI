import React from 'react'
import { useEffect, useState } from 'react'
import "./style.scss";

import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from '../../FirebaseConfig.js'

import taca_armazem from '../../img/taca_armazem.png';

function ModalUser(props) {

    const { displayProperty, modalDataUsers } = props;

    const [customerRegisterData, setCustomerRegisterData] = useState({

        name: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
        cepNumber: '',
        address: '',
        city: '',
        state: '',
        houseNumber: '',
        district: '',
        complement: '',

    })

    useEffect(() => {

        if (!firebase.apps.length)
            firebase.initializeApp(FirebaseConfig);

        firebase.database().ref('users').get('/users')
            .then(function (snapshot) {

                if (snapshot.exists()) {

                    var data = snapshot.val()
                    var temp = Object.keys(data).map((key) => data[key])
                }
                else {
                    console.log("No data available");
                }
            })

    }, [])

    function handleInputCustomerRegisterChange(event) {

        const { name, value } = event.target

        setCustomerRegisterData({

            ...customerRegisterData, [name]: value

        })

    }

    function updateCustomerRegister() {

            firebase.database().ref('users/' + modalDataUsers.id).update({

                name: customerRegisterData.name != '' ? customerRegisterData.name : modalDataUsers.name,
                email: customerRegisterData.email != '' ? customerRegisterData.email : modalDataUsers.email,
                phoneNumber: customerRegisterData.phoneNumber != '' ? customerRegisterData.phoneNumber : modalDataUsers.phoneNumber,
                birthDate: customerRegisterData.birthDate != '' ? customerRegisterData.birthDate : modalDataUsers.birthDate,
                cepNumber: customerRegisterData.cepNumber != '' ? customerRegisterData.cepNumber : modalDataUsers.cepNumber,
                address: customerRegisterData.address != '' ? customerRegisterData.address : modalDataUsers.address,
                city: customerRegisterData.city != '' ? customerRegisterData.city : modalDataUsers.city,
                state: customerRegisterData.state != '' ? customerRegisterData.state : modalDataUsers.state,
                houseNumber: customerRegisterData.houseNumber != '' ? customerRegisterData.houseNumber : modalDataUsers.houseNumber,
                district: customerRegisterData.district != '' ? customerRegisterData.district : modalDataUsers.district,
                complement: customerRegisterData.complement != '' ? customerRegisterData.complement : modalDataUsers.complement,

            })
            .then(() => alert("Cadastro atualizado com sucesso!"))

    }

    return (

        <div style={{ display: displayProperty }} className='modalUser'>

            <main>

                <div className='titleModalUser' >

                    <img src={taca_armazem} alt="Vinho"/>
                    <h2>Insira as informações que deseja alterar abaixo</h2>

                    <div className="editUser">

                        <h4>Preencha apenas as informações que deseja alterar</h4>

                        <h2>Informações pessoais</h2>
                        <fieldset className="userInfo">
                            <input name='name' onChange={handleInputCustomerRegisterChange} placeholder='Nome completo' />
                            <input name='email' onChange={handleInputCustomerRegisterChange} type='tel' placeholder='E-mail' />
                            <input name='phoneNumber' onChange={handleInputCustomerRegisterChange} type='tel' placeholder='Telefone com DDD' />
                            <input name='birthDate' type='date' onChange={handleInputCustomerRegisterChange} placeholder='Data de Nascimento' />
                        </fieldset>

                        <h2>Endereço</h2>
                        <fieldset className="userAddress">

                            <div className="firstPartAddress">
                                <input name='cepNumber' onChange={handleInputCustomerRegisterChange} type='number' placeholder='CEP' />
                                <input name='address' onChange={handleInputCustomerRegisterChange} placeholder='Endereço' />
                                <input name='city' onChange={handleInputCustomerRegisterChange} placeholder='Cidade' />
                                <input name='state' onChange={handleInputCustomerRegisterChange} placeholder='UF' />
                            </div>

                            <div className="secondPartAddress">
                                <input name='houseNumber' onChange={handleInputCustomerRegisterChange} type='number' placeholder='Número' />
                                <input name='district' onChange={handleInputCustomerRegisterChange} placeholder='Bairro' />
                                <input name='complement' onChange={handleInputCustomerRegisterChange} placeholder='Complemento' />
                            </div>

                        </fieldset>

                        <div className="updateButton">
                            <a onClick={() => { updateCustomerRegister() }}>Atualizar Informações</a>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default ModalUser;