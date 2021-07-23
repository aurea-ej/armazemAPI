import React, {useRef, useEffect, useState} from 'react';
import logoArmazem from '../../img/logo-armazem-do-vinho.png';
import whatsappIcon from '../../img/whatsappIcon.png';
import Header from '../../components/header'
import Footer from '../../components/footer'

/* import Header from '../../components/header'
import Footer from '../../components/footer' */

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

    function sendMail () {

        const mail = document.querySelector('#mail')

        if(formData.phone != '' && formData.name != '' && formData.message != ''){
    
            mail.href = `mailto:barretonovaes.vilas@gmail.com?subject=${formData.subject}&body=Oi%20,%20meu%20nome%20é%20${formData.name}.%20sou%20de%20${selectedUf},%20-%20${selectedCity},%20minhas%20informações%20para%20contato:%20${formData.phone}%20${formData.contact}%20.%0D${formData.message}`
    
            // alert(`Obrigado pelo contato, ${formData.name}! Seu app de e-mail abrirá agora e basta clicar em enviar que em pouco tempo te retornarei e espero que consiga te ajudar!.`)
        
        }

       
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

                <form>

                    <fieldset>

                        <div className="page-title">
                            
                            <div className="logo-2">
                                <img src={logoArmazem} alt="Logo armazém do vinho" />
                            </div>

                            <h2> Entre em contato conosco! </h2>
                            <p> Preencha os campos abaixo com seus dados e mensagem, e então clique em enviar, uma janela para envio de e-mail irá aparecer para que seja possível concluir o envio, assim que enviada responderemos em breve! </p>  

                        </div>

                        <div className="inputboxes">

                            <div className="field-group1">

                                <div className="field">

                                    <label htmlFor='name' >Nome</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        onChange={handleInputChange}
                                    />

                                </div>


                                <div className="field">

                                    <label htmlFor='phone'>Telefone</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        id='phone'
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>

                            <div className="field-group1">

                                <div className="field">

                                    <label htmlFor='contact'>
                                        Contato preferencial</label>
                                    <input
                                        type='text'
                                        name='contact'
                                        id='contact'
                                        onChange={handleInputChange}
                                    />

                                </div>

                                <div className="field">
                                    
                                    <label htmlFor='subject'>Assunto</label>
                                    <input
                                        type='text'
                                        name='subject'
                                        id='subject'
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>

                       

                            <div className="field-group1">

                                <div className='field' >

                                    <label htmlFor='uf'>Estado</label>

                                    <div className='selects'>

                                        <select name="uf" id="uf" onChange={handleSelectedUf} value={selectedUf} >

                                            <option value="0">Selecione um estado</option>

                                            {ufs.map( uf => ( 

                                                <option key={uf} value={uf} >{uf}</option>

                                            ) )}

                                        </select>

                                    </div>

                                </div>

                                <div className='field' >

                                    <label htmlFor='city'>Cidade</label>

                                    <div className='selects'>

                                        <select name="city" id="city" onChange={handleSelectedCity} value={selectedCity} >

                                            <option value="0">Selecione uma cidade</option>

                                            {city.map( city => ( 

                                                <option key={city} value={city} >{city}</option>

                                            ) )}

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </div>    

                        <div className="field messageInput">

                            <label htmlFor='message'>Sua mensagem</label>
                            <textarea
                                type='text'
                                name='message'
                                id='message'
                                onChange={handleInputChange}
                            />

                        </div>

                    </fieldset>

                    <div className='sendButton' >

                        <button onClick={sendMail()} href='' id='mail'>Enviar</button>                    

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