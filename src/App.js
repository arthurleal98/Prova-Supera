import { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./cart/Cart.js";
import Home from "./home/home.js";
import NavBar from "./navbar/navbar.js";
import ListProducts from "./products/store";
const App = ()=>{
    const [qtdItems, setQtdItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0.00);
    const [cart,setCart] = useState([]);
    const [labelCart, setLabelCart] = useState('vazio');

    const produtsInCart = ()=>{
        let cont = 0;       

        if(cart.length === 0){
            setLabelCart('vazio')
        }
        else{
            cart.forEach((produto)=>{
                cont+=produto.qtdd
             })
             if(cart.length === 1){
                setLabelCart('produto')
            }
            else{
                setLabelCart('produtos')
            }
        }
        setQtdItems(cont);
        
    }
    const AddCart = (produto,preco)=>{
        console.log(produto)
        let lock=false;
        let posicao = 0;

        if(cart.length === 0){
            let object = {};
            object['nome'] = produto;
            object['qtdd'] = 1; 
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
                cart[posicao].preco=parseFloat(cart[posicao].preco)*parseInt(cart[posicao].qtdd).toFixed(2);
                setCart(cart);
            }
            else{
                let object = {};
                object['nome'] = produto;
                object['qtdd'] = 1; 
                object['preco'] = preco

                cart.push(object)
                setCart(cart)

            }



        };
        produtsInCart();    
        console.log(cart);


        
    }

    return(
        <div key='allelements'>            
            <Router key='router'>
                <NavBar qtdItems={qtdItems} setQtdItems={setQtdItems}  labelCart={labelCart}   />
                <Switch>
                    <Route path='/games'>
                        <ListProducts addCart={AddCart}  key='listproducts' />

                   </Route>
                    <Route path='/cart'>
                        <Cart cart={cart} removeCart={1}/>
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

