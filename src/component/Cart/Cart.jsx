import { useParams } from 'react-router'
import style from './Cart.module.css'
import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibmFzdGlhcjEzIiwiYSI6ImNrdzc4eHViazE5Ym4yeG1lZ2t6NDNyN2cifQ.yTCSBcFv4ZeXbMzmamJHbQ';

function Cart(props) {
    const [mapDisplay, setMapDisplay] = useState(false)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(110.814733);
    const [lat, setLat] = useState(-7.683029);
    const [zoom, setZoom] = useState(14);
    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        })
    })
    
    const {id} = useParams()
    const data = props.menu.find(a => a.restaurant.id == id)

    const showMap = () => {
        setMapDisplay(!mapDisplay)
    }
    const display = mapDisplay ? "block" : "none"
    return (
        <div className={style.cartContainer}>
            <div className={style.cart}>
                <h1 className={style.h1}>{ data.restaurant.name}</h1>
                <p style={{color: "#613D2B"}}>Delivery Location</p>
                <div className={style.loc}>
                    <input className={style.inputLoc} type="text" value="Harbour Building" />
                    <button onClick={showMap} className={style.btnMap}>
                        <p style={{marginRight: "1rem"}}> Select on Map</p>
                        <img src="/icon/map.svg" alt="" />
                    </button>
                </div>
                <p style={{color: "#613D2B", marginTop: "1.7rem"}}>Review Your Order</p>

                <div className={style.flexReview}>
                    <div className={style.left}>
                        <div className={style.line}></div>


                        <div className={style.foodCart}>
                            <img style={{width: "120px", height: "100px"}} src="/img/1.png" />
                            <div className={style.foodInfo}>
                                <div className={style.top}>
                                    <p style={{fontSize: "14px", fontWeight: "800", fontFamily: "'Abhaya Libre', serif"}} >Paket Geprek</p>
                                    <p style={{color: "red"}}>Rp 15.000</p>
                                </div>
                                <div className={style.bot}>
                                    <div className={style.quantityControl}>
                                        <button style={{fontSize: "18px", width: "25px", cursor: "pointer", border: "none", borderRadius: "5px"} }>-</button>
                                        <input style={{appearance: "textfield", width: "1.6rem", textAlign: "center",padding: ".3rem", margin: "0 .6rem", border: "none", background: "#F6E6DA", borderRadius: "5px"}} value={1} type="number" />
                                        <button style={{fontSize: "18px", width: "24px", cursor: "pointer", border: "none", borderRadius: "5px"}}>+</button>
                                    </div>
                                    <button style={{border: "none", borderRadius: "5px", padding: ".2rem", cursor: "pointer"}}><img src="/icon/bin.svg" alt="" /></button>
                                    
                                </div>
                            </div>
                        </div>
                            <div className={style.line}></div>
                        <div className={style.foodCart}>
                            <img style={{width: "120px", height: "100px"}} src="/img/1.png" />
                            <div className={style.foodInfo}>
                                <div className={style.top}>
                                    <p style={{fontSize: "14px", fontWeight: "800", fontFamily: "'Abhaya Libre', serif"}} >Paket Geprek</p>
                                    <p style={{color: "red"}}>Rp 15.000</p>
                                </div>
                                <div className={style.bot}>
                                    <div className={style.quantityControl}>
                                        <button style={{fontSize: "18px", width: "25px", cursor: "pointer", border: "none", borderRadius: "5px"} }>-</button>
                                        <input style={{appearance: "textfield", width: "1.6rem", textAlign: "center",padding: ".3rem", margin: "0 .6rem", border: "none", background: "#F6E6DA", borderRadius: "5px"}} value={1} type="number" />
                                        <button style={{fontSize: "18px", width: "24px", cursor: "pointer", border: "none", borderRadius: "5px"}}>+</button>
                                    </div>
                                    <button style={{border: "none", borderRadius: "5px", padding: ".2rem", cursor: "pointer"}}><img src="/icon/bin.svg" alt="" /></button>
                                    
                                </div>
                            </div>
                        </div>
                            <div className={style.line}></div>



                    </div>

                    <div className={style.right}>
                        <div className={style.line}></div>
                        <div className={style.price}>
                                <div className={style.flexItem}>
                                    <p style={{fontSize: "14px", fontWeight: "800"}} >Sub Total</p>
                                    <p style={{color: "red"}}>Rp 30.000</p>
                                </div>
                                <div className={style.flexItem}>
                                    <p style={{fontSize: "14px", fontWeight: "800"}} >Qty</p>
                                    <p >2</p>
                                </div>
                                <div className={style.flexItem}>
                                    <p style={{fontSize: "14px", fontWeight: "800"}} >Ongkir</p>
                                    <p style={{color: "red"}}>Rp 10.000</p>
                                </div>
                        </div>
                        <div className={style.line}></div>
                        <div style={{padding: "0 1rem", boxSizing: "border-box"}} className={style.flexItem}>
                            <p style={{color: "red", fontSize: "14px", fontWeight: "800"}} >Sub Total</p>
                            <p style={{color: "red"}}>Rp 40.000</p>
                        </div>
                        <button onClick={showMap} className={style.seeHowFar}>See How Far ?</button>
                    </div>
                </div>
            </div>

            <div style={{display: display}} className={style.mapContainer}>
                <div ref={mapContainer} className={style.map} ></div>   
            </div>
            
        </div>
    )

    
    
}

export default Cart
