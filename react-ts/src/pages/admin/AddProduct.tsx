import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { IProduct } from '../../types/products';

interface IProps {
    onAdd: (newProduct: IProduct) => void;
}
const AddProduct = (props: IProps) => {


    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);        
        props.onAdd(values);
        navigate('/admin');
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

                <Form.Item
                    label="Product Name"
                    name="price"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Please input your desc!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProduct