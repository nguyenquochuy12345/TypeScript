import React, {useEffect ,useState} from 'react'


const ProductPage = (props) => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id) {
        // console.log(id);
        fetch('http://localhost:3000/products/' + id, {
            method: 'DELETE'
        }).then(() => setData(data.filter(item => item.id !== id)))
    }
    
    // console.log(data);
    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage


