import ItemsCart from "./ItemsCart";
import './Cart.css';
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const Cart =(props)=>{
    const [trocaEstado,setTrocaEstado] = useState(false);
    const [button, setButton] = useState('')
    const [subTotal, setSubTotal] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [desconto, setDesconto] = useState(0.0);
    const [values, setValues] = useState([]);
   
    const DeleteAll = ()=>{
        props.DeleteAll();
        setTrocaEstado(!trocaEstado)
        }
    useEffect(()=>{
        if(props.cart.length>1){
                     setButton(<button className='btn btn-sucess' onClick={()=>{DeleteAll()}}>Remover Tudo</button>);

        }

        let subTotal = 0;
        let frete = 0;
        let total = 0;
        props.cart.forEach(element => {
            subTotal+=parseFloat(element.preco)
            frete+=parseInt(element.qtdd)
        });
        if(subTotal>=250){
            frete='Grátis'
            total = subTotal
        }
        else{
            frete= frete *10
            total = frete+subTotal;
            frete= 'R$ '+frete.toFixed(2)
        }
        setFrete(frete);
        setSubTotal(subTotal.toFixed(2));
        setTotal(total.toFixed(2));
    },[trocaEstado,props.cart,props.qtdItems,props.DeleteAll,button])
    const stylePCarrinho={
        fontSize:22,
        color:'#b8b6b4',

    }
    const styleButton={
        
    }
    const styleTest={
        width:'100%',
        height:'100%'
    }
   
    return(<div className='container-fluid py-4 px-4 transition' style={styleTest}>
        <div id='meu-carrinho' className='d-flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill icon-color-white" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <p style={stylePCarrinho} className='px-2'>MEU CARRINHO</p>
        </div>
        <div id='items-cart' >
            <ItemsCart cart={props.cart} qtdItems={props.qtdItems}  setQtdItems={props.setQtdItems} setCart = {props.setCart} AddCart={props.AddCart} RemoveCart={props.RemoveCart} DeleteItem={props.DeleteItem} DeleteAll={props.DeleteAll}/>
            <div style={styleButton}>
                                {button}

            </div>

            <div className='px-5  values'>
                <div >
                    <div className='d-flex'>
                        <h2>Sub-total:</h2>
                        <p className='text-values'>R$ {subTotal}</p>
                    </div>
                    <div className='d-flex'>
                        <h2>Frete:</h2>
                        <p className='text-values'>{frete}</p>
                    </div>
                    <div className='d-flex'>
                        <h2>Total:</h2>
                        <p >R$ {total}</p>
                    </div>
                </div>
                <div>                <button className='btn btn-success'>Comprar</button>


                </div>


            </div>
        </div>
        
    </div>)
}
export default Cart;