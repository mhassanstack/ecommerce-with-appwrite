import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { databases, ID, storage } from "../lib/appwrite";
function AddProduct() {
    const { register, control, handleSubmit, formState } = useForm({
        defaultValues: {
            availability: 'true'
        }
    })

    const { errors } = formState

    function onSubmit(data) {
        console.log(data)
        const dbID = "6805edca0008558e1e75"
        const collectionId = "680a0eee000e3697cb42"
        const bucketId = "6805f2c300394be56be2"

        const prodImg = data.prodImage[0]
        if (!prodImg) {
            alert("Please add a product image")
        }



        storage.createFile(bucketId, ID.unique(), prodImg)
            .then((uploadRes) => {

                const fileId = uploadRes.$id
                const imgUrl = storage.getFileView(bucketId, fileId)
                console.log("image url: ", imgUrl)

                const payload = {
                    name: data.prodName,
                    price: parseInt(data.prodPrice),
                    description: data.prodDescription,
                    availability: data.availability === 'true',
                    imageURL: imgUrl,
                    category: data.productCategory,
                }

                databases.createDocument(dbID, collectionId, ID.unique(), payload)
                    .then((res) => {
                        console.log("✅ Product added successfully:", res)
                        alert("Product added successfully")
                    })
                    .catch((error) => {
                        console.error("❌ Failed to add product:", error);
                        alert("Something went wrong. Check console for error.");
                    });
            })

    }

    return (
        <>
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-4xl text-center">Add Product</h1>
                <form action="" className="w-[400px] product-form">
                    <div className="my-5">
                        <label className="ml-2 text-lg" htmlFor="">Name</label>
                        <input className="w-full py-2 pl-3 mt-2 text-black bg-gray-200 rounded-xl" type="text" {...register("prodName", {
                            required: {
                                value: true,
                                message: "Enter Product Name"
                            }
                        })} />
                        <p className="mt-2 ml-2 text-red-600">{errors.prodName?.message}</p>
                    </div>
                    <div className="my-5">
                        <label className="ml-2 text-lg" htmlFor="">Price</label>
                        <input
                            className="w-full py-2 pl-3 mt-2 text-black bg-gray-200 rounded-xl"
                            type="number"
                            {...register("prodPrice", {
                                valueAsNumber: true, // Converts input to number automatically
                                validate: (value) => {
                                    console.log(value)
                                    // Check if the value is empty
                                    if (value === "" || value == null) {
                                        return "Enter Product Price";
                                    }

                                    // Check if it's a valid number (NaN is a valid check for invalid numbers)
                                    return !isNaN(value) || "Price must be a valid number";
                                }
                            })}
                        />

                        <p className="mt-2 ml-2 text-red-600">{errors.prodPrice?.message}</p>
                    </div>
                    <div className="my-5">
                        <label className="ml-2 text-lg" htmlFor="">Description</label>
                        <input className="w-full py-2 pl-3 mt-2 text-black bg-gray-200 rounded-xl" type="text" {...register("prodDescription", {
                            required: {
                                value: true,
                                message: "Enter Product Description"
                            }
                        })} />
                        <p className="mt-2 ml-2 text-red-600">{errors.prodDescription?.message}</p>
                    </div>
                    <div>
                        <select name="" id="" {...register("productCategory")}>
                            <option value="beauty">Beauty</option>
                            <option value="glasses">Glasses</option>
                            <option value="mini-cars">Mini-Cars</option>
                            <option value="shoe">Shoes</option>
                        </select>
                    </div>
                    <div>
                        <label className="ml-2 text-lg" htmlFor="">Available in Stock?</label>
                        <div className="flex gap-5 mt-3">
                            <div>
                                <input type="radio" name="availability" id="available-yes" value='true' {...register("availability")}
                                    className="hidden peer" />
                                <label htmlFor="available-yes" className='inline-block px-5 py-1 capitalize transition duration-200 border-2 border-green-600 rounded-full peer-checked:bg-green-600 peer-checked:text-white'>yes</label>
                            </div>
                            <div>
                                <input type="radio" name="availability" id="available-no" value='false' hidden {...register("availability")}
                                    className="hidden peer" />
                                <label htmlFor="available-no" className="inline-block px-5 py-1 capitalize transition duration-200 border-2 border-red-600 rounded-full peer-checked:bg-red-600 peer-checked:text-white">no</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <label className="ml-2 text-lg" htmlFor="product-image">Product Image</label>
                        <input
                            id="product-image"
                            type="file"
                            accept="image/*"
                            {...register("prodImage", { required: "Product Image is required" })}
                            className="mt-2"
                        />
                        <p className="mt-2 ml-2 text-red-600">{errors.prodImage?.message}</p>
                    </div>
                    <div className="text-center mt-7">
                        <button className="px-5 py-2 text-xl text-white bg-green-800 rounded-full" onClick={handleSubmit(onSubmit)}>Add Product</button>
                    </div>
                </form>
                <DevTool control={control}></DevTool>
            </div>
        </>
    );
}

export default AddProduct;