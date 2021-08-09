import React, {useRef, useEffect, useState} from 'react';
import emailjs from "emailjs-com";
import {init} from "emailjs-com";
import logoArmazem from '../../img/logo-armazem-do-vinho.png';
import whatsappIcon from '../../img/whatsappIcon.png';
import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.scss'

const Contact = () => {

    const [ufs, setUfs] = useState([])
    const [selectedUf, setSelectedUf] = useState([])
    const [city, setCity] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    // const [infoMail, setInfoMail] = useState('')

    const [formData, setFormData] = useState({

        name: '',
        phone: '',
        contact: '',
        subject: '',
        message: ''

    })

    function getLocales() {

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then( async (res)=> await res.json())
        .then((json)=> {
            
            const names = json.map (uf => uf.sigla )
            setUfs(names)

        })
        
    }

    function handleSelectedUf(event) {

        setSelectedUf(event.target.value)
        
    }

    function setCities() {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then( async (res)=> await res.json())
        .then((json)=> {
            
            const names = json.map (uf => uf.nome )
            setCity(names)

        })
        
    }

    function handleSelectedCity(event) {

        setSelectedCity(event.target.value)
        
    }

    function handleInputChange(event) {

        const {name, value} = event.target
        setFormData({

            ...formData, [name]: value

        })
        
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fy8q6yf', 'template_q40mjfn', e.target, 'user_f5e2fQ7Fs1KiYt8Afj6xr')
        .then((result) => {
            console.log(result.text);
            alert("Sucesso!");
        }, (error) => {
            console.log(error.text);
            alert("Erro!");
        });
        e.target.reset();
    }

    useEffect(() => {

        getLocales();
        
    }, [])

    useEffect(() => {

        setCities();
        
    }, [selectedUf])

    useEffect(() => {

        window.scrollTo(0, 0)

    }, []);


    return (

        <div className="App">

            <Header />

            <main id='contactMain'>

                <div className="logo-2">
                    <img src={logoArmazem} alt="Logo armazém do vinho" />
                </div>

                <h2> Entre em contato conosco! </h2>
                <p> Preencha os campos abaixo com seus dados e mensagem, e então clique em enviar, uma janela para envio de e-mail irá aparecer para que seja possível concluir o envio, assim que enviada responderemos em breve! </p>

                <form className="contact-form" onSubmit={sendEmail}>

                    <input id="inputID" type="text" className="textBox" name="user_name" placeholder="Nome"/>

                    <input id="inputID" type="text" className="textBox" name="user_email" placeholder="Seu E-mail"/>

                    <input id="inputID" type="text" className="textBox" name="user_number" placeholder="Telefone"/>

                    <select name="uf" id="uf" onChange={handleSelectedUf} value={selectedUf} >

                        <option value="0">Selecione um estado</option>

                        {ufs.map( uf => (

                            <option key={uf} value={uf} >{uf}</option>

                        ) )}

                    </select>

                    <select name="city" id="city" onChange={handleSelectedCity} value={selectedCity} >

                        <option value="0">Selecione uma cidade</option>

                        {city.map( city => (

                            <option key={city} value={city} >{city}</option>

                        ) )}

                    </select>

                    <textarea id="inputID" className="messageBox" name="message" cols="30" rows="8" placeholder="Sua mensagem"/>
                    
                    <div className="buttonsFormRegister">
                      <input id='enterButtonSignIn' type="submit" className="submitBox" value="Enviar Mensagem"></input>
                    </div>

                </form>


                <div className='whatsappContact'>
                    <h3>Ou se preferir...</h3>
                    <a href="https://api.whatsapp.com/send?phone=TELEFONE&text=Como%20podemos%20te%20ajudar?" target="_blank" >
                        <img src={whatsappIcon} id='wppImage' />
                    </a>
                </div> 

            </main>

            <Footer />

        </div>

    )

}

export default Contact