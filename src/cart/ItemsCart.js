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
            setTrocaEstado(!trocaEstado);
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
            
            let qtd = props.qtdItems
            props.setQtdItems(qtd-=1)
            setTrocaEstado(!trocaEstado);
        }
        const DeleteItem = (produto)=>{
            props.DeleteItem(produto)
            setTrocaEstado(!trocaEstado);
            console.log('removeu'+produto)


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
            arrayTd.push(<td key='contentItemTdNome'>
                <div style={styleContentGame}>
                    <img className='img-store-table' src={require('../assets/'+srcImg).default} alt='img-product'/>
                    <div style={styleComponent} className='px-3'> 
                        <p >{element.nome}</p>

                    </div>
                </div>
                </td>)
            arrayTd.push(<td key='contentItemTdQtdd' style={styleValues} >
                            <div className='d-flex'>
                                <div  onClick={()=>{Remove(element.nome,precounitario)}} className='pr-1'>
                                    <svg className='mt-2 ' xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="buttonsqtdd icon-qtd  bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </div>
                                <div id='qtd'>
                                    <p className=''>{element.qtdd}</p>
                                </div>
                                <div>
                                    
                                </div>
                                    <div  onClick={()=>{Add(element.nome, precounitario)}}  className='pl-1'>
                                        <svg className='mt-2 ' xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="buttonsqtdd icon-qtd  bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </div>     
                            </div>
                                               
                </td>)
            arrayTd.push(<td key='contentItemTdPreco' style={styleValues} >R$ {parseFloat(element.preco).toFixed(2)}</td>)
            arrayTd.push(<td key='trash' style={styleValues} ><div >
                <svg  onClick={()=>{DeleteItem(element.nome)}} xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="buttonsqtdd icon-qtd  bi bi-trash " viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </div></td>)

            arrayItemsTr.push(<tr key={element.nome}>{arrayTd}</tr>)
        })
       
        
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
            frete= 'R$ '+frete
        }
        setFrete(frete);
        setSubTotal(subTotal);
        setTotal(total);
        setShowItems(arrayItemsTr)
        console.log(total)

    },[total,subTotal,frete,desconto,props.cart,desconto, trocaEstado,props.qtdItems])
    if(props.cart.length>0){
        return(<div className='flex-wrap tables-cart'>
               
                <div id='table-items'>
                    <table className='table'>
                        <thead key='cabecalho_table'>
                            <tr>
                                <th key='name_produto' >Produto</th>
                            <th key='name_qtdd' >Qtdd</th>
                            <th key='name_preco' >Preço</th>
                            </tr>
                            
                        </thead>
                        <tbody key='items'>
                            {
                                showItems
                            }
                        </tbody>
                    </table>
                </div>
                
                 

        </div>)
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