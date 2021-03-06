import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList(props) {
    const { removeTodo, checkTodo, editTodo, todos } = props;
    if (todos.length)
        return (

            <Paper>

                <List>
                    {todos.map((todo, idx) =>
                        <div key={todo.id}>
                            <Todo todo={todo} removeTodo={removeTodo} checkTodo={checkTodo} editTodo={editTodo} />
                            {idx < todo.length - 1 && <Divider />}
                        </div>
                    )}
                </List>

            </Paper>
        );
    return null;
}

export default TodoList;