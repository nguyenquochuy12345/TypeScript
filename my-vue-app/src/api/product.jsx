import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products')
}
const getOneProduct = (id) => {
    return instance.get('/products/' + id)
}
const addProduct = (product) => {
    return instance.post('/products', product)
}

const updateProduct = (id, product) => {
    return instance.put('/products/' + id, product)
}


const delteProduct = (id) => {
    return instance.delete('/products/' + id)
}

export { getAllProduct, getOneProduct, delteProduct, addProduct, updateProduct}