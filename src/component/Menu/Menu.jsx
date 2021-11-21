import React from 'react'
import style from './Menu.module.css'
import { useParams } from 'react-router'
import menu from './data_menu'


function Menu(props) {
    const {id} = useParams()
    const listMenu = menu.find(a => a.restaurant.id == id)
        
    const addCart = () => {
        props.cart(props.total + 1)
    }
    
    return (
        <div className={style.menuContainer}>
            <h1 className={style.h1}>{listMenu.restaurant.name}, Menus</h1>
            
            <div className={style.gridContainer}>
                {listMenu.menu.map(a => {
                    return(
                        <div className={style.gridItem}>
                            <img className={style.img} src={a.img} />
                            <h4>{a.name}</h4>
                            <p style={{color: "#FF1515"}}> Rp. {a.price} </p>
                            <button onClick={addCart} className={style.order}>Order</button>
                        </div>
                    )
                })}

            </div>
            
        </div>
    )
}

export default Menu
