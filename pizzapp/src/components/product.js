import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, SubTitle, Price, Title } from './styledComponent'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const ProductDetail = ({ match, addToCart, history }) => {
    const { productId } = match.params;
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(`http://localhost:5000/product/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const getSize = (size) => {
        switch (size) {
            case 's': return 'Küçük'
            case 'm': return 'Orta'
            case 'l': return 'Büyük'
        }
    }
    const { id, name, ingredients, price, size, image, miniImage } = product;
    return (
        <div class="col-sm-12">
            <Card >
                <img style={{ width: '100%' }} src={image} />
                <CardContent>
                    <Title>{name} {getSize(size)}</Title>
                    <SubTitle>{ingredients}</SubTitle>
                    <Price>{price} {"TRY"}</Price>
                </CardContent>
                <CardActions >
                    <IconButton onClick={() => { setCount(count+1) }}>
                        <ExpandLessIcon />
                    </IconButton> <Price>{`${count} adet`}</Price>
                    <IconButton disabled={count === 1} onClick={() => { setCount(count-1) }}>
                        <ExpandMoreIcon />
                    </IconButton>
                    <Button onClick={() => { addToCart({ id, name, size, miniImage, price, count }) }}>SEPETE EKLE</Button>
                    <Button onClick={() => { history.push('/') }}>ÜRÜNLER</Button>
                </CardActions>

            </Card>
        </div>

    )
}

export default connect(
    null,
    {
        addToCart
    }
)(ProductDetail);
