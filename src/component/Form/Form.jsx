import style from './Form.module.css'




const Form = (props) => {
    const onClick = (e) => {
        e.target.parentElement.style.display = "none"
    }
    if (props.status == undefined) {
        return(
            <div className={style.form}>
                <div onClick={onClick} className={style.close}></div>
                <form action="">
                    <h1 className={style.h1}>{props.title}</h1>
                    {props.input.map(a => {
                        return <input className={style.input} type="text" name={a.name.toLowerCase()} placeholder={a.name} />
                    })}
                        
                    <button className={style.btnSubmit} type="submit">{props.title}</button>
    
                    <p className={style.botP}>{props.botP} <a className={style.link} href="#">{props.register}</a></p>
    
                </form>
            </div>
        )
    }else {
    return(
        <div className={style.form}>
            <div onClick={onClick} className={style.close}></div>

            <form action="">
                <h1 className={style.h1}>{props.title}</h1>
                {props.input.map(a => {
                    return <input className={style.input} type="text" name={a.name.toLowerCase()} placeholder={a.name} />
                })}
                
                    <select className={style.input}>
                    {props.status.map((a,i) => {
                        return <option value={i}>{a}</option>
                        
                    })}
                    </select>
                
                
                    
                <button className={style.btnSubmit} type="submit">{props.title}</button>

                <p className={style.botP}>{props.botP} <a className={style.link} href="#">{props.register}</a></p>

            </form>
        </div>
    )}
    
}
export default Form