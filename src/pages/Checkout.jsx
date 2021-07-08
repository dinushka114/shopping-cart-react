import React from "react";
import { Container, Paper, TableContainer, Table, TableHead, TableCell, TableBody, TableRow , Typography } from "@material-ui/core";

const Checkout = ({ cart }) => {
    return (
        <div style={{ marginTop: 140 }}>
            <Container maxWidth="lg">
                {
                    cart.length > 0 ? <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    Item
                                </TableCell>
                                <TableCell align="left">
                                    quantity
                                </TableCell>
                                <TableCell align="left">
                                    Price
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {
                                    cart.map((cartItem) => {
                                        return (

                                            <TableRow key={cartItem.id}>
                                                <TableCell align="left">
                                                    {cartItem.title}
                                                </TableCell>
                                                <TableCell align="left">
                                                    {2}
                                                </TableCell>
                                                <TableCell align="left">
                                                    {cartItem.price}
                                                </TableCell>
                                            </TableRow>

                                        )
                                    })

                                }
                            </>
                        </TableBody>
                    </Table>
                </TableContainer> : <Typography>Your cart is empty</Typography>
                }
            </Container>

        </div>
    )
}

export default Checkout;