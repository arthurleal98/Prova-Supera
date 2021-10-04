import './navBar.css';
import { Link } from 'react-router-dom';
import cart from '../assets/shopping-cart.png';
const NavBar = (props) =>{
    const styleNav={
        display:'flex',
        justifyContent:'space-around',
        backgroundColor:'#171a21',
        height:'7rem',
        alignItems:'center',
        paddingLeft:'40px',
        paddingRight:'60px',
        position:'-webkit-sticky',
        position:'sticky'

    }
    const styleCart={
        width:40,
        height:40,
        alignSelf: 'center'

    }
    const styleH4={
        margin:0
    }
    const styleP={
        margin:0,
        float:'right'
    }
    const styleContentCart={
        alignSelf: 'center'

    }
   
    return(
        <nav style={styleNav}>
            <div id='Logo'>
                <h1><Link to='/' className='link'>Supera Games</Link></h1>                
            </div>               
            
            <div id='nav-bar-cart'>
                
                <Link to='/cart' className='link'>
                    <div id='nav-cart'>
                        <img src={cart} alt='cart' style={styleCart}/>
                        <div style={styleContentCart}>
                            <h4 style={styleH4}>Carrinho</h4>
                            <p style={styleP}>{props.qtdItems} produto</p>
                        </div>
                        
                    </div>
                </Link>
            </div>
        </nav>
    )

}
export default NavBar;