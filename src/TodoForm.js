import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import setInputState from './hooks/useInputState';

function TodoForm(props) {
    const {addTodo} = props;
    const [value, handleChange, reset]=setInputState('')
    const handleAddTodo = (evt) => {
        evt.preventDefault();
        addTodo(value);
        reset();
    }
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={handleAddTodo} >
                <TextField required value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
            </form>           
        </Paper>
    );
}

export default TodoForm;