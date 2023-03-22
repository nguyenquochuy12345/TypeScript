import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
// import { updateProduct} from '../../api/product'
const ProductUpdate = ({products , onUpdate}) => {

    // console.log(onUpdate);
    

    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const product = products.find(item => item.id == id)
        setProduct(product)
    })

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const updateData = { ...product, ...inputValue }
        // onUpdate(updateData);
        /*
            id, name, prive
            id, name, price
        */
        console.log(updateData);
        onUpdate(updateData);
        // updateProduct(updateData).then(() => setProducts)
        navigate('/admin/products');
    }   


    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
                <button type="submit">Update</button>
            </form>
        </div>)
}

export default ProductUpdate