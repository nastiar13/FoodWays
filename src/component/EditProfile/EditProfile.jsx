import style from './EditProfile.module.css'
import { useParams } from 'react-router'
import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibmFzdGlhcjEzIiwiYSI6ImNrdzc4eHViazE5Ym4yeG1lZ2t6NDNyN2cifQ.yTCSBcFv4ZeXbMzmamJHbQ';
const arr = [
    {
        id: 1,
        title: "Edit Profile",
        name: "Full Name"
    },
    {
        id: 2,
        title: "Edit Profile Patner",
        name: "Patner's Name"
    }
]

function EditProfile() {
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

    const obj = arr.find(a => a.id == id)

    const showMap = () => {
        setMapDisplay(!mapDisplay)
    }
    const display = mapDisplay ? "block" : "none"
    return (
        <div className={style.addProduct}>
            <h1 style={{fontFamily: "Abhaya Libre", marginBottom: "2rem", marginLeft: "2rem", fontWeight: "800"}}>{obj.title}</h1>
            <div className={style.form}>
                <input className={style.title} style={{display: "inline", width: "83%"}} type="text" placeholder={obj.name} name="" id="" />
                <div className={style.img}>
                    <label style={{color: "#766C6C"}} htmlFor="img">Attach Image <img style={{position: "relative", zIndex: "-1",marginLeft: "2rem", height: "25px", top: "7px"}} src="/icon/Frame.svg" alt="" /></label>
                </div>
                <input style={{display: "none"}} type="file" id="img"/>
                <input className={style.price} style={{display: "block"}} type="text" placeholder="Email" />
                <input className={style.price} style={{display: "block"}} type="text" placeholder="Phone" />
                <div className={style.flex}>
                    <input className={style.price} style={{width: "75%", display: "inline"}} type="text" placeholder="Location" />
                    <button onClick={showMap} className={style.btnMap}>
                        <p style={{marginRight: "1rem"}}> Select on Map</p>
                        <img src="/icon/map.svg" alt="" />
                    </button>
                </div>
                <button className={style.save}>Save</button>
            </div>
            <div style={{display: display}} className={style.mapContainer}>
                <div ref={mapContainer} className={style.map} ></div>   
            </div>
        </div>
    )
}

export default EditProfile
