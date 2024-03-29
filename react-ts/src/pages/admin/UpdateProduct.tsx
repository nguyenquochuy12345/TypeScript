import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { useForm, SubmitHandler } from 'react-hook-form';
import { getOne, updateProduct } from '../../api/products';
import { IProduct } from '../../types/products';
import { Button, Form, Input } from 'antd';

interface IProps {
    products: IProduct[],
}



const UpdateProduct = ( props : IProps) => {

    // console.log(onUpdate);


    const { id } = useParams()

    const navigate = useNavigate();

    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        // const productupdate = props.products.find(item => item._id === Number(id))
        getOne(String(id)).then(({ data }) => setProduct(data))
        // setProduct(productupdate)
        // const product = products.find(item => item.id ===)
    }, [props])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [product])

    const [form] = Form.useForm();

    const setFields = () => {
        form.setFieldsValue({
            _id: product?._id,
            name: product?.name,
            image: product?.image,
            desc: product?.desc
        })
    }

    const onFinish = (values: any) => {
        updateProduct(values).then(() => setProduct(values));
        navigate('/admin')
        alert("Update thành công !")
    };



    // console.log(product);

    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'ID!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
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
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct