import { useEffect, useState } from "react"
import products from '../products.json';
import './store.css';
import cartIconAdd from '../assets/cart-icon.svg';
const ListProducts = (props)=>{
    const [gamesStore, setGamesStore] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const styleImg = {
        with:'30px',
        height:'100%',
        padding:'30px',
        marginLeft:'auto',
        marginRight:'auto'
        }
        const stylePrice={
            textAlign:'center',
            fontWeight:'bold',
            margin:0,
            paddingTop:8,
            paddingLeft:15,
            marginRight:10
        }
        const styleContentImg={
            display:'block'
        }
        const styleCartIcon={
            width:30
        }
        const styleContentAddCart={
            display:'flex',
            backgroundColor:'#2a475e',
            position:'absolute',
            right:'15px',
            marginTop:-25,
            marginRight:7,
            color:'#b8b6b4',
            borderRadius:5            
        }
       const API = ()=>{ 
            try{
                const all_games = [];
          
                products.forEach((games)=>{
                    let card_game = [];
                    let floatValue = parseFloat(games.price).toFixed(2);
                    card_game.push(<div style={styleContentImg} key={games.id+'_contentimg'}><img key={games.id+'_img'}src={require('../assets/'+games.image).default} style={styleImg} className='card-img-top' alt={`product_${games.image}`}></img></div>)
                    card_game.push(<div key={'describe_'+games.id} className='card-body text-content-game-store'>
                        <p key={'name_'+games.name} className='card-text'>{games.name}</p>
                        <p key={'score_'+games.score} >Score: {games.score}</p>                        
                        </div>);
                    all_games.push(<div key={games.id}  className='unique-game col-lg-3  py-4'><div className='card shadow' key={'card_'+games.id}>{card_game}</div><div  style={styleContentAddCart} key={'contentaddcart_'+games.id}>
                    <p key={'price'+games.price} style={stylePrice} className='align-items-middle'>R$ {floatValue}</p>
                    <button className='btn btn-success' onClick={()=>{props.addCart(games.name)}} key={'button'+games.id}><img src={cartIconAdd} style={styleCartIcon} alt='cart-icon' key={'iconaddcart'+games.id}/></button>
                    

                </div></div>);

                });
                setGamesStore(all_games);               
                
            }
            catch(e){
                console.log(e)
            }
            finally{
                setLoading(false)
            }
        }
        API();

    },[])
    
    const styleDivall_games = {

        
        justifyContent:'center',
        paddingBottom:'100px'
       


    }
    if(loading){
        return(
            <div className='container'>
                <div className="lds-dual-ring"></div>

            </div>
        )
    }
    else{
        return(
            <div style={styleDivall_games} className='container transition py-5'>        
                <div id='list_games_store' className='row' >
                    {gamesStore}
                </div>
            </div>
        )
        }
}
export default ListProducts;