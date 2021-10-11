import './navBar.css';
import { Link } from 'react-router-dom';
import cart from '../assets/shopping-cart.png';
const NavBar = (props) =>{
    
    const styleCart={
        width:40,
        height:40,
        alignSelf: 'center'

    }
    const styleH4={
        margin:0
    }
    const styleP={
        fontSize:20,
        textAlign:'center'
    }
    const styleContentCart={
        alignSelf: 'center'

    }
    const styleNav={
        backgroundColor:'#171a21',
        textAlign:'center'
    }
   
    return(
            <nav className="navbar navbar-expand-lg transition " style={styleNav} >
                
                <h1><Link to='/' className='link'>Supera Games</Link></h1>                
  <button className="navbar-toggler " type="button" data-toggle="collapse" id='toggle-button' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-justify" viewBox="0 0 16 16">
  <path  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-4">
      <li className="nav-item active" style={styleP}>
        <Link to='/games' className='link'>Jogos <span className="sr-only">(current)</span></Link>
      </li>
     
      
      
    </ul>
      <div id='nav-bar-cart'>                
                <Link to='/Prova-Supera/cart' className='link'>
                    <div id='nav-cart'>
                        <img src={cart} alt='cart' style={styleCart} />
                        <div style={styleContentCart}>
                            <h4 style={styleH4}>Carrinho</h4>
                            <p style={styleP}>{props.qtdItems} produto</p>
                        </div>
                        
                        
                    </div>
                </Link>
            </div>
  </div>
</nav>
       
    )

}
export default NavBar;