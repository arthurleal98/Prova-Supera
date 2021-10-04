import { useEffect, useState } from "react"
import products from '../products.json';
import './store.css';
import cartIconAdd from '../assets/cart-icon.svg';
const ListProducts = ()=>{
    const ul = [];
    const [gamesStore, setGamesStore] = useState([]);
    const styleImg = {
        with:'30px',
        height:'100%',
        padding:'30px',
        marginLeft:'auto',
        marginRight:'auto'

    }
    const stylePrice={
        textAlign:'center',
        fontWeight:'bold'
    }
    const styleContentImg={
        display:'block'
    }
    const styleCartIcon={
        width:30
    }
    const styleContentAddCart={
        display:'flex',
        backgroundColor:'red',
        position:'absolute',
        right:'15px',
        marginTop:-25,
        marginRight:7
        
    }
    
    useEffect(()=>{
       const API = ()=>{ 
            try{                
                products.map((games)=>{
                    let li = [];        
                    li.push(<div style={styleContentImg}><img src={require('../assets/'+games.image).default} style={styleImg} className='card-img-top'></img></div>)
                    li.push(<div key={'describe'+games.id} className='card-body text-content-game-store'>
                        <p key={'name'+games.name} className='card-text'>{games.name}</p>
                        <p key={'score'+games.score} >Score: {games.score}</p>                        
                        </div>);
                    ul.push(<div key={games.id}  className='unique-game col-md-3 py-4'><div className='card shadow'>{li}</div><div  style={styleContentAddCart}>
                    <p key={'price'+games.price} style={stylePrice} className='align-items-middle'>R$ {games.price}</p>
                    <button className='btn btn-success'><img src={cartIconAdd} style={styleCartIcon}/></button>
                    

                </div></div>);

                });
                setGamesStore(ul);               
                
            }
            catch(e){
                console.log(e)
            }}
        API();

    },[])
    
    const styleDivUl = {

        
        justifyContent:'center',
        paddingBottom:'100px'
       


    }
    return(
        <div style={styleDivUl} className='container'>        
            <div id='list_games_store' className='row' >
                {gamesStore}
            </div>
        </div>
    )
}
export default ListProducts;