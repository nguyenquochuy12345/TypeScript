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
  // const [count, setCount] = useState(0)
  // function handleClick() {
  //   setCount(count + 1)
  // }
  const [products, setProducts] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    getAllProduct().then(({ data }) => setProducts(data))

  }, [])

  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //   method: 'DELETE'
    // }).then(() => setProducts(products.filter(item => item.id !== id)))
    delteProduct(id).then(() => setProducts(products.filter(item => item.id !== id)))
  }

  
  const onHandleAdd = (product) => {
    console.log('app.js', product)
    addProduct(product).then(() => setProducts([...products, { ...product, id: 1 }]))

    // setProducts([...products, { ...product, id: 1 }])
  }

  const onHandleUpdate = (newproduct) => {
    console.log('app.js update', newproduct)
     updateProduct(newproduct).then(() => setProducts([...products]))
  }


  return (
    <div className="App">
      
        {/* 
        / - Home Page
        /products - Product Page
        /products/:id  - Product Detail Page
      */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products}  />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        {/* <Route path='/products/:id' element={<ProductManagement products={products}  />} /> */}
        <Route path='/admin/products' element={<ProductManagement products={products}  />} />
        <Route path="/admin/product/add" element={<ProductAdd products={products} onAdd={onHandleAdd}  />} />
        <Route path='/admin/product/:id/update' element={<ProductUpdate  products={products}  onUpdate={onHandleUpdate}/>} />

      </Routes>

    </div>
  )
}

export default App