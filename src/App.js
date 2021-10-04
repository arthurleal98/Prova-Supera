import { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navBar/navBar";
import ListProducts from "./products/store";
const App = ()=>{
    const [qtdItems, setQtdItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0.00);
    return(
        <div>            
            <Router>
                <NavBar qtdItems={qtdItems} setQtdItems={setQtdItems} subTotal={subTotal} setSubTotal={setSubTotal}/>
                <Switch>
                    <Route path='/games'>
                    </Route>
                    <Route path='/cart'>

                    </Route>
                    <Route path='/'>
                        <ListProducts/>

                    </Route>

                </Switch>
            </Router>


        </div>
        
    )
}

export default App;

