import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { Link } from "react-router";
import Loader from "../components/Loader";

function UsersList() {

    const [allUsers, setAllUsers] = useState([])
    const dbId = "6805edca0008558e1e75"
    const userCollectionId = "6811f6c70001b82a585e"
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        databases.listDocuments(dbId, userCollectionId)
            .then(response => {
                setAllUsers(response.documents)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    function handleDelete(userId) {
        console.log("clicked delete")
        databases.deleteDocument(dbId, userCollectionId, userId)
            .then(response => {
                alert("✅user deleted successfully")
                console.log(response)
                setAllUsers(prevUsers => prevUsers.filter(user => user.$id !== userId))
            })
            .catch(error => alert(error))
        console.log("clicked delete")
    }

    return loading ? <Loader></Loader> : (

        <div className="mt-10">
            <h1 className="mb-10 text-4xl text-center capitalize">User List</h1>
            <table className="w-[90%] mx-auto table-fixed bg-[#e9e9e970] px-3">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="w-[180px] py-3">Username</th>
                        <th className="w-[180px]">Email</th>
                        <th className="w-[180px]">Password</th>
                        <th className="w-[180px]">Role</th>
                        <th className="w-[180px]"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allUsers.map((user, index) => {
                            return (
                                <tr className="text-center border-b border-gray-300" key={index}>
                                    <td className="px-4 py-2">{user.userName}</td>
                                    <td className="px-4 py-2">{user.userEmail}</td>
                                    <td className="px-4 py-2">{user.userPassword}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="flex gap-3 px-4 py-2">
                                        <Link to={`/edit-user/${user.$id}`}>
                                            <button className="px-3 py-1 text-white bg-blue-800 rounded-lg">Edit</button>
                                        </Link>
                                        <button className="px-3 py-1 text-white bg-red-700 rounded-lg" onClick={() => handleDelete(user.$id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div >
    );
}

export default UsersList;