import instance from "./instance";

interface IProduct {
    id: number,
    name: string,
    price: number
}

export const getAll = () => {
    return instance.get("/products");
}

export const getOne = (id:number) => {
    return instance.get("/products/" + id);
}

export const remove = (id:number) => {
    return instance.delete("/products/"+ id);
}

export const addProduct = (newProduct:IProduct) => {
    return instance.post("/products",  newProduct);
}

export const updateProduct = (newProduct:IProduct) => {
    return instance.put("/products/" + newProduct.id,  newProduct);
}





