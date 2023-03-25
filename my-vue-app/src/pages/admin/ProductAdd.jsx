import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = ({ onAdd }) => {
    const [valueInput, setValueInput] = useState({});

    // console.log(onAdd);
    
    const navigate = useNavigate();
    const onHandleChange = (e) => {
        // e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setValueInput({ ...valueInput, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAdd(valueInput)
        // onAdd({
        //     name: value
        // });

        navigate('/admin/products')
    }
    
    return (      
        <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
            <div className="flex flex-wrap lg:justify-between -mx-4">
                <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                    <div className="max-w-[570px] mb-12 lg:mb-0">
                    <span className="block mb-4 text-base text-primary font-semibold">
                    Contact Us
                    </span>
                    <h2
                        className="
                        text-dark
                        mb-6
                        uppercase
                        font-bold
                        text-[32px]
                        sm:text-[40px]
                        lg:text-[36px]
                        xl:text-[40px]
                        "
                        >
                        GET IN TOUCH WITH US
                    </h2>
                    <p className="text-base text-body-color leading-relaxed mb-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        adiqua minim veniam quis nostrud exercitation ullamco
                    </p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                    <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                    <form onSubmit={onHandleSubmit}>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                onChange={onHandleChange} 
                                className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                />
                        </div>
            
                        <div className="mb-6">
                            <input
                                type="text"
                                name="image"
                                placeholder="Your Phone"
                                onChange={onHandleChange} 
                                className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                />
                        </div>
                        <div className="mb-6">
                            <textarea
                                rows="6"
                                name="desc"
                                onChange={onHandleChange} 
                                placeholder="Your Message"
                                className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border border-[f0f0f0]
                                resize-none
                                outline-none
                                focus-visible:shadow-none
                                focus:border-primary
                                "
                                ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="
                                w-full

                                bg-primary
                                rounded
                                border border-primary
                                p-3
                                transition
                                hover:bg-opacity-90
                                "
                                >
                            Send Message
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </section>

    )
}

export default ProductAdd