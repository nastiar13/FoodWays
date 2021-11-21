import style from './Login.module.css'


function Login(props) {
    const input = [{name: "Email"},{name: "Password"}]
    const title= "Login"

    

    const login = (e) => {
        e.preventDefault()
        props.isLogin(true)
        document.querySelector('#Email').value = null
        document.querySelector('#Password').value = null
    }
    const inputEmail = (e) => {
        props.inputEmail(e.target.value)
        
    }
   
    
    return (
      <div className={style.form}>
                <div onClick={() => props.display('none')} className={style.close}></div>
                <form >
                    <h1 className={style.h1}>{title}</h1>
                    {input.map(a => {
                        return <input onChange={inputEmail} className={style.input} id={a.name} type="text" name={a.name.toLowerCase()} placeholder={a.name} />
                    })}
                        
                    <button onClick={login} className={style.btnSubmit} type="submit">{title}</button>
    
                    <p className={style.botP}>Don't have an account ? <a className={style.link} href="#"></a>Register</p>
    
                </form>
            </div>
      )
}

export default Login