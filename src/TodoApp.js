import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';

function TodoApp(props) {
    const initialTodos = [
        { id: uuid(), task: 'clean fishtank', completed: true },
        { id: uuid(), task: 'walk dog', completed: false },
        { id: uuid(), task: 'cook dinner', completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (task) => {
        let newTodo = { id: uuid(), task: task, complete: false }
        setTodos([...todos, newTodo])
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
    }
    const editTodo = (todoId, todoTask) => {
        let newTodos = todos.map(todo=>{
            if(todo.id===todoId){
                todo.task= todoTask;
            }
            return todo;
        })
        setTodos(newTodos)
    }
    const checkTodo = (id) => {
        let newTodos = todos.map(todo=>{
            if(todo.id===id){
                todo.completed= !todo.completed;
            }
            return todo;
        })
        setTodos(newTodos)
    }
    return (
        <Paper
            style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa' }} elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <ToolBar>
                    <Typography color='inherit'>Todos with hooks</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} editTodo={editTodo}></TodoList>
                </Grid>
            </Grid>
        </Paper>


    );
}

export default TodoApp;