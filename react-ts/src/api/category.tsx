import instance from "./instance";

interface ICategory {
    _id: number,
    name: string,
}

export const getAllCategory = () => {
    return instance.get("/categorys");
}

export const getOneCategory = (_id:string) => {
    return instance.get("/category/" + _id);
}

export const removeCategory = (_id:number) => {
    return instance.delete("/category/"+ _id);
}

export const addCategory = (newCategory:ICategory) => {
    return instance.post("/category",  newCategory);
}

export const updateCategory = (newCategory:ICategory) => {
    return instance.patch("/category/" + newCategory._id,  newCategory);
}





