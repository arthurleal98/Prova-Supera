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
    },[trocaEstado,button,frete,subTotal,total])
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
   
    return(<div className='Cart-Container transition' style={styleTest}>
        <section>

<div class="row">

  <div class="col-lg-8">

    <div class="mb-3">
      <div class="pt-4 wish-list">

        <h5 class="mb-4">Cart (<span>2</span> items)</h5>

        <ItemsCart cart={props.cart} qtdItems={props.qtdItems}  setQtdItems={props.setQtdItems} setCart = {props.setCart} AddCart={props.AddCart} RemoveCart={props.RemoveCart} DeleteItem={props.DeleteItem} DeleteAll={props.DeleteAll}/>

        <hr class="mb-4"/>
        
        

      </div>
    </div>

    

    

  </div>

  <div class="col-lg-4">

    <div class="mb-3">
      <div class="pt-4">

        <h5 class="mb-3">The total amount of</h5>

        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Temporary amount
            <span>R$ {props.subTotal}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>{props.frete}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total</strong>
              
            </div>
            <span><strong>R$ {props.total}</strong></span>
          </li>
        </ul>

        <button type="button" class="btn btn-primary btn-block">go to checkout</button>

      </div>
    </div>

    <div class="mb-3">
      <div class="pt-4">

        <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Add a discount code (optional)
          <span><i class="fas fa-chevron-down pt-1"></i></span>
        </a>

        <div class="collapse" id="collapseExample">
          <div class="mt-3">
            <div class="md-form md-outline mb-0">
              <input type="text" id="discount-code" class="form-control font-weight-light"
                placeholder="Enter discount code"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</section>
        
    </div>)
}
export default Cart;