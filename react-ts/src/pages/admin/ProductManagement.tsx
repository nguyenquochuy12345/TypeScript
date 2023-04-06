import React, { useEffect, useState } from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/products';
import { useNavigate } from 'react-router-dom';
import { getAll, remove } from '../../api/products';
interface DataType {
  _id: number;
  name: string;
  image: string;
  desc: string;
}




const ProductManagement = () => {

  const [product , setProduct] = useState<IProduct[]>([])

  useEffect(() => {
      getAll().then(({data}) => setProduct(data.products))
  },[])

  
  // console.log(props);
    const removeProduct = (id: number) => {
      const confirm = window.confirm('Are you sure you want to remove? ')
      if(confirm){
        remove(id).then(() => setProduct(product.filter(item => item._id !== id)));
      }
    }
    const navigate = useNavigate();

    const updedateProduct = (id: number) => {
      navigate(`/admin/product/${id}/update`);
    }

    



  const columns: ColumnsType<DataType> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product Img',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        // <Space>
            <img src={image} alt="" />
        // </Space>
      )
    },
    {
      title: 'Product Desc',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (

        <Space size="middle">
          <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record?._id)}>Remove</Button>
          <Button type="primary" style={{ backgroundColor: 'blue' }} onClick={() => updedateProduct(record?._id)}>Update</Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = product.map(item => {
    return {
      key: item?._id,
      ...item
    }
  })


  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />

}

export default ProductManagement