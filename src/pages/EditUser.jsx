import { useForm } from "react-hook-form";
import { databases } from "../lib/appwrite";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function EditUser() {

    const { register, handleSubmit, formState, setValue } = useForm()
    const { errors } = formState


    const { userId } = useParams()
    const dbId = "6805edca0008558e1e75"
    const userCollectionId = "6811f6c70001b82a585e"

    useEffect(() => {
        databases.getDocument(dbId, userCollectionId, userId)
            .then(response => {
                console.log("✅ user retrieved successfully:", response)

                setValue("userName", response.userName)
                setValue("userEmail", response.userEmail)
                setValue("userPassword", response.userPassword)
                setValue("role", response.role)
            })
            .catch(error => {
                console.log("user retrieval error: ", error)
            })
    }, [])

    function handleEdit(data) {

        const payload =
        {
            userName: data.userName,
            userEmail: data.userEmail,
            userPassword: data.userPassword,
            role: data.role
        }

        databases.updateDocument(dbId, userCollectionId, userId, payload)
            .then(response => {
                console.log("✅ users updated successfully:", response)
                alert("✅ users updated successfully ")
            })
            .catch(error => {
                console.log(error)
                alert("❌ action failed ")
            })
        console.log(data)
    }

    return (
        <div className="mt-10">
            <h1 className="text-4xl text-center text-black capitalize">edit user</h1>
            <div className="mt-8">
                <form action="" className="px-4 py-5 mx-auto bg-gray-100 shadow-xl w-fit rounded-xl" >
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Name</label>
                        <input type="text" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userName',
                            {
                                required: {
                                    value: true,
                                    message: "Name cannot be empty"
                                }
                            }
                        )} />
                        <p className="ml-1 text-red-700 border-red-700 rounded-md"> {errors.userName?.message} </p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userEmail',
                            {
                                required: {
                                    value: true,
                                    message: "Email cannot be empty"
                                }
                            }
                        )} />
                        <p className="ml-1 text-red-700 border-red-700 rounded-md"> {errors.userEmail?.message} </p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Password</label>
                        <input type="password" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userPassword',
                            {
                                required: {
                                    value: true,
                                    message: "Password cannot be empty"
                                }
                            }
                        )} />
                        <p className="ml-1 text-red-700 border-red-700 rounded-md"> {errors.userPassword?.message} </p>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="mb-1 ml-1">User Role</label>
                        <select name="" id="" className="w-full px-3 py-2 bg-white rounded-lg shadow-lg"  {...register('role')}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="mt-5 text-center">
                        <button className="px-3 py-1 text-white capitalize bg-green-700 rounded-md" onClick={handleSubmit(handleEdit)}>Edit User</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditUser;