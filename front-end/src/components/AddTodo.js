import React, {useState, useEffect, memo} from "react";

const AddTodo =({addTodo, updateTodo, isUpdate})=> {
    const {id, text} = isUpdate.text
    const [ipt, setIpt] = useState('')
    useEffect(()=> {
        text ? setIpt(text) : setIpt('')
    }, [text])
    return (
        <div className="addTodo">
            <input type='text' value={ipt} name='text' onChange={(e)=> setIpt(e.target.value)} placeholder='Add Todo...' />
            {
                isUpdate.state ? <button onClick={()=> updateTodo(id, ipt)}>Update</button> : <button onClick={()=> addTodo(ipt)}>Add</button>
            }
        </div>
    )
}
export default memo(AddTodo)