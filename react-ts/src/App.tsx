import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePages from './pages/HomePages'
import ProductPages from './pages/ProductPages'
import DetailProduct from './pages/DetailProduct'
import { getAll, remove, addProduct, updateProduct } from './api/products'
import AdminLayout from './layouts/AdminLayout'
import AddProduct from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import AdminProduct from './pages/admin/AdminProduct'
import ProductManagement from './pages/admin/ProductManagement'
import Sign_in from './pages/user/Sign_in'
import Sign_up from './pages/user/Sign_up'
import Dashboar from './pages/admin/Dashboar'

// import page category

import Category from './pages/admin/category/Category';
import AddCategory from './pages/admin/category/AddCategory';
import UpdateCategory from './pages/admin/category/UpdateCategory';
import { getAllCategory, removeCategory, addCategory, updateCategory } from './api/category'

// import Type

import { ICategory } from './types/category'





function App() {
  interface IProduct {
    _id: number,
    name: string,
    desc: string,
    image: string,
  }

  // -----------------> Xu ly product <-----------------------

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAll().then(({ data }) => setProducts(data.products))
  }, [])


  const onHandleAdd = (product: IProduct) => {
    console.log('app.js', product)
    addProduct(product)
      .then(() => setProducts([...products, { ...product }])
      )
    alert("Them moi thanh cong")
  }

  

  // -----------------> Xu ly category <-----------------------

  const [categorys ,setCategory] = useState<ICategory[]>([])

  useEffect(() => {
    getAllCategory().then(({data}) => setCategory(data.category))
  },[])

  

  return (
    <div className="App">
      <Routes>

        {/* Website */}
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePages />} />
          <Route path='products'>
            <Route index element={<ProductPages />} />
            <Route path=':id' element={<DetailProduct />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dash' element={<Dashboar />} />


          <Route index element={<ProductManagement />} />

          {/* <Route path='products' element={<AdminProduct products={products} onRemove={onHandleRemove} />} /> */}
          <Route path='product'>
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct products={products}  />} />
          </Route>

          {/* Route Category */}

          <Route path='category'>
            <Route index element={<Category/>} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/update' element={<UpdateCategory categorys={categorys} />} />
          </Route>

        </Route>

        {/* Sign-up / Sign-in */}
        <Route path='/acount' >
          <Route index element={<Sign_in />} />
          <Route path='sign_up' element={<Sign_up />} />
        </Route>



      </Routes>
    </div>
  )
}

export default App
