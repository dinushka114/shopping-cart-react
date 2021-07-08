import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
    return (

        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" >
                    My Shopping Cart
                </Typography>

                <div style={{ flexGrow: 1 }}>

                </div>


                <div>
                    <Link to="/checkout">
                        <IconButton style={{ color: "white" }}>
                            <Badge badgeContent={cartItems <= 0 ? `0` : cartItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Link>

                    <IconButton style={{ color: "white" }}>
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