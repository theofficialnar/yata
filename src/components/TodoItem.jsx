import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { useState, useEffect } from 'react';

function TodoItem({ data, onDataChanged, onDeleteTask }) {
    const [isActive, setIsActive] = useState(false);
    const [todoData, setTodoData] = useState(data);

    useEffect(() => {
        onDataChanged(todoData);
    }, [todoData]);

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

        setTimeout(() => {
            setIsActive(false);
        }, 200);
    };

    /**
     * Renders a textfield or plain text depending on isActive state
     * @returns {JSX.Element} JSX element
     */
    const renderText = () => (
            <>
                <InputBase
                    fullWidth
                    variant="standard"
                    defaultValue={todoData.task}
                    onBlur={handleTaskChanged}
                    onFocus={() => setIsActive(true)}
                    name="task"
                    placeholder="What's on your mind?"
                    sx={{ borderBottom: isActive ? 2 : 0, borderColor: 'primary.main' }}
                />
                {isActive ? (
                    <IconButton onClick={() => onDeleteTask(todoData.id)}>
                        <ClearRoundedIcon />
                    </IconButton>
                ) : null}
            </>
        );

    return (
        <>
            <Checkbox name="isDone" onChange={handleTaskChanged} /> {renderText()}
        </>
    );
}

export default TodoItem;
