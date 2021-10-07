import ItemsCart from "./ItemsCart";
import './Cart.css';
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const Cart =(props)=>{
    const [trocaEstado,setTrocaEstado] = useState(false);
    const [subTotal, setSubTotal] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [padlock,setPadlock] = useState(false);
    
   
    const DeleteAll = ()=>{
        props.DeleteAll();
        setTrocaEstado(!trocaEstado)
        }
    useEffect(()=>{
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
    },[trocaEstado,frete,subTotal,total,padlock,props.cart])
    
    const styleTest={
        width:'100%',
        height:'100%'
    }
   
    return(<div className='Cart-Container transition container my-5' style={styleTest}>
        <section>

<div className="row">

  <div className="col-lg-8">

    <div className="mb-3 mr-2">
      <div className="pt-4 ">

        <h5 className="mb-4 ml-2">Carrrinho (<span>{props.qtdItems}</span> itens)</h5>
        <ItemsCart setPadlock={setPadlock} cart={props.cart} qtdItems={props.qtdItems}  setQtdItems={props.setQtdItems} setCart = {props.setCart} AddCart={props.AddCart} RemoveCart={props.RemoveCart} DeleteItem={props.DeleteItem} DeleteAll={props.DeleteAll}/>
        </div>
    </div>
 </div>

  <div className="col-lg-4 ">

    <div className="mb-3 mx-2 ">
      <div className="pt-4">

        <h5 className="mb-3">Resumo</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            SubTotal
            <span>R$ {props.subTotal}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Frete
            <span>{props.frete}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total</strong>
              
            </div>
            <span><strong>R$ {props.total}</strong></span>
          </li>
        </ul>

        <button type="button" className="btn btn-primary btn-block">Finalizar Compra</button>
        <button type="button" className="btn btn-outline-danger btn-block " onClick={()=>{DeleteAll()}}>Limpar Carrinho</button>


      </div>
    </div>

   

  </div>

</div>

</section>
        
    </div>)
}
export default Cart;