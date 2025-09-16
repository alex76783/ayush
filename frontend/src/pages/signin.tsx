import { useState } from 'react';
import Input from '../components/Input'
import Quote from '../components/quote'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BACKEND_URL } from '../config';


export default function Signup(){
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        password:"",
    })

     async function sendRequest(){
         const response =  await axios.post(`${BACKEND_URL}/api/v1/user/signin`,inputs)
        const jwt = response.data;
        localStorage.setItem("token",jwt)
        navigate("/blog")
    }

    return (
    <div className="md:grid grid-cols-2 min-h-screen ">
        <div>
            <div>
                <div className="flex justify-center mt-20 font-bold text-2xl" > LOGIN </div>
                <div className="flex justify-center  text-sm text-gray-600">Dont have an account ? <Link className='underline' to={"/signup"}>Signup</Link> </div>
           </div>
           
           <div className="flex flex-col items-center justify-ceter mr-60 mt-10">

                <form className="w-60" >
            


                    <Input  label={"Email"} placeholder={"Enter your Email"} className='mt-5' onChange={(e)=>{
                        setInputs({
                            ...inputs,
                            email:e.target.value
                        })
                    }} />
                    <Input  label={"Password"} placeholder={"Enter your Password"} className='mt-5' onChange={(e)=>{
                        setInputs({
                            ...inputs,
                            password:e.target.value
                        })
                    }}/>

                    <button  onClick={sendRequest} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-grey-700 rounded w-full mt-5">sign up</button>

                </form>

           </div>
        </div>

        <div className='invisible md:visible bg-gray-100' >
        {/* {JSON.stringify(inputs)} */}
            <Quote/>
        </div>
    </div>
    
    )
        
        
}