import { useEffect, useState } from "react"
import products from '../products.json';
import './store.css';
import cartIconAdd from '../assets/cart-icon.svg';
const ListProducts = ()=>{
    const [gamesStore, setGamesStore] = useState([]);
    
    
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
                    card_game.push(<div style={styleContentImg}><img src={require('../assets/'+games.image).default} style={styleImg} className='card-img-top' alt={`product_${games.image}`}></img></div>)
                    card_game.push(<div key={'describe'+games.id} className='card-body text-content-game-store'>
                        <p key={'name'+games.name} className='card-text'>{games.name}</p>
                        <p key={'score'+games.score} >Score: {games.score}</p>                        
                        </div>);
                    all_games.push(<div key={games.id}  className='unique-game col-lg-3  py-4'><div className='card shadow'>{card_game}</div><div  style={styleContentAddCart}>
                    <p key={'price'+games.price} style={stylePrice} className='align-items-middle'>R$ {floatValue}</p>
                    <button className='btn btn-success'><img src={cartIconAdd} style={styleCartIcon} alt='cart-icon'/></button>
                    

                </div></div>);

                });
                setGamesStore(all_games);               
                
            }
            catch(e){
                console.log(e)
            }}
        API();

    },[])
    
    const styleDivall_games = {

        
        justifyContent:'center',
        paddingBottom:'100px'
       


    }
    return(
        <div style={styleDivall_games} className='container'>        
            <div id='list_games_store' className='row' >
                {gamesStore}
            </div>
        </div>
    )
}
export default ListProducts;