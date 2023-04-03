import instance from "./instance";

interface IProduct {
    _id: number,
    name: string,
    image: string,
    desc: string
}

export const getAll = () => {
    return instance.get("/products");
}

export const getOne = (_id:string) => {
    return instance.get("/product/" + _id);
}

export const remove = (_id:number) => {
    return instance.delete("/product/"+ _id);
}

export const addProduct = (newProduct:IProduct) => {
    return instance.post("/products",  newProduct);
}

export const updateProduct = (newProduct:IProduct) => {
    return instance.patch("/product/" + newProduct._id,  newProduct);
}





