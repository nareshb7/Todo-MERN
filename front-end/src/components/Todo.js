import React from 'react'

const Todo = ({ data, editTodo, deleteTodo, idx }) => {
    const { _id, text} = data
    return (
        <div className='todoDiv'>
            <span style={{fontSize:'24px', color:'#ddd', fontWeight:'600'}}>Todo : {idx}</span>
            <hr/>
            <div className='todoText'>{text}</div>
            <div className='icons'>
                <button onClick={() => editTodo(_id, text)}>Update</button>
                <button onClick={()=> deleteTodo(_id)}>Delete</button>
            </div>
        </div>
    )
}
export default Todo