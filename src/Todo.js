import React from 'react';
import { ListItemText, ListItem, Checkbox } from '@material-ui/core';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm'; 


function Todo(props) {
    const { completed, task, id } = props.todo;
    const {editTodo} = props;
    const [isEditing, toggle] = useToggleState(false);
    const handleRemoveTodo = () => {
        props.removeTodo(id)
    }
    const handleCheckTodo = () => {
        props.checkTodo(id);
    }
    return (
        <ListItem >
            {isEditing
                ?   <EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle}/>
                :   <>
                        <Checkbox tabIndex={-1} checked={completed} onClick={handleCheckTodo} />
                        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
                    </>
            }
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={handleRemoveTodo}>
                    <Delete />
                </IconButton>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;