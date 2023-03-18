import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {

    const id = useParams();
    // console.log(useParams());

    const [product, setProduct] = useState({});

    // return

    // console.log(id.id);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id.id}`)
          .then(response => response.json())
          .then(data => setProduct(data))
          
      },[])

    //   console.log(product);
    
      

  return (
    <div>
        <h1>{product.name}</h1>
   
    </div>
  )
}

export default ProductDetail