import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface IProduct {
    _id: number,
    name: string,
    desc: string,
    image: string,
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const AdminProduct = (props:IProps) => {



    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
      setData(props.products)
  
    }, [props.products])

      // console.log(data);
      

    const navigate = useNavigate();
    const onNavigate = (id:number) => {
      navigate(`/admin/product/${id}/update`)
    }

      // console.log(data[0]._id);
      
  
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
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
                  <tr key={item?._id} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="relative h-10 ">
                        <div className="font-medium text-gray-700">{item?.name}</div>
                      </div>
    
                    </th>
          
                    <td className="px-6 py-4">
                      
                      <img src={item?.image} alt="" /></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span>
                          {item?.desc}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                        >
                          <button onClick={() => props.onRemove(item?._id)}>Delete</button>
                        </span>
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                          <button onClick={() => onNavigate(item?._id)}>Update</button>
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

export default AdminProduct