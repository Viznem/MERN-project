
const Todos = (props) => {
    let todos = props.todos
    return (
        <div>
            {todos.map(todo => {
                return (
                    <li key={todo.id}>{todo.title}</li>
                )
            })}
        </div>
    )
}

export default Todos;
