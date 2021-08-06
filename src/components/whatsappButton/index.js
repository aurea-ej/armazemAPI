import { div } from 'prelude-ls';
import React from 'react';
import { Link } from "react-router-dom";
import whatsappDoubt from '../../img/whatsappDoubt.png';

import './style.scss';

function WhatsAppButton() {
    return (
        <div className="whatsapp">
            <Link to="https://api.whatsapp.com/send?phone=TELEFONE&text=Olá!%20Como%20podemos%20te%20ajudar?" target="_blank"> <img src={whatsappDoubt} alt="" /> </Link>
        </div>
    )
}

export default WhatsAppButton;