import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm(props) {
    const [value, handleChange, reset] = useInputState(props.task);
    const handleEditTodo = (evt) => {
        evt.preventDefault()
        props.editTodo(props.id, value);
        props.toggle()
    }
    return (        
        <form onSubmit={handleEditTodo}>
            <TextField value={value} onChange={handleChange} margin='normal' fullWidth/>        
        </form>
    );
}

export default EditTodoForm;