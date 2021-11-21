import style from './Hero.module.css'

const Hero = () => {
    return(
        <div className={style.hero}>
            <div className={style.left}>
                <h1 className={style.h1}>Are You Hungry ?<br />Express Home Delivery</h1>
                <div className={style.desc}>
                    <div className={style.line}>

                    </div>
                    <p className={style.descP}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <div className={style.right}>
                <img src="img/pizza.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero