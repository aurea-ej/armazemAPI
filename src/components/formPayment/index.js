import React, { useState, useEffect } from 'react';
import './style.scss'

function PaymentForm() {

    return (

      <form action="/process_payment" method="post" id="paymentForm">
   <h3>Detalhe do comprador</h3>
     <div>
       <div>
         <label for="email">E-mail</label>
         <input id="email" name="email" type="text" value="test@test.com"/>
       </div>
       <div>
         <label for="docType">Tipo de documento</label>
         <select id="docType" name="docType" data-checkout="docType" type="text"></select>
       </div>
       <div>
         <label for="docNumber">Número do documento</label>
         <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
       </div>
     </div>
   <h3>Detalhes do cartão</h3>
     
 </form>

    )
}

export default PaymentForm;
