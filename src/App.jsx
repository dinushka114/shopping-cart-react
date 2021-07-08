import axios from "axios";
import React from "react"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";


function App() {
    const [products, setProducts] = useState([])
    const [cart, changeCart] = useState([])
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [])

    const addToCart = (id) => {
        const selectedProduct = products.find((product) => product.id === id)
        changeCart([...cart, selectedProduct])
        // console.log(selectedProduct)

    }

    return (

        <Router>
            <Header cartItems={cart.length} />
            <Switch>
                <Route path="/" exact render={(props) => (<>
                    {isLoading ? <h1 style={{ marginTop: 100 }}>Loading</h1> : <ProductList addToCart={addToCart} products={products} />} </>
                )} />
                <Route path="/checkout">
                    <Checkout cart={cart} />
                </Route>
            </Switch>
        </Router>
    )

}

export default App;