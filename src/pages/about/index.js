import { React } from 'react'
import './style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'

import logoArmazem from '../../img/logo-armazem-do-vinho.png'
import taca_armazem from '../../img/taca_armazem.png'

function About() {
    return (

        <div className="App">

            <Header />

            <div className="aboutContainer">
                <video src="./videos/brindeVinho.mp4" autoPlay loop muted/>
                <h1>BRINDE OS BONS MOMENTOS</h1>
            </div>

            <div className="aboutText">
                <img src={logoArmazem} alt="logo" />

                <div className="topbar"></div>
                <p><span className="firstLetter">C</span>riado por Nelson e Paulo no ano 1000... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur similique ullam laborum sequi velit repudiandae a non, alias delectus animi deleniti sunt consequuntur nihil aut modi. Repellendus, natus ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde aliquam molestiae delectus hic accusamus, magni sit illo quaerat deleniti quidem voluptatibus sunt minus eligendi, dolore minima quos non architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum iure facilis ducimus beatae exercitationem distinctio tempora, commodi illo! Explicabo deserunt delectus quas ab veniam. Autem amet repellat aperiam fuga!</p>
            </div>

            <div className="aboutCard">

                <div className="cardContainer">
                    <div className="card">
                        <h3>1.</h3>
                        <p>
                        Vinhos selecionados à dedo para marcar presença em todos os seus momentos.
                        </p>
                    </div>
                    <div className="card">
                        <h3>2.</h3>
                        <p>
                        Atendimento personalizado para o seu conforto e confiança totais.
                        </p>
                    </div>
                    <div className="card">
                        <h3>3.</h3>
                        <p>
                        Entregas rápidas e eficientes para nunca deixar passar em branco uma data especial.
                        </p>
                    </div>
                </div>
                
                <div className="aboutWine">
                    <h2>Carta de vinhos</h2>
                    <div className="wineContainer">
                        <div className="wineCard">
                            <div className="wineCircle"></div>
                            <div className="content">
                                <h2>Portugal</h2>
                                <h3>Trapezzio, Latitud33</h3>
                                <p><span className="firstLetter">O</span>s vinhos portugueses são de qualidade incomparável, etc etc.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur similique ullam laborum sequi velit repudiandae a non, alias delectus animi deleniti sunt consequuntur nihil aut modi. Repellendus, natus ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="/">Comprar</a>
                            </div>
                            <img src={taca_armazem} alt="Taça de vinho"/>
                        </div>

                        <div className="wineCard">
                            <div className="wineCircle"></div>
                            <div className="content">
                                <h2>Argentina</h2>
                                <h3>Monte da Raposinha</h3>
                                <p><span className="firstLetter">V</span>inhos argentinos são ideais para celebrar o mais simples dos momentos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur similique ullam laborum sequi velit repudiandae a non, alias delectus animi deleniti sunt consequuntur nihil aut modi. Repellendus, natus ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="/">Comprar</a>
                            </div>
                            <img src={taca_armazem} alt="Taça de vinho"/>
                        </div>
                    </div>
                </div>
                    
            </div>
            <Footer />
        </div>  
    )
}

export default About;
