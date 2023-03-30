import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePages from './pages/HomePages'
import ProductPages from './pages/ProductPages'
import DetailProduct from './pages/DetailProduct'
import { getAll ,getOne ,remove ,addProduct ,updateProduct } from './api/products'
import AdminLayout from './layouts/AdminLayout'
import Dashboar from './pages/admin/Dashboar'
import AddProduct from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import AdminProduct from './pages/admin/AdminProduct'


function App() {
  interface IProduct {
    id: number,
    name: string,
    desc: string,
    image: string,
}

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAll().then(({ data }) => setProducts(data.products))
  }, [])

  console.log(products);

  
  const onHandleRemove = (id:number) => {
    const confrim = window.confirm('You want to remove ?');
    if (confrim) {
      console.log(id);
      
      remove(id).then(() => setProducts(products.filter(item => item.id !== id)))
    }
  }

  
  
  const onHandleAdd = (product:IProduct) => {
    console.log('app.js', product)
    addProduct(product)
    .then(() => setProducts([...products, { ...product, id: 1 }])
    )
    alert("Them moi thanh cong")
  }

  const onHandleUpdate = (newproduct:IProduct) => {
    console.log('app.js update', newproduct)
    
     updateProduct(newproduct).then(() => setProducts([...products]))
     alert("Them moi thanh cong")
     
  }




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
              <Route index element={<Dashboar />} />
              <Route path='products' element={<AdminProduct products={products} onRemove={onHandleRemove}    />} />
              <Route path='product'>
                <Route path='add' element={<AddProduct products={products} onAdd={onHandleAdd} />} />
                <Route path=':id/update' element={<UpdateProduct products={products}  onUpdate={onHandleUpdate} />} />
              </Route>
            </Route>

      </Routes>
    </div>
  )
}

export default App
