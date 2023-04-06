import React, { useEffect, useState } from 'react'
import { Space, Table, Tag, Button, Form, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { removeCategory } from '../../../api/category';
import { getAllCategory } from '../../../api/category';
import { SearchOutlined } from '@ant-design/icons';

// import { Button, Form, Input } from 'antd';

interface DataType {
  _id: number;
  name: string;
}

interface ISearch {
  id: number;
  name: string;
}


const Category = () => {

  const [category, setCategorys] = useState<DataType[]>([])

  //  Xu ly search
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<DataType[] | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = category.filter(item =>
      item.name.toLowerCase().includes(term),
    );
    setSearchResults(results.length ? results : null);
  };



  useEffect(() => {
    getAllCategory().then(({ data }) => setCategorys(data.category))
  }, [])

  const remove = (id: number) => {
    const confirm = window.confirm('Are you sure you want to remove ?');

    if (confirm) {
      removeCategory(id).then(() => setCategorys(category.filter(item => item._id !== id)));
    }
  }

  const navigate = useNavigate();

  const navigateUpdate = (id: number) => {
    navigate(`/admin/category/${id}/update`);
  }





  const columns: ColumnsType<DataType> = [
    {
      title: 'Categori Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (

        <Space size="middle">
          <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => remove(record._id)}>Remove</Button>
          <Button type="primary" style={{ backgroundColor: 'blue' }} onClick={() => navigateUpdate(record._id)}>Update</Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = category.map(item => {
    return {
      key: item?._id,
      ...item
    }
  })

  
  const dataSearch: DataType[] = searchResults?.map(item => {
    return {
      key: item?._id,
      ...item
    }
  })

  // console.log(category);


  return (
    <div>

      <div>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        {searchResults ? (
          <Table columns={columns} dataSource={dataSearch} pagination={{ pageSize: 5 }} />
        ) : (

          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />

        )}
      </div>



    </div>

  )
}

export default Category