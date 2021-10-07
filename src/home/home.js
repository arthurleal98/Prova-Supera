import { Link } from "react-router-dom";

const Home = () =>{
    const styleHome={
        textAlign:'center',
        color: '#b8b6b4',
        height:'100%',
        marginTop:200
    }

    
    return(
        <div  style={styleHome} className='transition'>
            
            <div >
                <h1>Bem-vindo a Supera Games</h1>
                <Link to='/games' className='link'><button className='btn btn-primary my-2 py-2'>Visitar Loja</button></Link>
            </div>
            

        </div>
    )
}
export default Home;