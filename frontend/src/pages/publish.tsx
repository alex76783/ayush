import { useState, type Dispatch, type SetStateAction } from "react";
import AppBar from "../components/appBar";
import { BACKEND_URL } from "../config";
import axios from "axios";

export default function Publish(){
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    return (
        <div className="">
        <AppBar/>
        <TitleArea setTitle={setTitle} />
        <TextArea setContent={setContent}/>
        <div className="flex justify-center mt-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full " onClick={async ()=>{
                await axios.post(`${BACKEND_URL}/api/v1/user/blog`,{
                    title,
                    content
                },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                })
            }}>
            Publish
        </button>
        </div>
        
        </div>
        
        

    )
    
}

interface titleProps  {
    setTitle : Dispatch<SetStateAction<string>>;
}

function TitleArea({setTitle}:titleProps):any{
    return(
            <div>
        <div className="flex justify-center ">
            <input  name="title" type="text" placeholder="TITLE" className=" text-4xl bg-gray-100 text-gray-900   w-full  mt-10   h-20  focus:outline-none  text-center " onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
        </div>
    </div>
     
    )
}

interface contentProps  {
    setContent : Dispatch<SetStateAction<string>>;
   
}


function TextArea({setContent}:contentProps):any{
    return (
        <div>
            <textarea name="content"  rows={4} className="  mt-2 w-full  block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg  focus:outline-none h-100" placeholder="Tell your story" onChange={(e)=>{
                setContent(e.target.value)
            }}></textarea>

        </div>
    )
}