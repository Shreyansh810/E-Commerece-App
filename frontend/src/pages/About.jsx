import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'About'} text2={'Us'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>
                        Welcome to ShopSphere — your all-in-one shopping destination!
                        At ShopSphere, we’re reimagining the way you shop online. Our goal is simple: to make shopping easy, exciting, and tailored just for you. From the latest trends to daily essentials, we bring everything you need under one digital roof — curated with care and delivered with speed.
                        We believe in quality, convenience, and customer-first service. Whether you're hunting for fashion, gadgets, or lifestyle products, ShopSpher offers a seamless experience with secure checkout, fast shipping, and real-time order tracking.
                        But we’re more than just a marketplace — we’re a community.
                    </p>
                    <p>
                        A space where your preferences matter, your feedback is heard, and your satisfaction drives everything we do.
                        Thanks for being a part of the ShopSpher journey. Your next great find is just a click away!
                    </p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>
                        At ShopSphere, our mission is to create a seamless and personalized online shopping experience that brings quality, variety, and convenience to your fingertips. We aim to connect people with products they love, while delivering trust, speed, and satisfaction in every order.
                    </p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'Why'} text2={'Choose Us'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>
                        At ShopSphere, we’re committed to delivering only the best. Every product on our platform goes through strict quality checks to ensure it meets our high standards. From sourcing to packaging, we focus on reliability, durability, and customer satisfaction — so you can shop with complete confidence.
                    </p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>
                        Shopping made simple — that’s our promise. With an easy-to-use interface, quick search, smooth checkout, and fast delivery, ShopSpher puts everything you need just a tap away. Whether you're at home or on the go, we make shopping effortless and enjoyable.
                    </p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>
                        Your satisfaction is our priority. At ShopSpher, we’re here for you — before, during, and after your purchase. Our friendly support team is always ready to help with quick responses, easy returns, and real solutions. Because great service isn’t extra — it’s expected.
                    </p>
                </div>
            </div>

            <NewsLetterBox />

        </div>
    )
}

export default About
