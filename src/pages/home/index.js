import { React } from 'react';
import { useState, useEffect } from 'react';

import Slider from "react-slick";

import shoppingBagLogo from '../../img/close-shopping-bag.svg'
import deliveryPackageLogo from '../../img/delivery.svg'
import securityLogo from '../../img/security.svg'
import flashSale from '../../img/flash-sale.svg'
import spainFlag from '../../img/spain.svg'
import discountTag from '../../img/offer.svg'
import wineTasting from '../../img/wineTasting.svg'
import checked from '../../img/checked.svg'

import vinhoImg from '../../img/vinho_periquita_tinto.png'
import vinhoImg2 from '../../img/vinho tinto.png'
import vinhoImg3 from '../../img/vinho rosé.png'
import vinhoImg4 from '../../img/vinho tinto 2.png'

import banner from '../../img/banner.png'
import banner2 from '../../img/banner 2.png'

import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../../FirebaseConfig.js'

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {

        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

        var firebaseRef = firebase.database().ref('items/');

        firebaseRef.on('value', (snapshot) => {

            if (snapshot.exists()) {

                var data = snapshot.val()
                var temp = Object.keys(data).map((key) => data[key])
                setData(temp)

            }
            else {
                console.log("No data available");
            }

        });

    }, [])

    var carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <div className="HomePage">

            <Header />

            <section id="heroSection">

                <div className="optionsHero">

                    <span>Tintos</span>
                    <span>Brancos</span>
                    <span>Rosés</span>
                    <span>Espumantes</span>
                    <span>Seco</span>
                    <span>Suave</span>
                    <span>Kits</span>
                    <span>Outros</span>

                </div>

                <div className="heroWrapper">

                    <Slider {...carouselSettings}>
                        <div>
                            <img src={banner} alt="banner dia dos pais" />
                        </div>
                        <div>
                            <img src={banner2} alt="banner kits" />
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>

                </div>

            </section>

            <section id="featuredProdutcsSection">

                <h4>Confira alguns de nossos produtos</h4>

                <div className="featuredProducts">

                    <div className="featuredProductsCard">

                        <div className="imgFeaturedWrapper">

                            <img src={vinhoImg} alt="Imagem do vinho" />

                        </div>

                        <div className="featuredTag">

                            <h6>Informação</h6>

                        </div>

                        <div className="featuredTextWrapper">

                            <h5>Vinho Periquita tinto</h5>

                            <span>Espanha • Tinto</span>

                        </div>

                    </div>

                    <div className="featuredProductsCard">

                        <div className="imgFeaturedWrapper">

                            <img id="imgVinho" src={vinhoImg2} alt="Imagem do vinho" />

                        </div>

                        <div className="featuredTag">

                            <h6>Informação</h6>

                        </div>

                        <div className="featuredTextWrapper">

                            <h5>Vinho Don Simon</h5>

                            <span>Espanha • Tinto</span>

                        </div>

                    </div>

                    <div className="featuredProductsCard">

                        <div className="imgFeaturedWrapper">

                            <img id="imgVinho" src={vinhoImg3} alt="Imagem do vinho" />

                        </div>

                        <div className="featuredTag">

                            <h6>Informação</h6>

                        </div>

                        <div className="featuredTextWrapper">

                            <h5>Vinho Viñapeña</h5>

                            <span>Espanha • Rosé</span>

                        </div>

                    </div>

                    <div className="featuredProductsCard">

                        <div className="imgFeaturedWrapper">

                            <img id="imgVinho" src={vinhoImg4} alt="Imagem do vinho" />

                        </div>

                        <div className="featuredTag">

                            <h6>Informação</h6>

                        </div>

                        <div className="featuredTextWrapper">

                            <h5>Vinho Anciano</h5>

                            <span>Espanha • Tinto</span>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    )

}

export default Home;