import {useState} from 'react'
import Nav from '../src/views/Nav';
import InputForm from './views/InputForm';

function App() {
  let [title, setTitle] = useState('');
  let [todos, setToDos] = useState([])

  const onChangeInputForm = (value) => {
    setTitle(value)
 }

 const onClickInputForm = (event) => {
  if (!title) {
      return;
  }

  let newTodo = {id: Math.floor(Math.random() * 1000) + 1, title: title}
  setToDos([...todos, newTodo])
  setTitle('')
}

  return (
    <div>
      <Nav />
      <div>
        <InputForm todos={todos} title={title} handleOnChange={onChangeInputForm} handleOnClick={onClickInputForm}/>
      </div>
      
    </div>
  );
}

export default App;
