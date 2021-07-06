import React from "react";
import { Grid , Container } from "@material-ui/core";
import Product from "./Product";

const ProductList=({products})=>{
    return (
        <div style={{marginTop:100}}>
            <Container maxWidth="lg">
            <Grid container spacing={3}>
                {
                    products.map((product)=> <Grid item xs={4}>  <Product key={product.id} title={product.title} desc={product.description} image={product.image} /> </Grid> )
                }
            </Grid>
            </Container>
        </div>
    )
}

export default ProductList;