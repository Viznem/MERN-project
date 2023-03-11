import Todos from './Todos';

const InputForm = (props) => {
    const onChangeHandler = (event) => {
       props.handleOnChange(event.target.value)
    }

    const onClickHandler = (event) => {
        props.handleOnClick(event)
    }

    return (
        <div>
             <Todos todos={props.todos} />
            <input type="text" value={props.title} onChange={(e) => onChangeHandler(e)}/>
            <button type='button' onClick={(event) => onClickHandler(event)}>Accept</button>
        </div>
    )
}

export default InputForm;