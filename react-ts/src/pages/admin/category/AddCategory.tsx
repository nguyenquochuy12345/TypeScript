import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
// import { IProduct } from '../../../types/products';
import { addCategory } from '../../../api/category';
import { PoweroffOutlined } from '@ant-design/icons';


const AddCategory = () => {


    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        addCategory(values);

        navigate('/admin/category');
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
        alert(`Failed: ${errorInfo}`);
    };

    return (
        <div>
            

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategory