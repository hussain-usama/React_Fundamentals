import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch"

const PostComments=()=>{
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, loader, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const response = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
    console.log(response,'response')
    return(
        <div>
            <h3>COMMENT LIST</h3>
            {
                loader ? 
                <h3>loading...</h3>
                :
                <>
                {data && data.map((item)=>{
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })}
                </>
            }
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}
export default PostComments