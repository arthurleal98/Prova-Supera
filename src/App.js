import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart.js";
import Home from "./home/home.js";
import NavBar from "./navbar/navbar.js";
import ListProducts from "./products/store";
const App = ()=>{
    const [qtdItems, setQtdItems] = useState(0);
    const [cart,setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    
    
    useEffect(()=>{
        const qtd=()=>{
            let cont = 0;        
            cart.forEach((produto)=>{
                cont+=produto.qtdd
             }) 
            let subTotal = 0;
             let frete = 0;
             let total = 0;
             cart.forEach(element => {
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
        setQtdItems(cont);
        }
        qtd();
        
        
        
    

    },[qtdItems,cart])
    const AddCart = (produto,price)=>{
        
        let lock=false;
        let posicao = 0;
        let preco = price  ;
        
        if(cart.length === 0){
            let object = {};
            object['nome'] = produto;
            
            object['qtdd'] = 1; 
            setQtdItems(1)
            object['preco'] = preco
            cart.push(object)
            setCart(cart)


        }
        else{
            cart.forEach((elemento,index)=>{

                if(elemento.nome === produto){
                    lock=true;
                    posicao = index;
                }
            });
            if(lock){
                cart[posicao].qtdd+=1;
                let somaitems = qtdItems
                somaitems+=1
                setQtdItems(somaitems)        
                cart[posicao].preco=parseFloat(preco) *parseInt(cart[posicao].qtdd).toFixed(2);
                setCart(cart);

            }
            else{
                let object = {};
                object['nome'] = produto;
                object['qtdd'] = 1; 
                object['preco'] = preco
                let somaitems = qtdItems
                somaitems+=1
                setQtdItems(somaitems) 

                cart.push(object)
                setCart(cart)


            }
    }        
    }
    const RemoveCart = (produto,preco)=>{
        let pos = 0;
        cart.forEach((element,index)=>{
            if(element.nome === produto){
                pos=index
            }
        })
        if(cart[pos].qtdd>1){
            cart[pos].qtdd-=1; 
            let somaitems = qtdItems
                somaitems-=1
                setQtdItems(somaitems)    
            cart[pos].preco=parseFloat(preco) *parseInt(cart[pos].qtdd).toFixed(2);
            setCart(cart);
        }

    }

    const DeleteItem = (produto)=>{
        let array = [];
         let somaitems = qtdItems
        cart.forEach((element,index)=>{
            if(element.nome===produto){
                somaitems-=element.qtdd
            }
            else{
                array.push(element)
            }            
        })              
        setQtdItems(somaitems);
        setCart(array);        
    }
    const DeleteAll = ()=>{
        setCart([]);
        setQtdItems(0)

    }


    return(
        <div key='allelements'>            
            <Router key='router' basename={process.env.PUBLIC_URL}>
                <NavBar qtdItems={qtdItems} setQtdItems={setQtdItems}    />
                <Switch>
                    <Route path='/games'>
                        <ListProducts addCart={AddCart}  key='listproducts' />

                   </Route>
                    <Route path='/cart'>
                        <Cart cart={cart} qtdItems={qtdItems} total={total} frete={frete} subTotal={subTotal}  setQtdItems={setQtdItems} setCart={setCart} AddCart={AddCart} RemoveCart={RemoveCart} DeleteItem={DeleteItem} DeleteAll={DeleteAll}/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>

                </Switch>
            </Router>


        </div>
        
    )
}

export default App;

