import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { databases, ID, storage } from "../lib/appwrite";
function ProductForm() {
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
            <div className="mt-20 flex flex-col items-center">
                <h1 className="text-center text-4xl">Add Product</h1>
                <form action="" className="w-[400px] product-form">
                    <div className="my-5">
                        <label className="text-lg ml-2" htmlFor="">Name</label>
                        <input className="w-full bg-gray-200 text-black rounded-xl py-2 pl-3 mt-2" type="text" {...register("prodName", {
                            required: {
                                value: true,
                                message: "Enter Product Name"
                            }
                        })} />
                        <p className="text-red-600 ml-2 mt-2">{errors.prodName?.message}</p>
                    </div>
                    <div className="my-5">
                        <label className="text-lg ml-2" htmlFor="">Price</label>
                        <input
                            className="w-full bg-gray-200 text-black rounded-xl py-2 pl-3 mt-2"
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

                        <p className="text-red-600 ml-2 mt-2">{errors.prodPrice?.message}</p>
                    </div>
                    <div className="my-5">
                        <label className="text-lg ml-2" htmlFor="">Description</label>
                        <input className="w-full bg-gray-200 text-black rounded-xl py-2 pl-3 mt-2" type="text" {...register("prodDescription", {
                            required: {
                                value: true,
                                message: "Enter Product Description"
                            }
                        })} />
                        <p className="text-red-600 ml-2 mt-2">{errors.prodDescription?.message}</p>
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
                        <label className="text-lg ml-2" htmlFor="">Available in Stock?</label>
                        <div className="flex gap-5 mt-3">
                            <div>
                                <input type="radio" name="availability" id="available-yes" value='true' {...register("availability")}
                                    className="peer hidden" />
                                <label htmlFor="available-yes" className='border-2 border-green-600 transition duration-200 px-5 py-1 rounded-full capitalize peer-checked:bg-green-600 peer-checked:text-white inline-block'>yes</label>
                            </div>
                            <div>
                                <input type="radio" name="availability" id="available-no" value='false' hidden {...register("availability")}
                                    className="peer hidden" />
                                <label htmlFor="available-no" className="border-2 border-red-600 transition duration-200 px-5 py-1 rounded-full capitalize peer-checked:bg-red-600 peer-checked:text-white inline-block">no</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <label className="text-lg ml-2" htmlFor="product-image">Product Image</label>
                        <input
                            id="product-image"
                            type="file"
                            accept="image/*"
                            {...register("prodImage", { required: "Product Image is required" })}
                            className="mt-2"
                        />
                        <p className="text-red-600 ml-2 mt-2">{errors.prodImage?.message}</p>
                    </div>
                    <div className="mt-7 text-center">
                        <button className="text-white text-xl px-5 py-2 bg-green-800 rounded-full" onClick={handleSubmit(onSubmit)}>Add Product</button>
                    </div>
                </form>
                <DevTool control={control}></DevTool>
            </div>
        </>
    );
}

export default ProductForm;