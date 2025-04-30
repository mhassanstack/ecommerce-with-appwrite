import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";

function UsersList() {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        const dbId = "6805edca0008558e1e75"
        const userCollectionId = "6811f6c70001b82a585e"

        databases.listDocuments(dbId, userCollectionId)
            .then(response => setAllUsers(response.documents))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="mt-10">
            <h1 className="mb-10 text-4xl text-center capitalize">User List</h1>
            <table className="w-[90%] mx-auto table-fixed bg-[#e9e9e970] px-3">
                <tr className="border-b border-gray-300">
                    <th className="w-[180px] py-3">Username</th>
                    <th className="w-[180px]">Email</th>
                    <th className="w-[180px]">Password</th>
                    <th className="w-[180px]">Role</th>
                </tr>
                {
                    allUsers.map(user => {
                        return (
                            <tr className="text-center border-b border-gray-300">
                                <td className="px-4 py-2">{user.userName}</td>
                                <td className="px-4 py-2">{user.userEmail}</td>
                                <td className="px-4 py-2">{user.userPassword}</td>
                                <td className="px-4 py-2">{user.role}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default UsersList;