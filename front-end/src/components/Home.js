import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function Home() {

  const [todos, setTodos] = useState([])
  const [render,setRender] = useState(true)
  const [isUpdate, setIsUpdate] = useState({ text: '', state: false })
  const addTodo =async (todo) => {
    await axios.post('http://localhost:5050/save', { text: todo })
      .then(() => console.log('Added Sucessfully'))
      .catch((err) => console.log(err, 'error'))
    setIsUpdate({...isUpdate, text: {text:''}})
    setRender(!render)
  }

  const updateTodo =async (id, text) => {
    await axios.post('http://localhost:5050/update', { id, text })
      .then((res) => console.log(res.data, 'res'))
      .catch(err => console.log(err, 'err'))
      setRender(!render)
      setIsUpdate({...isUpdate, state: false, text: {}})
  }

  const deleteTodo =async (id) => {
    await axios.post('http://localhost:5050/delete', { id })
      .then(() => console.log('Deleted Sucessfully'))
      .catch(err => console.log(err))
    setRender(!render)
  }

  const editTodo = (id, text) => {
    setIsUpdate({ text: { id, text }, state: true })
  }
  const getData =async () => {
    await axios.get('http://localhost:5050')
      .then((data) => { setTodos(data.data) })
      .catch(err => console.log(err, 'error'))
  }
  const deleteAll =async ()=> {
    await axios.delete('http://localhost:5050')
    .then(res => console.log('Dlt all', res))
    .catch(err => console.log('Dlt all error'))
    setRender(!render)
  }
  useEffect(() => {
    getData()
  }, [render])
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} updateTodo={updateTodo} isUpdate={isUpdate} deleteAll={deleteAll} />
      {
        todos.map((val, idx) => {
          return (
            <Todo data={val} editTodo={editTodo} deleteTodo={deleteTodo} key={idx} idx={idx+1} />
          )
        })
      }
    </div>
  );
}

export default Home;
