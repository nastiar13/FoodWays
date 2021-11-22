import './App.css';
import style from './App.module.css'
import { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import menu from './component/Menu/data_menu';

// Component

import Login from './component/login/Login'
import Register from './component/Register/Register'
import Home from './component/Home/Home';
import Dropdown from './component/Dropdown/Dropdown';
import Profile from './component/Profile/Profile'
import Menu from './component/Menu/Menu';
import Cart from './component/Cart/Cart';
import Admin from './component/Admin/Admin';
import AddProduct from './component/AddProduct/AddProduct';
import EditProfile from './component/EditProfile/EditProfile';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [cartLength, setCartLength] = useState(0)
  const [loginDisplay, setLoginDisplay] = useState("none")
  const [registerDisplay, setRegisterDisplay] = useState("none")
  const [dropDownDisplay, setDropDownDisplay] = useState("none")
  const [data, setData] = useState(menu)
  const [cartId, setCartId] = useState(1)
  const modal = (e) => {
    e.target.value === "login" ?
    setLoginDisplay("block") :
    setRegisterDisplay("block")

  }
  const [user, setUser] = useState({
    isLogin : false,
    id: 1,
    email : '',
    password : '',
    statusUser : 1
  })
  

  useEffect(() => {
    
    setLoginDisplay('none')
    setRegisterDisplay('none')
    setDropDownDisplay('none')
    
  }, [isLogin])

  if(!user.email) {
    user.statusUser = 0
    user.id = 1

  }else{
    user.statusUser = 1
    user.id = 2
  }

  let list = [{name: "Profile", img:"/icon/user.svg", path: `/profile/${user.id}`}]
  if(user.statusUser === 1) {
    list = [{name: "Profile Patner", img:"/icon/user.svg", path: `/profile/${user.id}`}, {name: "Add Product", img:"/icon/add-product.svg", path: "/add-product"}]
  }


  

  const block = () => {
    setDropDownDisplay("block")
  }
  const none = () => {
    setDropDownDisplay("none")
  }
  
  
  return (
    <Router >
      <div className={style.nav}>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <div className={style.flexItem}>
                  <p className={style.textLogo}>WaysFood</p>
                  <img  src="/icon/logo1.svg" alt="" />
              </div>
            </Link>
            {!isLogin ? 
            <div className={style.flexItem}>
                <button onClick={modal} value="register" className={style.btn}>Register</button>
                <button onClick={modal} className={style.btn} value="login">Login</button>
            </div>
            :
            <div className={style.flexItem}>
                {
                  user.email === '' ?
                  <Link to={`/cart/${cartId}`}>
                  <div className={style.cartIcon}>
                      <img src="/icon/shopping-basket.svg" alt="" />
                      {cartLength > 0 ? 
                      <div className={style.rounded}><p className={style.cartTotal}>{cartLength}</p></div> : <div></div>
                      }
                  </div>
                </Link> :
                null
                }
                
                <div onMouseLeave={none} onMouseOver={block} style={{cursor: "pointer"}} className={style.profile}>
                    <img className={style.profilePic} src={!user.email ? "/img/user-pict.png" : "/img/1.png"} />  
                    <div style={{display: dropDownDisplay}} className="dropDown">
                      <Dropdown setEmailToNull={par => user.email = par} status={user.statusUser} list={list} isLogin={status => setIsLogin(status)} />
                    </div>
                </div>
                
            </div>    
            } 
            <div className="absolute login" style={{display: loginDisplay}}>
              <Login inputEmail={email => user.email = email} display={login=>setLoginDisplay(login)} isLogin={status => setIsLogin(status)} />
            </div>
            <div style={{display: registerDisplay}} className="absolute register">
              <Register display={regis => setRegisterDisplay(regis)}/>
            </div>
        </div>
        

        <Switch>
          <Route exact path="/">
            {!user.email ? <Home cartId={id=>setCartId(id)}/> : <Admin />}
            
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/restaurant/:id">
            <Menu cart={total => setCartLength(total)} total={cartLength}/>
          </Route>
          <Route path="/cart/:id">
            <Cart menu={data}/>
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/edit-Profile/:id">
            <EditProfile />
          </Route>
          
          
        </Switch>


        



    </Router>
  )
  }
  
  export default App;
  
  
  
