import { useState } from 'react/cjs/react.development';
import style from './MainContent.module.css'
import Near from './Near/Near';
import RestaurantList from "./Restourant/RestaurantList";
import { Link } from 'react-router-dom';
const MainContent = (props) => {
    const [restaurants, setRestaurants] = useState([
        {
            title: "Burger King",
            logo : "icon/burger-king.svg"
        },
        {
            title: "Starbucks",
            logo : "icon/starbucks.svg"
        },
        {
            title: "KFC",
            logo : "icon/KFC.svg"
        },
        {
            title: "Jco",
            logo : "icon/JCO.svg"
        }
    ])

    const [near, setNear] = useState([
        {
            id : 1,
            title : "Geprek Bensu",
            img : "img/1.png",
            dist : "0,2 KM",
            path : "/restaurant/"
        },
        {
            id : 2,
            title : "Nasi Goreng Mas Rony",
            img : "img/2.png",
            dist : "0,6 KM",
            path : "/restaurant/"
        },
        {
            id : 3,
            title : "Pecel Ayam Prambanan",
            img : "img/3.png",
            dist : "0,6 KM",
            path : "/restaurant/"
        },
        {
            id : 4,
            title : "Kopi Kenangan",
            img : "img/4.png",
            dist : "1,6 KM",
            path : "/restaurant/"
        }
    ])

    return(
        <div className={style.container}>
            <div className={style.pop}>
                <h1 className={style.h1}>Popular Restaurant</h1>
                <div className={style.flexList}>
                    {restaurants.map(a => {
                        return <RestaurantList title={a.title} logo={a.logo} />
                    })}
                </div>
            </div>
            <div className={style.pop}>
                <h1 className={style.h1}>Restaurant Near You</h1>
                <div className={style.flexList}>
                    {near.map(a => {
                        return <Link to={`${a.path}${a.id}`} onClick={()=>props.cartId(a.id)} style={{textDecoration: "none", color: "black"}}><Near title={a.title} img={a.img} dist={a.dist} /></Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainContent

