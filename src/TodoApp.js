import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';

function TodoApp(props) {
    const initialTodos = []
    
    const {todos, addTodo, removeTodo, editTodo, checkTodo}=useTodoState(initialTodos);

    

    
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