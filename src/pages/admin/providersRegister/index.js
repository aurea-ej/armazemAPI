import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import Header from '../../../components/header'
import Footer from '../../../components/footer'

import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import firebaseConfig from '../../../FirebaseConfig.js'

function ProviderRegister() {

    const [registerData,setRegisterData] = useState({

        name: '',
        phoneNumber: '',
        birthDate: '',
        address: '',
        houseNumber: '',
        complement: '',
        district: '',
        cepNumber: '',
        products: '',
        email: '',
        password: '',

    })

    const [selectedOption, setSelectedOption] = useState('');

    function makeRegister () {

        firebase.auth().createUserWithEmailAndPassword(registerData.email, registerData.password)
        .then((user) => {
            console.log('Logado')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        }); 

        const id = firebase.database().ref().child('providers').push().key



        // name: '',
        // phoneNumber: '',
        // birthDate: '',
        // address: '',
        // houseNumber: '',
        // complement: '',
        // district: '',
        // cepNumber: '',
        // email: '',
        // password: '',



        firebase.database().ref('providers/' + id).set({

            name: registerData.name,
            phoneNumber: registerData.phoneNumber,
            birthDate: registerData.birthDate,
            address: registerData.address,
            houseNumber: registerData.houseNumber,
            complement: registerData.complement,
            district: registerData.district,
            cepNumber: registerData.cepNumber,
            products: registerData.products,
            email: registerData.email,
            id: id

        }).then(()=>alert('Cadastro realizado com sucesso'))
        
    }

    function handleInputRegisterChange(event) {

        const {name, value} = event.target

        setRegisterData ({

            ...registerData, [name]: value

        })
        
    }

    function handleSelect(event) {

        const {name, value} = event.target

        setSelectedOption(value)
        
    }

  
    
    useEffect(() => {
        
        if(!firebase.apps.length)
            firebase.initializeApp(firebaseConfig)

    }, []);

    return (
        
        <div className="mainRegister">

            <Header />

            {/* <div>LALALALA O BRASIL É ESPETACULAR</div> */}

            <main>
                
                <fieldset>

                    <h2>Informações pessoais</h2>

                    <input name='name' onChange={handleInputRegisterChange} placeholder='Nome completo' />
                    <input name='phoneNumber' type='number' onChange={handleInputRegisterChange} placeholder='Telefone com DDD' />
                    <input name='birthDate' type='date' onChange={handleInputRegisterChange} placeholder='Data de nascimento' />
                    <input name='address' onChange={handleInputRegisterChange} placeholder='Endereço' />
                    <input name='houseNumber' type='number' onChange={handleInputRegisterChange} placeholder='Nº' />
                    <input name='complement' onChange={handleInputRegisterChange} placeholder='Complemento' />
                    <input name='district' onChange={handleInputRegisterChange} placeholder='Bairro' />
                    <input name='cepNumber' type='number' onChange={handleInputRegisterChange} placeholder='CEP' />

                </fieldset>

                <fieldset>

                    <h2>E-mail e senha</h2>

                    <input name='email' onChange={handleInputRegisterChange} placeholder='E-mail' />
                    <input name='password' type='password' onChange={handleInputRegisterChange} placeholder='Senha' />

                </fieldset>

                <fieldset>

                    <h2>Produtos</h2>

                    <input name='products' onChange={handleInputRegisterChange} placeholder='Marcas trabalhadas' />

                </fieldset>

                <div className='buttonsFormSignIn' >
                    <Link onClick={()=> {makeRegister()}}>Cadastrar</Link>
                </div>

            </main>

        <Footer />
        </div>
    )
}

export default ProviderRegister;