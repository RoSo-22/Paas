import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const manager = () => {
    const ref = useRef()
    const passwordref = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    const showpaasword = () => {
        passwordref.current.type = "text"
        // alert("show the paasword")
        console.log("ref.current.src")
        if (ref.current.src.includes("https://cdn0.iconfinder.com/data/icons/things-ui/24/eye-cross-1024.png")) {
            ref.current.src = "https://static.vecteezy.com/system/resources/previews/000/553/148/original/eye-vector-icon.jpg"
            passwordref.current.type = "text"
        }
        else {
            ref.current.src = "https://cdn0.iconfinder.com/data/icons/things-ui/24/eye-cross-1024.png"
            passwordref.current.type = "password"
        }
    }

    const handlsave = () => {

        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log(passwordArray)
        setform({ site: "", username: "", password: "" })
    }
    const deletepassword = (id) => {
        let c = confirm("do you want delete this password")
        if (c) {

            console.log("deleting password with id ", id)
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            console.log(passwordArray)
        }
    }
    const editpassword = (id) => {
        console.log("editing password with id ", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
        // console.log(passwordArray)
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-red-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="container mx-auto w-3/4  text-white flex flex-col p-4 ">
                <h1 className=' font-bold justify-center item-center flex' >
                    <span className='text-gray-700 text-2xl '>&lt;</span>
                    <span className='text-black text-2xl '>Paas</span>

                    <span className='text-gray-700 text-2xl  '>OP/&gt;</span></h1>

                <p className='flex justify-center text-gray-700 text-lg font-bold gap-4 my-3'>  your own password manager </p>

                <input value={form.site} onChange={handlechange} className='flex rounded-full border border-red-300 p-4 py-1 text-black  ' type="text " name='site' id='' placeholder='Enter Website URL' />
                <div className="flex flex-col md:flex-row gap-3">
                    <input value={form.username} onChange={handlechange} className='flex rounded-full border border-red-300 p-4 py-1 w-full  text-black my-4 ' type="text " name='username' id='' placeholder='Enter UserName' />


                    <div className='relative'>


                        <input ref={passwordref} value={form.password} onChange={handlechange} className='flex rounded-full border border-red-300 p-4 py-1 w-full  text-black my-4' type="password" name='password' id='' placeholder='Enter Paasword' />
                        <img ref={ref} onClick={showpaasword} className='text-black absolute cursor-pointer right-2 top-5 w-4' src="https://cdn0.iconfinder.com/data/icons/things-ui/24/eye-cross-1024.png" alt="" />
                    </div>

                </div>

                <button onClick={handlsave} className='bg-red-400 flex justify-center item-center w-fit px-2 py-1 rounded-full gap-1 hover:bg-red-300 '>
                    <lord-icon src="https://cdn.lordicon.com/zrkkrrpl.json" trigger="hover"></lord-icon>
                    SAVE
                </button>

                <div className="paaswords">
                    <h2 className='flex  text-gray-700 text-lg font-bold my-4'>Your Paaswords</h2>
                    {passwordArray.length === 0 && <div className='text-black'>No Password To Show</div>}
                    {passwordArray.length != 0 &&
                        <table className=" bg-red-300 w-full rounded-lg overflow-hidden">
                            <thead className='bg-red-400'>
                                <tr>
                                    <th className='px-10'>Site</th>
                                    <th className='px-10'>Username</th>
                                    <th className='px-10'>Password</th>
                                    <th className='px-10'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className=' py-2 text-center w- 32 font-xl'><a href={item.site}>{item.site}</a></td>
                                        <td className=' py-2 text-center w- 32 font-xl'>{item.username}</td>
                                        <td className=' py-2 text-center w- 32 font-xl'>{item.password}</td>
                                        <td className=' py-2 text-center w- 32 font-xl  '>
                                            <span onClick={() => { editpassword(item.id) }} className='cursor-pointer '>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/oqaajvyl.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            <span onClick={() => { deletepassword(item.id) }} className='cursor-pointer'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/vlnvqvew.json"
                                                    trigger="hover">
                                                </lord-icon></span></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </>
    )
}

export default manager
