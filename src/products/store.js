import { useEffect, useState } from "react"
import products from '../products.json';
import './store.css';
import { Link } from 'react-router-dom';
import quckSort from '../utilites/quickSort'
import cartIconAdd from '../assets/cart-icon.svg';
const ListProducts = (props)=>{
    const [gamesStore, setGamesStore] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ordem,setOrdem] = useState(['name',0])
    const [search, setSearch]= useState('');
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
       const API = async()=>{ 
            try{
                let all_games= [];
                let sortedItems = quckSort(products,0,products.length-1,ordem[0],ordem[1])                
                let filter_items = sortedItems.filter((element)=>{return(element.name,element.name.toLowerCase().indexOf(search)!==-1)})
                filter_items.forEach((games)=>{
                    
                        let card_game = [];
                        let floatValue = parseFloat(games.price).toFixed(2);
                        card_game.push(<div style={styleContentImg} key={games.id+'_contentimg'}>
                                            <img key={games.id+'_img'}src={require('../assets/'+games.image).default} style={styleImg} className='card-img-top' alt={`product_${games.image}`}/>
                                        </div>)
                        card_game.push(<div key={'describe_'+games.id} className='card-body text-content-game-store'>
                                            <p key={'name_'+games.name} className='card-text'>{games.name}</p>
                                            <p key={'score_'+games.score} >Score: {games.score}</p>                        
                                        </div>);
                        all_games.push(<div key={games.id}  className='unique-game col-lg-3  py-4'>
                                            <div className='card shadow' key={'card_'+games.id}>
                                                {card_game}
                                            </div>
                                            <div  style={styleContentAddCart} key={'contentaddcart_'+games.id}>
                                                <p key={'price'+games.price} style={stylePrice} className='align-items-middle'>R$ {floatValue}</p>
                                                <Link to='/cart' className='link'><button className='btn btn-success' onClick={()=>{props.addCart(games.name,floatValue)}} key={'button'+games.id}><img src={cartIconAdd} style={styleCartIcon} alt='cart-icon' key={'iconaddcart'+games.id}/></button></Link>
                                            </div>
                                        </div>);
                    
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

    },[props,ordem, search])
    const styleH1={
        color:'#b8b6b4'
    }
    const styleDivall_games = {
        
        justifyContent:'center',
        paddingBottom:'100px' 


    }
   
    const CaptureSelect = (event)=>{
        let split = event.target.value.split(' ')
        setOrdem([split[0],parseInt(split[1])])
        
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
            <div className='store'>  
                <div className='filters-div'>
                    
                    <div className='search-store'>
        {                    <input type='search' placeholder='Procurar' onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}></input>
}                </div>
                    
                </div>              
            <div style={styleDivall_games} className='transition py-5 all-games' >
                <div id='ordenacao'>
                <h1 style={styleH1}>Todos os jogos</h1>
                
                <div id='select' >
                    
                        <div >
                            <label className='label'>Ordenar por:</label>
                            <div className='' >
                                <select class="form-select" aria-label="Default select example" onChange={(event)=>{CaptureSelect(event)}}>
                                    <option value='name 0' >Nome</option>
                                    <option value="score 0">Popularidade Crescente</option>
                                    <option value="score 1">Popularidade Decrescente</option>
                                    <option value="price 0">Valor Crescente</option>
                                    <option value="price 1">Valor Decrescente</option>
                                </select>
                            </div>
                        </div>
                        
                </div>   
                
                </div>  
                
                <div id='list_games_store' className='row' >
                    {gamesStore}
                </div>
            </div></div>
        )
        }
}
export default ListProducts;