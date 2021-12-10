import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='home__image'/>

                <div className='home__row'>
                                <Product id="0111"
                                         title="AMITYUNION Lot de 2 Blocs de Yoga en liège 100% Naturel - Deux Blocs 75 mm"
                                         price={24.99}
                                         image="https://m.media-amazon.com/images/I/81tWP5b6oeL._AC_SL1500_.jpg"
                                         rating={3}
                                         quantity={1}
                                />

                                <Product id="0112"
                                         title="Power-Ring Set Bracelet + Bague (argent) / Bague d'acupression & Bracelet de Massage"
                                         price={12.99}
                                         image="https://m.media-amazon.com/images/I/81Kl59BONeL._AC_SL1500_.jpg"
                                         rating={4}
                                         quantity={1}
                                />

                            </div>

                <div className='home__row'>
                                 <Product id="0113"
                                         title="Beal Magnésie Pure Grip 250ml"
                                         price={17.99}
                                         image="https://m.media-amazon.com/images/I/51bgZseVMYL._AC_SL1001_.jpg"
                                         rating={5}
                                         quantity={1}
                                />

                                 <Product id="0114"
                                         title="EGURRE Planche d’escalade, hangboard – Fingerboard, poutre d’escalade en bois"
                                         price={82.50}
                                         image="https://m.media-amazon.com/images/I/81sv286lWdL._AC_SL1500_.jpg"
                                         rating={2}
                                         quantity={1}
                                />

                                 <Product id="0115"
                                         title="ALPIDEX 2 pièces / Jeu de 2 Boules en bois de préhension en différentes Tailles"
                                         price={32.99}
                                         image="https://m.media-amazon.com/images/I/61zKggbBatL._AC_SL1500_.jpg"
                                         rating={4}
                                         quantity={1}
                                />
                </div>

                <div className='home__row home__rowBottom'>
                                 <Product id="0116"
                                         title="Looking for Wild Homme Fitz Roy Pantalon, Rouge, L"
                                         price={88.90}
                                         image="https://m.media-amazon.com/images/I/51WBmQ5HGFL._AC_SL1200_.jpg"
                                         rating={5}
                                         quantity={1}
                                />
                        
                </div>


            </div>

        </div>
    )
}

export default Home


