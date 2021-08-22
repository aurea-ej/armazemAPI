import { useEffect, useState } from 'react'
import './style.scss'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import FirebaseConfig from '../../FirebaseConfig'


function ProviderInfo() {

    const [dataAdmin, setDataAdmin] = useState([])
  
    useEffect(()=>{

        if(!firebase.apps.length)
            firebase.initializeApp(FirebaseConfig);

        firebase.database().ref('providers').get('/providers')
        .then(function(snapshot) {

            if (snapshot.exists()){

                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setDataAdmin(temp)

            }
            
        })

    },[])

    return (

        <div className='historyModal'>

            <main id='mainHistory' >
    
                {dataAdmin.map((provider)=> (

                    <div className="providerInfo">

                        <div className="providerCard" >

                            <div className="providerTitle">

                                <h2>{provider.tradeName}</h2>
                                <h4>{provider.corporateName}</h4>
                                
                            </div>
                                
                            <p>Nome do contato: </p>
                            <b>{provider.ownerName}</b>
                                
                            <p>E-mail:</p>
                            <b>{provider.email}</b>
                                
                            <p>Telefone:</p>
                            <b>{provider.phone}</b>

                            <p>Endereço:</p>
                            <b>{provider.address}, Nº {provider.establishmentNumber}, {provider.district}, {provider.complement}, {provider.city}</b>


                        </div>
                        
                    </div>

                ))}

            </main>

        </div>

    )
    
}

export default ProviderInfo