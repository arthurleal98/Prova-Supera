import { useEffect } from "react";
import { Link } from "react-router-dom";
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
                <div className="row mb-4">
          <div className="col-md-5 col-lg-3 col-xl-3">
            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img className='img-fluid w-100' src={require('../assets/'+srcImg).default} alt='img-product'/>
             
            </div>
          </div>
          <div className="col-md-7 col-lg-9 col-xl-9 " >
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{element.nome}</h5>
                  
                </div>
                <div>
                  <div className=" mb-0 w-100 d-flex">
                    <div onClick={()=>{Remove(element.nome,precounitario)} }
                      className="px-2 buttons-qtd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                    </svg></div>
                    <p className="quantity">{element.qtdd}</p>
                    <div onClick={()=>{Add(element.nome, precounitario)} }
                      className="px-2 buttons-qtd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg></div>
                  </div>
                  <small id="passwordHelpBlock" className="form-text text-muted text-center">
                    (Valor, unidade)
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div   className="small text-uppercase mr-3" onClick={()=>{DeleteItem(element.nome)}} id='remove-item'><i
                      className=" mr-1 "></i> Remover item </div>
                  
                </div>
                <p className="mb-0"><span><strong id="summary">R$ {precounitario}</strong></span></p>
              </div>
            </div>
          </div>
          <hr/>
        </div>
            )

            arrayItemsTr.push(<div key={element.nome} >{arrayTd}</div>)
        })
       
        setShowItems(arrayItemsTr)

    },[total,subTotal,frete,desconto,desconto, trocaEstado])
    if(props.cart.length>0){
        return(
                
                 <div>{showItems}</div>

        
        )
    }
    else{

        return(
            <div className='text-center'>
                <p style={styleEmpty}>Não há nenhum item</p>
                <Link to='/games' className='link'><button type="button" className="btn btn-success ">Voltar ao Catálogo</button></Link>
                
            </div>
            

        )
    }
}
export default ItemsCart;