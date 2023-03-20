import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products')
}
const getOneProduct = (id) => {
    return instance.get('/products/' + id)
}
const delteProduct = (id) => {
    return instance.delete('/products/' + id)
}

export { getAllProduct, getOneProduct, delteProduct }