import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';

const TodoItem = ({ data, onDataChanged }) => {
    const [isActive, setIsActive] = useState(false);
    const [todoData, setTodoData] = useState(data);

    useEffect(() => {
        onDataChanged(todoData);
    }, [todoData]);

    /**
     * Renders a textfield or plain text depending on isActive state
     * @returns {JSX.Element} JSX element
     */
    const renderText = () => {
        return isActive ? (
            <TextField
                variant="standard"
                defaultValue={todoData.task}
                onBlur={handleTaskChanged}
                name="task"
                autoFocus
                fullWidth
                placeholder="What's on your mind?"
            />
        ) : (
            <Typography onClick={() => setIsActive(true)}>{todoData.task}</Typography>
        );
    };

    /**
     * Updates the todo state whenever the task value has been updated
     * @param {Object} evt Event data object
     */
    const handleTaskChanged = (evt) => {
        const { name } = evt.target;
        const value = name === 'task' ? evt.target.value : evt.target.checked;

        setTodoData({
            ...todoData,
            [name]: value,
        });
        setIsActive(false);
    };

    return (
        <>
            <Checkbox name="isDone" onChange={handleTaskChanged} /> {renderText()}
        </>
    );
};

export default TodoItem;
