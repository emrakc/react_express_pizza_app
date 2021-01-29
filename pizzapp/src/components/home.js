import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useHistory } from "react-router-dom";
import { Button, SubTitle, Price, Title } from './styledComponent'

const Home = (props) => {
    const [products, setProducts] = useState([])
    const history = useHistory();

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:5000/product/all')
            .then(response => {
                setProducts(response.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const RedirectProduct = (id) => {
        history.push(`product/${id}`)
    }

    const getList = () => {
        return products.map(item => {
            return <ProductSingleCard key={item.id} product={item} redirectAction={RedirectProduct} />
        })
    }

    return (
        <div className="container">
            <div className="row">
                {getList()}
            </div>
        </div>
    )
}

const ProductSingleCard = (props) => {  
   const getSize=(size)=>{
       switch(size){
        case 's':return 'Küçük'
        case 'm':return 'Orta'
        case 'l':return 'Büyük'
    }
   }

    const { name, ingredients, miniImage, size, price, id } = props.product;
    return (
        <div key={id} className="col-sm-6 col-md-3">
            <Card   >
                <img onClick={() => { props.redirectAction(id) }} style={{ width: '100%' }} src={miniImage} />
                <CardContent className="cardcontent">
                    <Title>{name}</Title>
                    <SubTitle>{getSize(size)}</SubTitle>
                    <SubTitle>{ingredients}</SubTitle>

                </CardContent>
                <CardActions disableSpacing>
                    <Button onClick={() => { props.redirectAction(id) }}>Ürüne Git</Button>
                    <Price>{`${price.toFixed(2)} TRY`}</Price>
                </CardActions>

            </Card>
        </div>
    )
}



export default Home