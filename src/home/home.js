import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div className='container'>
            <h1>Bem-vindo a Supera Games</h1>
            <button className='btn btn-primary'><Link to='/games'/></button>

        </div>
    )
}
export default Home;