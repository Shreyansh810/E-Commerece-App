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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum at quos vel maiores reprehenderit obcaecati voluptate quibusdam modi quo optio doloremque quis accusamus, est veritatis cum accusantium. Consectetur in dicta fugiat officiis sint expedita reprehenderit amet quasi quis laudantium!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, architecto!</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum, nam fugit, expedita cumque, quo ipsam minima similique provident repellendus repudiandae nesciunt aperiam voluptatem quaerat?</p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'Why'} text2={'Choose Us'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minima at, distinctio assumenda sunt omnis dicta dolore ullam eligendi vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex ipsam veritatis inventore velit? Modi doloribus nisi mollitia? Sequi, voluptate!</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minima at, distinctio assumenda sunt omnis dicta dolore ullam eligendi vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex ipsam veritatis inventore velit? Modi doloribus nisi mollitia? Sequi, voluptate!</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 felx-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur minima at, distinctio assumenda sunt omnis dicta dolore ullam eligendi vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex ipsam veritatis inventore velit? Modi doloribus nisi mollitia? Sequi, voluptate!</p>
                </div>
            </div>

            <NewsLetterBox />

        </div>
    )
}

export default About
