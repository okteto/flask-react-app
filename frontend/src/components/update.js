import React from "react"
import {useHistory} from 'react-router-dom'



export const Update = ({id}) =>{
    const history = useHistory()
    const updateTodo = () =>{
        fetch(`/api/${id}`,{
            method: 'PUT',
            body:JSON.stringify({
                id:id
            })
        }).then(response => response.json())
        .then(data => {
            history.push('/')

        })

    }

    return(
        <>
        <button onClick={updateTodo}>Update</button>
        </>
    )
}