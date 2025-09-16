import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

// To get blog based on id

export  function useBlog({id}:{id: string}){
    const [loading,setLoading] = useState(true)
    const [blog,setblog] = useState([])

    useEffect(()=>{
        const fetchUser = async ()=>{
            const response = await axios.get(`${BACKEND_URL}/api/v1/user/blogs/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        
    )
    const data = response.data.blog;
    setblog(data)
    setLoading(false)

        }
        fetchUser()
    },[id])



    return{
        loading,
        blog
    }


} 

// To get blogs for main page 

export  function useBlogs(){
    const [loading,setLoading] = useState(true)
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
         const fetchUser =  async ()=>{
        const response =  await axios.get(`${BACKEND_URL}/api/v1/user/blogs/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        const data = response.data.blogs;
        setBlogs(data);
        setLoading(false)
    }

    fetchUser();


    },[])
   
    return {
        loading,
        blogs
    }


}