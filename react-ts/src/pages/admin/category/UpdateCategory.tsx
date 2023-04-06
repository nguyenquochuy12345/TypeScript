import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { useForm, SubmitHandler } from 'react-hook-form';
import { getOneCategory, updateCategory } from '../../../api/category';
import { ICategory } from '../../../types/category';
import { Button, Form, Input } from 'antd';


interface IProps {
    categorys: ICategory[],
}



const UpdateCategory = ( props : IProps) => {

    // console.log(onUpdate);


    const { id } = useParams()

    const navigate = useNavigate();

    const [category, setCategory] = useState<ICategory>()
    useEffect(() => {
        getOneCategory(String(id)).then(({ data }) => setCategory(data))
    }, [props])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [category])

    const [form] = Form.useForm();

    const setFields = () => {
        form.setFieldsValue({
            _id: category?._id,
            name: category?.name,
        })
    }

    const onFinish = (values: any) => {
        updateCategory(values).then(() => setCategory(values));
        navigate('/admin/category');
    };




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
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your category name!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory