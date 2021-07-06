import axios from "axios";
import React from "react"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";



function App() {
    const [products, setProducts] = useState([])
    const [cart , changeCart] = useState([])
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <div>

            <Header />
            {isLoading ? <h1 style={{ marginTop: 100 }}>Loading</h1> : <ProductList products={products} />}

        </div>
    )




}

export default App;