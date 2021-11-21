import Hero from '../Hero/Hero'
import MainContent from '../MainContent/MainContent'
function Home(props) {
    return(
      <div>
        <div className="hero">
          <Hero />
        </div>

        <div className="main-content">
          <MainContent cartId={props.cartId}/>
        </div>

        
      </div>
    )
}

export default Home