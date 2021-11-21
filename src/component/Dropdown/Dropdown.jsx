import style from './Dropdown.module.css'
import {Link, Redirect} from "react-router-dom";


const Dropdown = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        props.isLogin(!props.isLogin)
        props.setEmailToNull('')
    }

    if(props.status == 0) {
        return(
            <div>
                <div className={style.triangle}>

                </div>
                <div className={style.dropDown}>
                    <ul>
                        
                        <Link to={props.list[0].path} style={{textDecoration: "none", color: "black"}} ><li><a className={style.btn} href=""><img className={style.icon} src={props.list[0].img} alt="" /> <b>{props.list[0].name}</b></a></li></Link>
                       
                        
                    </ul>
                    <div className={style.line}></div>
                    
                    <ul>

                        <li onClick={logOut}><a className={style.btn} href=""><img className={style.icon} src="/icon/logout.svg" alt="" /> <b>Logout</b></a></li>
                    </ul>
                </div>
            </div>
            
        )
    }else {
        return(
            <div>
                <div className={style.triangle}>

                </div>
                <div className={style.dropDown}>
                    <ul>
                        {props.list.map(a => {
                            return <Link to={a.path} style={{textDecoration: "none", color: "black"}} > <li><a className={style.btn} href=""><img className={style.icon} src={a.img} alt="" /> <b>{a.name}</b></a></li> </Link>
                        })}
                        
                    </ul>
                    <div className={style.line}></div>
                    
                    <ul>

                        <li onClick={logOut}><p className={style.btn} ><img className={style.icon} src="/icon/logout.svg" alt="" /> <b>Logout</b></p></li>
                    </ul>
                </div>


                
            </div>
            
        )
    }
}

export default Dropdown