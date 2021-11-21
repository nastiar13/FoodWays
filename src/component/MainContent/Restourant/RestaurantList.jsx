import style from './Restaurant.module.css'

const RestaurantList = (props) => {
    return(
        <div className={style.restList}>
            <img src={props.logo} className={style.restLogo} />
            <p className={style.restTitle}>
                {props.title}
            </p>
        </div>
    )
}

export default RestaurantList