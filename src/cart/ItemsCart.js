import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import products from '../products.json';

const ItemsCart = (props)=>{
    const [subTotal, setSubTotal] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [desconto, setDesconto] = useState(0.0);
    const [showItems, setShowItems] = useState([]);
    const [trocaEstado,setTrocaEstado] = useState(false);
    const styleEmpty ={
        textAlign:'center',
        paddingTop:'3rem',
        paddingBottom:'3rem'

    }
    
    useEffect(()=>{
        const Add=(nome,preco)=>{
            props.AddCart(nome,preco);
            let qtd = props.qtdItems
            props.setQtdItems(qtd+=1)
            let troca = !trocaEstado
            setTrocaEstado(troca);
        }
        const Remove = (nome,preco)=>{
            let pos = 0;
            props.cart.forEach((element,index)=>{
                if(element.nome ===nome){
                    pos = index
                }
            })
            if(props.cart[pos].qtdd>1){
                props.RemoveCart(nome,preco);
                            
                let qtd = props.qtdItems
            props.setQtdItems(qtd-=1)
            setTrocaEstado(!trocaEstado);
            }
            
           
        }
        const DeleteItem = (produto)=>{
            props.DeleteItem(produto)
            setTrocaEstado(!trocaEstado);


        }
        const styleComponent = {
            alignItems:'center',
            display:'flex'
        }
        const styleContentGame={
            display:'flex'
        }
        const styleNameGame={

        }
        const styleValues={
            verticalAlign:'middle',
        }
        let arrayItemsTr = [];
        props.cart.forEach((element)=>{
            let srcImg = '';
            let precounitario= 0;
            products.forEach((item)=>{
            if(element.nome===item.name){
                srcImg= item.image;
                precounitario = item.price
            }
            })
            let arrayTd =[]
            arrayTd.push(
                <div class="row mb-4">
          <div class="col-md-5 col-lg-3 col-xl-3">
            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img className='img-fluid w-100' src={require('../assets/'+srcImg).default} alt='img-product'/>
             
            </div>
          </div>
          <div class="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div class="d-flex justify-content-between">
                <div>
                  <h5>{element.nome}</h5>
                  
                </div>
                <div>
                  <div class="def-number-input number-input safari_only mb-0 w-100">
                    <button onClick={()=>{Remove(element.nome,precounitario)}}
                      class="minus decrease">-</button>
                    <p class="quantity">{element.qtdd}</p>
                    <button onClick={()=>{Add(element.nome, precounitario)}}
                      class="plus increase">+</button>
                  </div>
                  <small id="passwordHelpBlock" class="form-text text-muted text-center">
                    (Note, 1 piece)
                  </small>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3" onClick={()=>{DeleteItem(element.nome)}}><i
                      class="fas fa-trash-alt mr-1"></i> Remove item </a>
                  
                </div>
                <p class="mb-0"><span><strong id="summary">R$ {precounitario}</strong></span></p>
              </div>
            </div>
          </div>
        </div>
            )

            arrayItemsTr.push(<div key={element.nome}>{arrayTd}</div>)
        })
       
        setShowItems(arrayItemsTr)

    },[total,subTotal,frete,desconto,props.cart,desconto, trocaEstado,props.qtdItems])
    if(props.cart.length>0){
        return(
                
                 <div>{showItems}</div>

        
        )
    }
    else{
        return(
            <div className='text-center'>
                <p style={styleEmpty}>Não há nenhum item</p>
                <hr />
            </div>
            

        )
    }
}
export default ItemsCart;