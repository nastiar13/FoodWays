import style from './Near.module.css'


const Near = (props) => {
    return(
        <div className={style.near}>
            <img src={props.img} className={style.img} />
            <h5 className={style.h5}>{props.title}</h5>
            <p className={style.dist}>
                {props.dist}
            </p>
        </div>
    )
}

export default Near