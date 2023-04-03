import instance from "./instance";
interface Iuser {
    name: string,
    email: string,
    password: string,
    rePassword: string
}

export const sign_up = (user:Iuser) => {
    instance.post('/signup', user);
}

export const sign_in = (user:Iuser) => {
    instance.post('/signin', user);
}