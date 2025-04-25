import { useEffect, useState } from 'react';
import beautyProduct from '../assets/beauty-item-1.jpg'
import glasses from '../assets/glasses-item-1.jpg'
import miniCars from '../assets/mini-cars-3.jpg'
import ProductCard from '../components/ProductCard';
import { databases } from '../lib/appwrite';

function Home() {

    const [products, setProductData] = useState([])

    useEffect(() => {
        const dbID = "6805edca0008558e1e75"
        const collectionId = "680a0eee000e3697cb42"
        databases.listDocuments(dbID, collectionId)
            .then(
                (response) => {
                    return setProductData(response.documents)
                })
            .catch((error) => {
                console.log(error)
            })


    }, [])

    return (
        <>
            {/* Hero section */}
            <div className="h-[100vh] flex items-center justify-center bg-[#fcf9f4] mb-9">
                <h1 className="font-roboto font-medium 2xl:text-8xl lg:text-7xl text-5xl uppercase text-center">its time to shop now</h1>
            </div>

            {/* Category section */}
            <div>
                <div className="text-center">
                    <h2 className="2xl:text-4xl text-2xl text-gray-800 font-semibold mb-1 capitalize">browse the range</h2>
                    <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>

                <div className="grid grid-cols-3 gap-6 px-5 mt-7 font-roboto xl:text-2xl sm:text-lg text-sm">
                    <div>
                        <img src={beautyProduct} alt="" className='rounded-xl' />
                        <p className='text-center mt-3'>Beauty</p>
                    </div>
                    <div>
                        <img src={glasses} alt="" className='rounded-xl' />
                        <p className='text-center mt-3'>Glasses</p>
                    </div>
                    <div>
                        <img src={miniCars} alt="" className='rounded-xl' />
                        <p className='text-center mt-3'>Mini Cars</p>
                    </div>
                </div>
            </div>

            {/* products section */}
            <div className='mt-10'>
                <div>
                    <p className='2xl:text-4xl text-2xl text-gray-800 font-semibold capitalize mb-5 text-center'>buy our products</p>
                </div>
                <div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-7 px-7'>
                    {console.log("products:", products)}
                    {products.slice(0, 5).map((product, index) => {
                        return <ProductCard product={product} key={index} ></ProductCard>
                    })}
                </div>
            </div>

        </>

    );
}

export default Home;