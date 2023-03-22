import React, { useEffect, useState } from 'react'


const ProductManagement = (props) => {

  const [data, setData] = useState([])
  useEffect(() => {
    setData(props.products)

  }, [props])

  // console.log(data);
  function removeProduct(id) {
    // console.log(id);
    fetch('http://localhost:3000/products/' + id, {
        method: 'DELETE'
    }).then(() => setData(data.filter(item => item.id !== id)))
}

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Img</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              <a href="/admin/product/add">ADD Product</a>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">

          {data.map(item => {
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 ">
                    <div className="font-medium text-gray-700">{item.name}</div>
                  </div>

                </th>
                <td className="px-6 py-4">
                  <span
                    className="inline-flex items-center gap-1 rounded-full  px-2 py-1 text-xs font-semibold text-green-600"
                  >
                    {item.price}
                  </span>
                </td>
                <td className="px-6 py-4">
                  
                  {item.imge}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span>
                      {item.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                    >
                      <button><a href="/admin/product/add">Delete</a></button>
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                      <button><a href=""></a></button>
                    </span>
                  </div>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManagement