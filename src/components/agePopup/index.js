import React, { useState, useEffect } from 'react';
import './style.scss'

function AgePopup() {

    const [ageVerify, setAgeVerify] = useState(false);

    function changeModal() {

        setAgeVerify(true);

    }

    if(ageVerify == true) {

        return (null)

    } else {

        return (

            <div id="ageWrapper">
    
                <div className="agePopup">
    
                    <h2>Seja bem-vindo(a) ao Armazém do vinho!</h2>
                    <h3>Você tem mais de 18 anos?</h3>
    
                    <div className="buttonsPopup">
    
                        <a onClick={() => {changeModal()}} id="ageHigher">Sim</a>
                        <a href="https://google.com" id="ageLower">Não</a>
    
                    </div>
    
                </div>
    
            </div>
    
        )

    }

}

export default AgePopup;