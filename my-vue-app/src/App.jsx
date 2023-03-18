import './App.css'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product' 
import ProductDetail from './pages/ProductDetail'


function App() {
  // const [count, setCount] = useState(0)
  // function handleClick() {
  //   setCount(count + 1)
  // }
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])



  // function remove (id){
  //   fetch(`http://localhost:3000/products/${id}`,{
  //     method: 'DELETE',
  //   }).then(() => setProducts(products.filter(item => item.id !== id)));
    
  // }



  // console.log(document.querySelectorAll('.remove'));


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
        <Route path='/products/:id' element={<ProductDetail products={products}  />} />
      </Routes>

    </div>
  )
}

export default App