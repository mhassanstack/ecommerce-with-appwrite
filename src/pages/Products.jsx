import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import ProductCard from "../components/ProductCard";
function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const dbID = "6805edca0008558e1e75"
        const collectionId = "680a0eee000e3697cb42"

        databases.listDocuments(dbID, collectionId)
            .then((response) => {
                console.log("response: ", response)
                setProducts(response.documents)
            })

    }, [])


    return (
        <>
            <div className="grid grid-cols-5 gap-6 px-5">
                {products.map((product, index) => {
                    return <ProductCard product={product} key={index}></ProductCard>
                })}
            </div>
        </>
    );
}

export default Products;