import { useForm } from "react-hook-form";

function Signup() {

    const { register, handleSubmit } = useForm()

    function handleSignup(data) {
        console.log(data)
    }

    return (
        <div className="mt-10">
            <h1 className="text-4xl text-center text-black capitalize">Signup</h1>
            <div className="mt-8">
                <form action="" className="px-4 py-5 mx-auto bg-gray-100 shadow-xl w-fit rounded-xl" >
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Name</label>
                        <input type="email" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userName')} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userEmail')} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="mb-1 ml-1">Password</label>
                        <input type="password" className="w-full px-3 py-2 rounded-lg shadow-lg" {...register('userPassword')} />
                    </div>
                    <div className="mt-5 text-center">
                        <button className="px-3 py-1 text-white capitalize bg-green-700 rounded-md" onClick={handleSubmit(handleSignup)}>Signup</button>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default Signup;