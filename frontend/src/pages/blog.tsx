import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import { Spinner } from "../components/spinner";

export function Blog_individual(){
    const {id} = useParams<{ id: string }>()
    const {loading , blog} = useBlog({id:id || ""});
    if (!loading){
        return (
            <div>
                <Spinner/>
            </div>
        )  
    }
    return (
        <div>
          <FullBlog/>
            

        </div>
    )

}