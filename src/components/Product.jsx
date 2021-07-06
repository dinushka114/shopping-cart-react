import React from "react";
import { Card , CardActionArea , CardMedia , CardContent , CardActions, Typography , Button ,ButtonGroup } from "@material-ui/core";

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
                    {desc.substring(0,100)}[...]
                </Typography>

            </CardContent>
                
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Buy
                </Button>

                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button color="primary" >+</Button>
                    <Button color="secondary">-</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}

export default Product;