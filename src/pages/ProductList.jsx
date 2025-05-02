import { useState, useEffect } from "react"
import { databases } from "../lib/appwrite";
import { Link } from "react-router";

function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const dbID = "6805edca0008558e1e75"
        const collectionId = "680a0eee000e3697cb42"

        databases.listDocuments(dbID, collectionId)
            .then((response) => {
                setProducts(response.documents)
            })

    }, [])

    return (
        <div className="my-10">

            <h1 className="mb-10 text-4xl text-center capitalize">product list</h1>
            <table className="w-[90%] mx-auto table-fixed bg-[#e9e9e970] px-3">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="w-[180px] py-3">image</th>
                        <th className="w-[180px]">name</th>
                        <th className="w-[180px]">price</th>
                        <th className="w-[180px]">description</th>
                        <th className="w-[180px]">availability</th>
                        {/* <th className="w-[180px]">imageURL</th> */}
                        <th className="w-[180px]">category</th>
                        <th className="w-[180px]">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr className="text-center border-b border-gray-300" key={index}>
                                    <td className="flex justify-center py-2">
                                        <img src={product.imageURL} className="w-[100px]" alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td className="truncate">{product.description}</td>
                                    <td>{product.availability ? "✅" : "❌"}</td>
                                    {/* <td>{product.imageURL}</td> */}
                                    <td>{product.category}</td>
                                    <td>
                                        <div className="flex justify-center gap-3">
                                            <Link to={`/edit-product/${product.$id}`}>
                                                <button className="px-3 py-1 text-white bg-blue-800 rounded-lg">Edit</button>
                                            </Link>
                                            <button className="px-3 py-1 text-white bg-red-700 rounded-lg">Delete</button>
                                        </div>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>

    );
}

export default ProductList;