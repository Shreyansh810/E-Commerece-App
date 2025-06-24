import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(shopContext);
    const [latestProducts, setLatestProducts] = useState([]);


    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products])


    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'Latest'} text2={'Collections'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Step into style with our newest arrivals! From trendy fashion picks to must-have essentials, our latest collection brings you the best of the season. Curated with care and crafted for comfort, explore what’s new and elevate your everyday look with ShopSphere.
                </p>
            </div>

            {/*Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
