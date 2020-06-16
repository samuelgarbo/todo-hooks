import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import setInputState from './hooks/setInputState';

function TodoForm(props) {
    const {addTodo} = props;
    const [value, handleChange, reset]=setInputState('')
    const handleAddTodo = (evt) => {
        evt.preventDefault();
        addTodo(value);
        reset();
    }
    return (
        <Paper>
            <form onSubmit={handleAddTodo} >
                <TextField value={value} onChange={handleChange}>
                </TextField>
            </form>           
        </Paper>
    );
}

export default TodoForm;