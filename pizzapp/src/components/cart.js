

import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { toggleDrawer } from "../actions/cartActions";
import Drawer from '@material-ui/core/Drawer';
import { removeFromCart } from "../actions/cartActions";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        right: 20,
        height: "auto",
        top: 80,
        minWidth: 300,
        borderRadius: "20px",
        padding: 20, 
      
    },
});

const StyledDrawer = styled(Drawer)` 
  .MuiDrawer-paper {  
    ${({ theme }) => { 
        const classes = styles(theme);
        return classes.drawer;
    }}  
  }
`;


const Cart = (props) => {
    const { openDrawer, cartItems, toggleDrawer, removeFromCart } = props;
    const total = cartItems.reduce((total, item) => { return (item.count * item.price) + total }, 0);

    return (
        <StyledDrawer
            BackdropProps={{ invisible:true }}
          
            variant="persistent"
            anchor="right"
            elevation={3}
            open={openDrawer} onClose={() => { toggleDrawer() }}
        >
            <p>Sepet</p>
            {
                <List className="drawerList"  >
                    {
                        cartItems.length > 0 ?
                            cartItems.map((item) => {
                                return <CartList removeFromCart={removeFromCart} cartItem={item} />
                            })
                            : <p>Sepetiniz boş</p>
                    }
                </List>
            }
            <p>Genel Toplam : {total.toFixed(2)}  </p>
        </StyledDrawer>
    )
}



export default connect((state) => ({
    openDrawer: state.cart.openDrawer,
    cartItems: state.cart.cartItems,
}),
    { toggleDrawer, removeFromCart }
)(Cart);


const CartList = ({ cartItem, removeFromCart }) => { 
    return (
        <ListItem key={cartItem.id}>
            <ListItemAvatar>
                <img width={40} height={40} src={cartItem.miniImage} />
            </ListItemAvatar>
            <ListItemText
                primary={`${cartItem.name} , size: ${cartItem.size} `}
                secondary={`${cartItem.count} adet x  ${cartItem.price}  toplam: ${(cartItem.count * cartItem.price).toFixed(2)} TRY`}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => { removeFromCart(cartItem.id, cartItem.size) }}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>)

}

