import './App.css'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product' 
import ProductDetail from './pages/ProductDetail'
import ProductManagement from './pages/admin/ProductManagement'
import { delteProduct, getAllProduct, addProduct, updateProduct } from './api/product'
import ProductAdd from './pages/admin/ProductAdd'
import ProductUpdate from './pages/admin/ProductUpdate'




function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {

    getAllProduct().then(({ data }) => setProducts(data))

  }, [])

  

  const onHandleRemove = (id) => {
    const confrim = window.confirm('You want to remove ?');
    if (confrim) {
      delteProduct(id).then(() => setProducts(products.filter(item => item.id!== id)))
    }
  }

  
  const onHandleAdd = (product) => {
    console.log('app.js', product)
    addProduct(product)
    .then(() => setProducts([...products, { ...product, id: 1 }])
    )
    alert("Them moi thanh cong")
  }

  const onHandleUpdate = (newproduct) => {
    console.log('app.js update', newproduct)
     updateProduct(newproduct).then(() => setProducts([...products]))
     alert("Them moi thanh cong")
     
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products}  />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products' element={<ProductManagement products={products} onRemove={onHandleRemove}  onUpdate={onHandleUpdate}   />} />
        <Route path="/admin/product/add" element={<ProductAdd products={products} onAdd={onHandleAdd}  />} />
        <Route path='/admin/product/:id/update' element={<ProductUpdate  products={products}  onUpdate={onHandleUpdate}/>} />

      </Routes>

    </div>
  )
}

export default App