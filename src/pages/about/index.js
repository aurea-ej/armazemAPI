import { React } from 'react'
import './style.scss'

import logoArmazem from '../../img/logo-armazem-do-vinho.png'

function About() {
    return (

        <div className="App">

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
                    
            </div>
        </div>  
    )
}

export default About;
