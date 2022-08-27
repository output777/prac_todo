import React, { useState } from 'react'

const FirstTodoList = () => {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const onChangeInputTodo = (e) => {
    const { value } = e.target;
    setInputTodo(value)
  }


  const onClickAddTodoHandler = () => {
    setTodos((prev) => [...prev, inputTodo]);
    setInputTodo('')
  }


  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' value={inputTodo} onChange={(e) => onChangeInputTodo(e)} />
      <button onClick={onClickAddTodoHandler}>추가하기</button>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo, index) => (
          <div key={index} id={index}>
            <span>{index}: {todo}</span>
            {/* <button onClick={() => onClickDeleteHandler(index)}>삭제하기</button> */}
            {/* <button onClick={() => onClickUpdateHandler(index)}>수정하기</button> */}
          </div>
        ))}
      </ul>
    </div>
  )
}



// const onClickDeleteHandler = (index) => {
//   // console.log(todos.slice(index, index + 1));
//   // 불변성을 유지하기 위해 전개연산자로 복사해서 원본을 유지시킨다.
//   const data = [...todos];
//   data.splice(index, index + 1);
//   setTodos(data);

// }

// const onClickUpdateHandler = () => {
//   setIsEdit(true);
// }

// const onClickSaveHandler = (index) => {
//   console.log(todos.slice(index, index + 1));
//   // 불변성을 유지하기 위해 전개연산자로 복사해서 원본을 유지시킨다.
//   //  const data = [...todos];
// }






// {
//   !isEdit ?
//   <>
//     <span>{index}: {todo}</span>
//     <button onClick={() => onClickDeleteHandler(index)}>삭제하기</button>
//     <button onClick={() => onClickUpdateHandler(index)}>수정하기</button>
//   </>
//   :
//   <>
//     <input type='text' value={inputTodo} onChange={(e) => onChangeInputTodo(e)} />
//     <button onClick={() => onClickDeleteHandler(index)}>삭제하기</button>
//     <button onClick={() => onClickSaveHandler(index)}>저장하기</button>
//   </>
// }
export default FirstTodoList