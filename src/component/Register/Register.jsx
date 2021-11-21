import style from './Register.module.css'

const Register = (props) => {
    const input = [{name: "Email"},{name: "Password"},{name: "Full Name"},{name: "Gender"},{name: "Phone"}]
    const title = "Register"
    const status= ["User", "Patner"]
    return(
        <div className={style.form}>
            <div onClick={() => props.display('none')} className={style.close}></div>

            <form action="">
                <h1 className={style.h1}>{title}</h1>
                {input.map(a => {
                    return <input className={style.input} type="text" name={a.name.toLowerCase()} placeholder={a.name} />
                })}
                
                    <select className={style.input}>
                    {status.map((a,i) => {
                        return <option value={i}>{a}</option>
                        
                    })}
                    </select>
                
                
                    
                <button className={style.btnSubmit} type="submit">{title}</button>

                <p className={style.botP}>Already have an account ? <a className={style.link} href="#">Login</a></p>

            </form>
        </div>

    )
}

export default Register