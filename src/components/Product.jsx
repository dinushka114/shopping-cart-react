import React from "react";
import { Card , CardActionArea , CardMedia , CardContent , Typography } from "@material-ui/core";

const Product=({image , title , desc})=>{
    return (
        <Card>
            <CardActionArea>
                <CardMedia 
                component="img"
                image={image}
                height="200"
                />

            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>

                <Typography>
                    {desc}
                </Typography>

            </CardContent>
                
            </CardActionArea>
        </Card>
    )
}

export default Product;