import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';

function ProductPage() {

    const [productData, setProductData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const dbID = "6805edca0008558e1e75"
        const collectionId = "680a0eee000e3697cb42"
        databases.getDocument(dbID, collectionId, id)
            .then((response) => setProductData(response))
            .catch((error) => {
                alert(error)
            })
    }, [])

    return (
        <div className="grid grid-cols-12 gap-x-5 items-center w-[1300px] mx-auto">
            <div className='col-span-5'>
                <img src={productData.imageURL} alt="" />
            </div>
            <div className='col-span-7'>
                <p>{productData.name}</p>
                <p>${productData.price}</p>
                <p>{productData.description}</p>
                <p>{productData.availibility}</p>
            </div>
            {console.log("productData", productData)}
        </div>
    );
}

export default ProductPage;