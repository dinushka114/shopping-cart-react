import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Header = () => {
    return (

        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" >
                    My Shopping Cart
                </Typography>

                <div style={{ flexGrow: 1 }}>

                </div>


                <div>
                    <IconButton style={{ color: "white" }}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    <IconButton style={{color:"white"}}>
                        <Badge badgeContent={4} color="secondary">
                            <MonetizationOnIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>





        </AppBar>

    )
}

export default Header;