import { useEffect, useState } from 'react/cjs/react.development'
import style from './Navigation.module.css'



const Navigation = (props) => {
    const [isLogin, setIsLogin] = useState(props.isLogin)

    useEffect(() => {
        console.log('hello')
    },[props.display])

    const block = (e) => {
        e.target.value === "register" ?
        props.displayRegister('block') :
        props.displayLogin('block') 
    }
    
    
    return(
        <div className={style.nav}>
            <div className={style.flexItem}>
                <p className={style.textLogo}>WaysFood</p>
                <img  src="icon/logo1.svg" alt="" />
            </div>
            {isLogin === 0 ? 
            <div className={style.flexItem}>
                <button onClick={block} value="register" className={style.btn}>Register</button>
                <button onClick={block} className={style.btn} value="login">Login</button>
            </div>
            :
            <div className={style.flexItem}>
                <div className={style.cartIcon}>
                    <img src="icon/shopping-basket.svg" alt="" />
                    {props.cartLength > 0 ? 
                    <div className={style.rounded}><p className={style.cartTotal}>{props.cartLength}</p></div> : <div></div>
                    }
                </div>
                <div className={style.profile}>
                    <img className={style.profilePic} src="icon/user.svg" alt="" />  
                </div>
            </div>    
            }
            
                  
        </div>
    )
}

export default Navigation