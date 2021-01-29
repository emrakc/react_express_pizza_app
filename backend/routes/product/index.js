const router = require('express').Router();
let Product = require('../../models/product.model');
const { getCache, setCache } = require('../../middleware/cache'); 

router.route('/all').get(async (req, res) => {
    let data = await getCache("products");
    if (data) {
        res.json(data)
    }
    else
        Product.find({}, ["name", "miniImage", "ingredients", "price","size"])
            .then(products => {
                setCache("products", products);
                res.json(products)
            })
            .catch(err => res.status(400).json('err:' + err))
})

router.route('/:id').get(async (req, res) => { 
    let data = await getCache(`product-${req.params.id}`); 
    if (data) {
        res.json(data)
    }
    else
        Product.findById(req.params.id)
            .then(product => { 
                 setCache(`product-${req.params.id}`,product); 
                res.json(product)
            })
            .catch(err => res.status(400).json('err:' + err))
}) 
module.exports = router;